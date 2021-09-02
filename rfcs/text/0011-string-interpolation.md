- Feature Name: `string_interpolation`
- Start Date: 2020-11-30
- Tremor Issue: [tremor-rs/tremor-runtime#726](https://github.com/tremor-rs/tremor-runtime/issues/726)
- RFC PR: [tremor-rs/tremor-rfcs#34](https://github.com/tremor-rs/tremor-rfcs/pull/34)

## Summary
[summary]: #summary

This RFC covers the implementation and behavior of string interpolation in both strings and heredocs.

## Motivation
[motivation]: #motivation

String interpolation is a powerful tool to create text in a dynamic fashion. Getting it to work in a consistent and unsurprising manner however is non-trivial. The goal of this RFC is to cover various edge cases to find an optimal interface. It also will discuss integration with the `std::string::format` function as it offers a related mechanism.

## Guide-level Explanation
[guide-level-explanation]: #guide-level-explanation

Interpolation should work equally in heredocs and strings; for readability, we will refer to it as `string interpolation` in an inclusive way.

The goal of string interpolation is making the creation of strings simpler. The basic facility is the ability to embed code inside a string that is executed and its result, then integrated into the string. There are more advanced systems, such as templating libraries like [Mustache](https://mustache.github.io/); however, for now, that kind of feature set is outside of the scope of the RFC.

For simplicity of use, we will include strings and numbers verbatim, but render all other data structures as JSON. An alternative approach would be to enforce the type to be primitive, or even string but that feels like an unnecessary burden as auto conversion does not prevent manual conversion.


### Considerations for Tremor

The syntax we are looking at is using `{}` to encapsulate data to be interpolated:

```tremor
"13 + 29 = {13 + 29}"
```

We are also using `{}` in `string::format`, which leads to conflicts.

An alternative would be to adopt a more verbose form of interpolation and prefix the `{...}` with an additional character. A few options could be:

* `${ ... }` - the drawback being that $ is already used to stand for `metadata`, by that overloading the sign. This is a well-known format.
* `#{ ... }` - `#` is currently used for comments, by that, overloading the sign. This is a well-known format.
* `%{ ... }` - the `%` sign with squiggly is currently also a record pattern for extractors, by that, overloading the sign.
* `!{ ... }` - the `!` sign is easy to miss and not very readable.
* `@{ ... }` - no overloading at the moment.
* `&{ ... }` - no overloading at the moment.
* `*{ ... }` - no overloading at the moment.
* `{{ ... }}` - no overloading, a bit verbose.

### Use Cases

#### string Only

```tremor
"13 + 29 = {13 + 29} escaped: \{} {{}}"
"13 + 29 = ${13 + 29} escaped: \${}"
"13 + 29 = #{13 + 29} escaped: \#{}"
"13 + 29 = %{13 + 29} escaped: \%{}"
"13 + 29 = !{13 + 29} escaped: \!{}"
"13 + 29 = @{13 + 29} escaped: \@{}"
"13 + 29 = {{13 + 29}} escaped: \{{}}"
```
#### Object Keys

```tremor
{
  "key_{13 + 29} escaped: \{} {{}}": 1,
  "key_${13 + 29} escaped: \${}": 2,
  "key_#{13 + 29} escaped: \#{}": 3,
  "key_%{13 + 29} escaped: \%{}": 4,
  "key_!{13 + 29} escaped: \!{}": 5,
  "key_@{13 + 29} escaped: \@{}": 6,
  "key_{{13 + 29}} escaped: \{{}}": 7
}
```

#### Code Generation

```
"""
# using \ escape
\{
    "key": \{
        "key1": 42
    },
    "snot": {badger},
}
# using {{}} escape
{{
    "key": {{
        "key1": 42
    }},
    "snot": {badger},
}}
# using any of the prefix ones
{
    "key": {
        "key1": 42
    },
    "snot": #{badger},
}
# using double squigly
{
    "key": {
        "key1": 42
    },
    "snot": {{badger}},
}
"""
```

#### Observations on Escaping

There are competing concerns regarding escaping. In this section, those opposing considerations are laid out.

One of the desires is to reduce complexity and the need to learn new syntax for an operator. This guides us towards a single escape character; `\` is what we use everywhere else, so the conclusion from this desire would be to escape the beginning with a `\` to be in line with all other escapes.

A competing concern is the desire of readability, using `\{` to escape doesn't read well and introduces asymmetry unless `\}` is also escaped, however, then `\}` would be escaped without a reason to do so, and suddenly allow `}` to be written as `\}`, and `}` that adds possible style and usage complexity.

To address asynchronicity, an option is using `{{` and `}}`. Those read nicely and are symmetric; however, this introduces an unnessessary escape of `}}`, and leads to the situation where there are two forms of correct code: `"this {{ is not }} interpolated"` as well as `"this {{ is not } interpolated"`.

A middle ground is to pick a two-character start sequence for interpolation. This mirrors what most [other languages](#prior-art) do. Adding a leading character such as `#`, `$`, `@`, etc. means that `{}` no longer has to be escaped, and instead, the escape is for that leading character, and only when it is followed by a `{`. To give an example, using `#`:

- `"this #{"is"} interpolated"`.
- `"this { is not } interpolated"`.

Or for the more complex case of code generation:

```
"""
{
    "key": {
        "key1": "and this is \#{not interpolated}"
    },
    "snot": #{interpolated_variable},
}
"""
```

#### Interaction with Format

##### Use Case: Building a Format String Dynamically and Inputting Data

```tremor
let f = match event.type of
  case "warning" => "be warned, something went wrong: {}"
  case "error" => "ERROR OMG! {}",
  default => "oh, hi, you can ignore this: {}"
end;

string::format(format, event.msg);
```

##### Format and Interpolation

```tremor
string::format("this should work {}", 42) == "this should work 42";
string::format("this should {"also work"} {}", 42) == "this should also work 42";
string::format("this should create a {{}} and say {}", 42) == "this should create a {} and say 42";
string::format("this should {"also work"}, create a {{}} and show {}", 42)  == "this should also work, create a {} and say 42";
```

This can cause issues since both interpolation and format give `{}` a special meaning. There are multiple possible solutions to this:

1. "Deal with it"- this means that passing an interpolated string into format will require different escaping as a non interpolated string. This adds an unnecessary burden and learning curve on users, and should be avoided.
2. Choose a different placeholder for format- this will break backward compatibility; it has the advantage that revisiting string::format might make it more powerful.
3. Choose a different for interpolation, such as a prefix- would also resolve the problem and break backward compatibility, but allow exploring alternative ways for interpolation.
4. Remove string::format- this would break backward compatibility, but simplify things in the long run.

Options 2 and 3 are non-exclusive.

#### Conclusion

Between the required tradeoffs to be made, using a two-letter starting sequence looks like the sweet spot.

Upsides:

1. `string::format` compatibility: as `{}` no longer has a special meaning- this means `string::format` needs no change.
2. Balanced escaping: as `{` no longer needs to be escaped, neither does `}`.
3. Escaping in code generation: since a two character sequence is significantly less likely to overlap- it will not eliminate the potential need for it, but that is always true
4. As there is only one sequence and one way to write it, it keeps the complexity at the same level
5. Since it is the [most common approach](#prior-art) for interpolation, it is easier to learn by knowledge transfer.

Downsides:

1. It is a breaking change (however every change would be).

From the survey of of existing implementations, the most common form seems to be `${...}`, followed closely by `#{...}`. Both seem workable; however, both `$` and `#` have their own meaning in Tremor script.

- `#` is the comment character, so it can be reasond that it is switching contexts from code to comment, or from string to interpolation.
- `$` is our `metadata`, which could be reasoned that `${...}` is a meta context; however, this seems to be a bit of a stretch and `${$}` would read quite odd.

Considering all this, the proposed solution for this RFC is to use `#{...}` for string interpolation.

## Reference-level Explanation
[reference-level-explanation]: #reference-level-explanation

The implementation holds a few requirements:

1. Non-interpolated strings should have no additional overhead.
2. Constant folding should apply to interpolation.
3. Interpolated strings should, at worst, have the same cost as string concatenation; at best, be more preformat.
4. Errors should remain hygienic and useful.
5. The behaviour of interpolation should be the same in strings and heredocs.
6. Aside from the interpolation, behaviour of interpolated and non-interpolated strings should remain the same (read: adding an interpolated item to a string should not change behaviour).


## Drawbacks
[drawbacks]: #drawbacks

There are some drawbacks to consider:

From a user perspective, string interpolation adds to the cognitive complexity as it introduces a new logical element and new escaping requirements. This can partially be mitigated with good integration in highlighting to ease the readability.

Another drawback to consider is hidden performance cost. A string, intuitively, feels cheep, as it is a primitive datatype. By adding interpolation, strings become significantly more 'expensive' without being very explicit about it.

The overlap with string::format introduces the situation where we have two mechanisms that to the most degree, solve the same problem. Giving users this choice makes it harder to write (and by that read) 'idiomatic' Tremor code.

The choice of syntax comes with different drawbacks. Using a single `{}` style will force additional escaping. A longer syntax, for example, one of the prefixed ones, will be more typing, but would resolve a lot of escaping needs as `*{` is going to be a lot less common then a single `{`.

## Rationale and Alternatives
[rationale-and-alternatives]: #rationale-and-alternatives

String interpolation feels more natural than using format functions or concatenation. While the aforementioned drawbacks exist, they are outweighed by the gain in usability.

An alternative would be to extend the format function and drop interpolation, but the general aim for operator-friendliness and usability rules this out.

## Prior Art
[prior-art]: #prior-art

There are many existing implementations of string interpolation. For reference, here are a few each producing the string `13 + 29 = 42`:

### Two-character Sequences

**Ruby**
```ruby
"13 + 29 = #{13 + 29}
```

 **Elixir**
```elixir
"13 + 29 = #{13 + 29}
```


**Coffeescript**
```coffeescript
"13 + 12 = #{13 + 29}"
```

**Javascript**
```js
`13 + 29 = ${13 + 29}`
```

**Groovy**
(also supports variable access via $)
```groovy
"13 + 12 = ${13 + 29}"
```

**Haxe**
(also supports variable access via $)
```haxe
"13 + 12 = ${13 + 29}"
```

**Dart**
(also supports variable access via $)
```dart
"13 + 12 = ${13 + 29}"
```

**BASH**
```bash
"13 + 12 = $(expr 13 + 29)"
```

**LUA**
```lua
"13 + 12 = %(13 + 29)"
```

**SWIFT**
```swift
"13 + 12 = \(13 + 29)"
```

**Julia**
(also supports variable access via $)
```julia
"13 + 12 = $(13 + 29)"
```

### Second-string Type
**C#**
```c#
$"13 + 12 = {13 + 12}"
```
**Kotlin**
(also supports variable access via $)
```kotlin
    var answer = ;
    "13 + 29 = ${13 + 29}"
```

**F#**
```f#
$"13 + 12 = {13 + 12}"
```

**Python**
```python
f'13 + 29 = {13 + 29}'
```

**Kotlin**
(limited to variables)
```kotlin
    val answer = 13 + 29;
    s"13 + 29 = $answer"
```

**Haskell**
(via library)
```haskell
 [i|13 + 12 = #{13 + 29}|]
```
### Other

**Perl**
(limited to variables)
```perl
    answer = 13 + 29;
    "13 + 29 = $answer"
```

**PHP**
(limited to variables)
```php
    $answer = 13 + 29;
    "13 + 29 = $answer"
```

A more extensive list, including replacement and concatenation, can be found on [rosettacode](https://rosettacode.org/wiki/String_interpolation_(included)).

## Unresolved Questions
[unresolved-questions]: #unresolved-questions

- Is it worth sticking with `{}` for interpolation despite the drawbacks on escaping?
- What longer sequence would be the most appropriate?

## Future Possibilities
[future-possibilities]: #future-possibilities

This RFC does exclude considerations for a templateing language. This is, however, a possible extension for the future worth keeping in mind, but might require a separate file format or different syntax to keep the complexity at bay.
