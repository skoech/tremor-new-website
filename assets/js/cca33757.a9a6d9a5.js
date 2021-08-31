(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[7339],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},804:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],o={},p="Dissect",d={unversionedId:"tremor-script/extractors/dissect",id:"tremor-script/extractors/dissect",isDocsHomePage:!1,title:"Dissect",description:"The Dissect extractor is loosely based on logstash's dissect plugin. It extracts data from strings in form of key-value pairs based on the pattern specified. It supports patterns which makes it lightweight compared to other extractors such as grok or regex.",source:"@site/docs/tremor-script/extractors/dissect.md",sourceDirName:"tremor-script/extractors",slug:"/tremor-script/extractors/dissect",permalink:"/docs/tremor-script/extractors/dissect",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/tremor-script/extractors/dissect.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Datetime",permalink:"/docs/tremor-script/extractors/datetime"},next:{title:"Glob",permalink:"/docs/tremor-script/extractors/glob"}},s=[{value:"Predicate",id:"predicate",children:[]},{value:"Extraction",id:"extraction",children:[]},{value:"Patterns",id:"patterns",children:[]}],m={toc:s};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dissect"},"Dissect"),(0,l.kt)("p",null,"The Dissect extractor is loosely based on logstash's dissect plugin. It extracts data from strings in form of key-value pairs based on the pattern specified. It supports patterns which makes it lightweight compared to other extractors such as grok or regex."),(0,l.kt)("p",null,"Tokens are enclosed within ",(0,l.kt)("inlineCode",{parentName:"p"},"%{ }")," and any characters placed between tokens is considered as a delimiter. There should be at least one delimiter in between 2 tokens except if one of them is a padding token."),(0,l.kt)("h2",{id:"predicate"},"Predicate"),(0,l.kt)("p",null,"When used as a predicate test with ",(0,l.kt)("inlineCode",{parentName:"p"},"~"),", it passes if and only if the referent target matches the pattern exhaustively."),(0,l.kt)("h2",{id:"extraction"},"Extraction"),(0,l.kt)("p",null,"If the predicate passes, then a record of matched entries are returned where the keys are the fields specified in the pattern, and the values are the values extracted from the input string."),(0,l.kt)("h2",{id:"patterns"},"Patterns"),(0,l.kt)("p",null,"The pattern can contain any of the following types:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Pattern"),(0,l.kt)("th",{parentName:"tr",align:null},"Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Output"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Simple"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{ field }")),(0,l.kt)("td",{parentName:"tr",align:null},"Given field is used as the key for the pattern extracted"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{name}")),(0,l.kt)("td",{parentName:"tr",align:null},"John"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"name" : "John"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Append"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"% { + field }")),(0,l.kt)("td",{parentName:"tr",align:null},"Appends the value to another field specified with the same field name."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"% {+name} %{+name}")),(0,l.kt)("td",{parentName:"tr",align:null},"John Doe"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"name" : "John Doe"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"+")," symbol on the first token is optional",(0,l.kt)("br",null),"Does not support types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Named keys"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{& field}")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns key value pair of the field. Takes the key from the previously matched field."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{ code } % {country}")),(0,l.kt)("td",{parentName:"tr",align:null},"DE Germany"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"DE" : "Germany"')),(0,l.kt)("td",{parentName:"tr",align:null},"Needs a field present earlier with the same name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Empty field"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"% { field }")),(0,l.kt)("td",{parentName:"tr",align:null},"Will return an empty value if no data is present"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{ code } %{country}")),(0,l.kt)("td",{parentName:"tr",align:null},"Germany"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"code" : "",<br />"country" : "Germany"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Skipped fields"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{? field}")),(0,l.kt)("td",{parentName:"tr",align:null},"Skips the extracted value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{ ? first_name} {last_name}")),(0,l.kt)("td",{parentName:"tr",align:null},"John Doe"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"name" : "Doe"')),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Typed Values"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"% { field : type}")),(0,l.kt)("td",{parentName:"tr",align:null},"Extracts the value from the data and converts it to another type specified"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{age : int}")),(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"age" : 22')),(0,l.kt)("td",{parentName:"tr",align:null},"Supported Types: int, float")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Padding"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{_}")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"%{_(chars)}")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Removes padding from the field in the output")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%{name} %{_} %{age}")),(0,l.kt)("td",{parentName:"tr",align:null},"John 22"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"name" : "John", "age":"22"')),(0,l.kt)("td",{parentName:"tr",align:null},"The field being extracted may not contain the padding.",(0,l.kt)("br",null),"A custom padding can be specified by using the ",(0,l.kt)("inlineCode",{parentName:"td"},"%{_(custom)}")," notation")))),(0,l.kt)("p",null,"The operation can error in the following cases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There is no delimiter between 2 tokens."),(0,l.kt)("li",{parentName:"ul"},"Skipped, Append or Named field with no name (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"%{?}"),")."),(0,l.kt)("li",{parentName:"ul"},"A delimiter specified in the pattern is missing."),(0,l.kt)("li",{parentName:"ul"},"A named field is not found in the pattern."),(0,l.kt)("li",{parentName:"ul"},"the type specified is not valid."),(0,l.kt)("li",{parentName:"ul"},"Types used with the append token."),(0,l.kt)("li",{parentName:"ul"},"Pattern isn't completely parsed (at end of input)."),(0,l.kt)("li",{parentName:"ul"},"Input isn't completely parsed.")),(0,l.kt)("p",null,"Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "test": "http://example.com/"} of\n  case foo = %{test ~= dissect|%{protocol}://%{host}.%{.tld} | } => foo\n  default => "ko"\nend;\n')),(0,l.kt)("p",null,"Will output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'"test": {\n    "protocol": "http",\n    "host": "example",\n    ".tld": "com/"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tremor"},'match { "test": "2019-04-20------------------- high 3 foo bar" } of\n  case foo = %{test ~= dissect|%{date}%{_(-)} %{?priority} %{&priority} %{+snot} %{+snot}| } => foo\n  default => "ko"\nend;\n')),(0,l.kt)("p",null,"Will output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{\n   "test": {\n     "date": "2019-04-20",\n     "high": "3",\n     "snot": "foo bar"\n   }\n')))}u.isMDXComponent=!0}}]);