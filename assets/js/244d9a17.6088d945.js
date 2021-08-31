(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[5466],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8262:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={},l=void 0,u={type:"mdx",permalink:"/0010-modularity",source:"@site/src/pages/0010-modularity.md"},p=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Guide-level Explanation",id:"guide-level-explanation",children:[{value:"Module Path",id:"module-path",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Preprocessor",id:"preprocessor",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Tuple patterns",id:"tuple-patterns",children:[]}]},{value:"Reference-level Explanation",id:"reference-level-explanation",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]},{value:"Rationale and Alternatives",id:"rationale-and-alternatives",children:[]},{value:"Prior art",id:"prior-art",children:[]},{value:"Unresolved Questions",id:"unresolved-questions",children:[]},{value:"Future Possibilities",id:"future-possibilities",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Feature Name: rfc-0010-modularity"),(0,o.kt)("li",{parentName:"ul"},"Start Date: 2020-04-02"),(0,o.kt)("li",{parentName:"ul"},"Tremor Issue: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-runtime/pull/174"},"tremor-rs/tremor-runtime#0174")),(0,o.kt)("li",{parentName:"ul"},"RFC PR: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-rfcs/pull/0021"},"tremor-rs/tremor-rfcs#0021"))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Provide mechanisms for sharing, reuse and composition of user-defined logic in Tremor."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"As user-defined logic deployed with Tremor script and query pipelines become more complex and larger (by significant lines of code), mechanisms that favour better composition, reuse and sharing of user-defined logic and queries are needed."),(0,o.kt)("p",null,"Currently, the unit of modularity and unit of deployment in Tremor are indivisible blobs of code- be they scripts or queries. This has worked very well to date, but as the complexity and size of solutions built with Tremor grows, this is no longer tenable in the long term."),(0,o.kt)("p",null,"Identified requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As Tremor has multiple DSLs, the building blocks for reusing units of\ncode from the file system should be common across DSLs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For tremor-script, code should be modularisable through the\nintroduction of functions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For tremor-query, code should be modularisable through modular\ndefinitions and/or reusable sub-queries.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Modules should be nestable on the file system, and within DSLs with\na consistent means to reference units of code or values defined\nwithin nested modules, regardless of their origin (within the same\nunit of code, from some external module).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There should be a mechanism to load external libraries or packages\nof code from well-known locations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The module mechanism should be usable by multiple DSLs with minimal\neffort and with the same basic behaviour and structure. However, this\nRFC does not place constraints on any DSL specifics per se."))),(0,o.kt)("h2",{id:"guide-level-explanation"},"Guide-level Explanation"),(0,o.kt)("p",null,"Elements of modular user-defined logic in the Tremor project."),(0,o.kt)("h3",{id:"module-path"},"Module Path"),(0,o.kt)("p",null,"A module path is a set of URLs (normatively directories on a file system) that form the root of a set of related modules."),(0,o.kt)("p",null,"On Linux/Unix, module paths are provided via the TREMOR_PATH environment variable, and they are separated by ':' (colon). Paths that are not readable or that do not exist are ignored."),(0,o.kt)("p",null,"Example path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'TREMOR_PATH="/etc/tremor/lib:/opt/shared/framework/lib:/opt/myproject/mylib"\n')),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Modules in Tremor are the lowest unit of compilation available to developers to modularise Tremor logic across multiple logical namespaces. On the filesystem, modules are rooted at a base path and are nested with folders. Within a file nesting is via the mod clause."),(0,o.kt)("p",null,"In tremor-script, only the top-level module can capture events or or mutate state. Modules loaded via the module system are restricted to const, fn, and intrinsic expressions. By design constraint at this time, tremor-script is biased towards pure side-effect free functional programming."),(0,o.kt)("p",null,"In tremor-query, only the top-level module can create nodes in the active query pipeline graph. A module logically encapsulates a reusable sub-graph in a query pipeline. The definitions of windows, operators or scripts can be reused. Within embedded scripts, modules used in scripts are constrained to the rules for modules for tremor-script. In addition, tremor-script modules can be included in trickle files to expose their functions and constants for use in ",(0,o.kt)("inlineCode",{parentName:"p"},"select"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"group by"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"having")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"where"),"."),(0,o.kt)("p",null,"In both the tremor-script and tremor-query DSLs, modules can be defined physically on the file system. For example, given the following modular hierarchy configured on the module path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\n  +-- foo\n    +-- bar\n      +-- snot.tremor\n    +-- baz\n      +-- badger.tremor\n\n")),(0,o.kt)("p",null,"A modular tremor-script can refer to the constant values as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"use foo::bar::snot; # snot is a ref to 'foo/bar/snot.tremor'\nuse foo::baz::badger; # badger is a ref to 'foo/bar/badger.tremor'\n\nlet c = \"{snot::snot}{badger::badger}\"; # fully qualified references\n\nc\n")),(0,o.kt)("p",null,"The same module hierarchy can be created in a Tremor file directly as\nfollows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'mod foo with\n  mod bar with\n    const snot = "beep";\n  end;\n  mod baz with\n    const badger = "boop";\n  end;\nend;\n\nlet snot = foo::bar::snot;\nlet badger = foo::baz::badger;\n\n"{snot}-{badger}";\n')),(0,o.kt)("p",null,"Modules can be loaded via the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," clause which in turn loads a module from the physical file system via the module path."),(0,o.kt)("p",null,"Inline and externalised modules can be used separately or together, as appropriate."),(0,o.kt)("p",null,"Where there are existing references, a module can be aliased to avoid clashes in the local scope:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'use foo::bar as fleek;\n\n"Hello {fleek::snot}"\n')),(0,o.kt)("p",null,"Modules in Tremor query follow the same semantics and behaviour with respect to physical versus inline definition, aliasing to avoid naming scope clashes."),(0,o.kt)("p",null,"It is to be noted that inclusion via ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," will prevent circular inclusion as in\nfile ",(0,o.kt)("inlineCode",{parentName:"p"},"a.tremor")," can use ",(0,o.kt)("inlineCode",{parentName:"p"},"b.tremor"),", but at that point, ",(0,o.kt)("inlineCode",{parentName:"p"},"b.tremor")," can no longer\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"a.tremor")," as this would create a circle. This is a restriction of the current implementation, and may or may not be relaxed in the future."),(0,o.kt)("h3",{id:"preprocessor"},"Preprocessor"),(0,o.kt)("p",null,"In order to support the module mechanism with minimal changes to the API and runtime, a preprocessor loads all externally referenced modules used in Tremor logic defined in tremor-script or tremor-query, and loads them inline into a preprocessed file."),(0,o.kt)("p",null,"It is an error to attempt to deploy a tremor-script or tremor-query file that uses the module mechanism as source. The API only accepts non-modular files for backward compatibility or preprocessed files. The latter constraint is to ensure that logic deployed into the runtime is always traceable to source loaded by a user. Tremor explicitly avoids possibilities of modular logic changing at runtime."),(0,o.kt)("p",null,"The preprocessor defends this guarantee on behalf of our users."),(0,o.kt)("p",null,"This PR introduces two preprocessor directives:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"#!line <byte offset> <line> <column> <compilation unit> <filename>")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This directive tells the preprocessor that it is\nnow in a logically different position of the file."),(0,o.kt)("p",{parentName:"blockquote"},"For each folder/directory that an included source traverses, a\nmodule statement is injected into the consolidated source."),(0,o.kt)("p",{parentName:"blockquote"},"The #!line macro is a implementation detail mentioned here for the same\nof completeness, and not meant to be used or relied on by end users. It\nmay, without prior warning, be removed in the future."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"#!config <key> = <const-expr>")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Pipeline-level configuration in trickle, this allows setting\ncompile time pipeline configuration such as ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics_interval_s"),".")))),(0,o.kt)("p",null,"Preprocessing our script from the module section produces a single consolidated source file as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'#!line 0 0 0 1 ./foo/bar/snot.tremor\nmod snot with\n#!line 0 0 0 1 ./foo/bar/snot.tremor\nconst snot = "beep";\nend;\n#!line 19 1 0 0 script.tremor\n#!line 0 0 0 2 ./foo/baz/badger.tremor\nmod badger with\n#!line 0 0 0 2 ./foo/baz/badger.tremor\nconst badger = "boop";\nend;\n#!line 41 1 0 0 script.tremor\n\nlet c = "{snot::snot}{badger::badger}";\n\nemit c\n\n')),(0,o.kt)("h3",{id:"functions"},"Functions"),(0,o.kt)("p",null,"While constants in modules offer the ability to have reusable data, functions allow for reusable logic."),(0,o.kt)("p",null,"Functions are expression-based- so every function returns a data value. Functions cannot manipulate or mutate events, metadata or state. Side effecting operations to the data flow through a script such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"emit")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"drop")," keywords are also not allowed in functions."),(0,o.kt)("p",null,"Recursion, specifically tail recursion, is supported in functions but a maximum recursion depth (of currently 1024 by default) is imposed. The limit can be changed in tremor-server using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--recursion-limit LIMIT")," argument. As Tremor is primarily an event processing engine, there are no facilities for user-defined logic to loop or recurse infinitely. Recursion is indicated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"recur")," expression that gets passed data from the current iteration as arguments for the following invocation. Functions may access constants, but cannot access external mutable state."),(0,o.kt)("p",null,"Functions are limited to only call functions that were defined prior to themselves; this limits the risk of cyclic recursion between multiple functions and ensures that every call is guaranteed to terminate."),(0,o.kt)("h4",{id:"functions-come-in-multiple-forms"},"Functions Come in Multiple Forms:"),(0,o.kt)("h5",{id:"intrinsic-functions"},"Intrinsic functions"),(0,o.kt)("p",null,"Intrinsic functions provide the signature of a builtin function. These are provided for documentation purposes and so that API documentation can be provided for builtin functions in the same way as user-defined functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"### The `test` module is used for writing tremor unit\n### tests.\n\n## Runs an assertion for a test, ensures that `expected` and\n## `got` are the\n\n## same. If not errors.\n##\n## **WARNING**: Do not run assertions in production code!\n##\n## Returns an `bool`.\n\nintrinsic fn assert(name, expected, got) as test::assert;\n\n")),(0,o.kt)("h5",{id:"ordinary-functions"},"Ordinary Functions"),(0,o.kt)("p",null,"Of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"fn <name>([<args>][,...]) with")," provide named arguments with\noptional variable arguments through the ellipses ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," or varargs operator.\nVarargs are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," array."),(0,o.kt)("p",null,"The ordinary form does not support partial functions."),(0,o.kt)("p",null,"An ordinary function wrapping a call to a tail recursive fibonacci function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"fn fib(n) with\n  fib_(0, 1, n)\nend;\n\nfib(7); # Call locally defined function fib\n\n")),(0,o.kt)("h5",{id:"matching-functions"},"Matching Functions"),(0,o.kt)("p",null,"Matching functions using ",(0,o.kt)("inlineCode",{parentName:"p"},"fn <name>(<args>) of")," followed by case expressions, and an optional default statement that match."),(0,o.kt)("p",null,"The matching function form imposes a default case requirement so that unmatches cases have error handling defined. Unlike match expressions, the default case in user-defined functions must not (and can not) be omitted."),(0,o.kt)("p",null,"A contrived example showing math functions with value matching, extractor matching and function case guards:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'use std::type;\n\nfn snottify(s) of\n  case ("badger") => "snot badger, hell yea!"\n  case (\\~ json||) => let s.snot = true, s\n  case (s) when type::is_string(s) => "snot {s}"\n  default => "snot caller, you can\'t snottify that!"\nend;\n')),(0,o.kt)("h5",{id:"recursive-functions"},"Recursive Functions"),(0,o.kt)("p",null,"Tail recursive functions follow the signature of the function over which recursion is being invoked and use a ",(0,o.kt)("inlineCode",{parentName:"p"},"recur(<args>)")," call expression."),(0,o.kt)("p",null,"If the signature of a recursive call supports partial function semantics, then this is respected under tail recursion."),(0,o.kt)("p",null,"If the signature of a recursive call supports varargs semantics, then this is respected under tail recursion."),(0,o.kt)("p",null,"A tail-recursive implementation of fibonacci called by fib(n) above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},"fn fib_(a, b, n) of\n  case (a, b, n) when n > 0 => recur(b, a + b, n - 1)\n  default => a\nend;\n")),(0,o.kt)("h4",{id:"limitations-and-constraints"},"Limitations and Constraints:"),(0,o.kt)("h5",{id:"functions-can-only-be-defined-with-singular-arity"},"Functions Can Only be Defined with Singular Arity"),(0,o.kt)("p",null,"Functions currently can not be redefined with multiple arities. So, a function ",(0,o.kt)("inlineCode",{parentName:"p"},"foo(n)")," precludes a second definition of a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," with two or more arguments. However the function ",(0,o.kt)("inlineCode",{parentName:"p"},"foo(n,...)")," defines a function that can take one or more arguments. This constraint may be lifted in the future once usage and adoption favour enhancing functionality."),(0,o.kt)("h5",{id:"higher-order-functions-are-not-supported"},"Higher Order Functions are not Supported"),(0,o.kt)("p",null,"As the type system underpinning tremor-script and tremor-query does not support expression or function references, higher order functions are thus not supported at this time."),(0,o.kt)("h5",{id:"hardcoded-recursion-depth"},"Hardcoded Recursion Depth"),(0,o.kt)("p",null,"Although functions are tail-recursive and stack limits are not a functional concern, the Tremor event processing system is primarily designed for event streaming applications. A recursion depth is imposed to prevent functions from recursing indefinitely and blocking event streams from progressing."),(0,o.kt)("p",null,"This is a feature, not a constraint. But it is important to be aware of when developing well-behaved functions."),(0,o.kt)("p",null,"At this point in time, the maximum depth is 1024, and can not be changed without recompiling Tremor."),(0,o.kt)("h3",{id:"tuple-patterns"},"Tuple patterns"),(0,o.kt)("p",null,"As a side effect of adding functions, this RFC introduces tuple patterns. Internally, they are used to implement Matching functions but are available for use in match statements as well."),(0,o.kt)("p",null,"Tuple patterns are written in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"%(<pattern 1>, <pattern 2>)")," for\npatterns with a fixed number of elements or ",(0,o.kt)("inlineCode",{parentName:"p"},"%(<pattern 1>, <pattern 2>, ...)"),"\nwith literal ",(0,o.kt)("inlineCode",{parentName:"p"},"...")," for open patterns."),(0,o.kt)("p",null,"Tuple patterns with a fixed number of elements match arrays, with the same\nnumber of elements, where each element matches the pattern in the same place. So\nthe first pattern must match the first element of the array, the second pattern\nthe second element and so on."),(0,o.kt)("p",null,"An open pattern matches an array that is at lest the same number of elements as\nthe pattern, but can have more, otherwise the rules are the same."),(0,o.kt)("p",null,'There is also a new pattern introduced to predicate patterns which is the "I\ndon\'t care" pattern ',(0,o.kt)("inlineCode",{parentName:"p"},"_"),", which will match every element on an array."),(0,o.kt)("p",null,"So:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tremor"},'let o = origin::as_uri_record();\nmatch o of\n  # matches for the path:\n  # "/api/v1/get/<something>"\n  # "/api/v1/get/<something>/snot"\n  # "/api/v1/get/<something>/snot/badger"\n  # and so one\n  case %("api", "v1", "get", _, ...) => "get request"\nend;\n')),(0,o.kt)("h2",{id:"reference-level-explanation"},"Reference-level Explanation"),(0,o.kt)("p",null,"The module path, modules and ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," rule provide the language and runtime agnostic core facilities that allow queries in tremor-query and code in tremor-script to be namespaced logically via the ",(0,o.kt)("inlineCode",{parentName:"p"},"mod")," syntax and physically on file systems."),(0,o.kt)("p",null,"A new lexical preprocessing phase parses out occurrences of ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," rules in scripts, queries and embedded scripts replacing them with preprocessing directives and the contents of referenced modules."),(0,o.kt)("p",null,"The parser in modular scripts and queries must now keep track of relative and absolute module scope. As support for both logical namespaces via the ",(0,o.kt)("inlineCode",{parentName:"p"},"mod")," syntax and physical isolation through the file system and module path is supported, an external module effectively defines a module namespace. So, a source file ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.trickle")," at the root of the module path would ordinarily be used to include definitions into another query with a ",(0,o.kt)("inlineCode",{parentName:"p"},"use foo;")," declaration at the head of the file."),(0,o.kt)("p",null,"Nested directories also form namespaces so ",(0,o.kt)("inlineCode",{parentName:"p"},"bar/baz/snot.trickle")," would be declared for use as ",(0,o.kt)("inlineCode",{parentName:"p"},"use bar::baz::snot"),". The same layout and rules apply for scripts so ",(0,o.kt)("inlineCode",{parentName:"p"},"bar/baz/snot.trickle")," would be declared for use as ",(0,o.kt)("inlineCode",{parentName:"p"},"use bar::baz::snot"),"."),(0,o.kt)("p",null,"Where modules of the same base name in the physical file system such as 'badger.tremor' and 'badger.trickle' are present in the same module path, the behaviour of the runtime is currently undefined. The prototype implementation of modules in Tremor that accompanies this RFC gracefully handle the situation for embedded Tremor scripts within trickle query files."),(0,o.kt)("p",null,"As a convenience to developers, developer tools such as ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor-tool"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor-script")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tremor-query")," automatically included the current working directory as a mount point in the module path. If a ",(0,o.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," environment variable is set then it overrides any default behaviour."),(0,o.kt)("p",null,"In tremor-server, ",(0,o.kt)("inlineCode",{parentName:"p"},"TREMOR_PATH")," is required to be set or no include path will be available. This is reflected in the Docker image."),(0,o.kt)("h2",{id:"drawbacks"},"Drawbacks"),(0,o.kt)("p",null,"Modularising logic in Tremor increases complexity of the engine and runtime, however the relative increase in complexity is perceived as negligible given the value gained by developers by introducing the facility."),(0,o.kt)("p",null,"At this time, higher order functions are not supported as the Tremor-type system is constrained to JSON compatible value types and introducing module or function references would make the type system asymmetric with JSON. This is left for a future RFC."),(0,o.kt)("p",null,"At this time, the query language supports only modularising definitions of windows, operators or scripts. The creation of query language pipeline graph nodes or link of nodes in a graph is not supported in external modules."),(0,o.kt)("h2",{id:"rationale-and-alternatives"},"Rationale and Alternatives"),(0,o.kt)("p",null,"The design of the module mechanism and its application to tremor-script and tremor-query provide the highest degree of reuse whilst imposing the lowest runtime impact today and without closing off opportunities for evolving and improving the mechanisms in future."),(0,o.kt)("h2",{id:"prior-art"},"Prior art"),(0,o.kt)("p",null,"This RFC and it's implementation draws inspiration from the C preprocessor as well as the application of ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," in Rust, and the functional pattern matching style from the Erlang programming language."),(0,o.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,o.kt)("p",null,"None."),(0,o.kt)("h2",{id:"future-possibilities"},"Future Possibilities"),(0,o.kt)("p",null,"Currently var arg functions do not combine with either match or recursion or matching functions. This presents a good future opportunity for extending functions."),(0,o.kt)("p",null,"Another future possibility is to expand the capabilities of use in trickle to include full sub queries."))}c.isMDXComponent=!0}}]);