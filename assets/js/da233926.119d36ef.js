(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6792],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4356:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={},l="origin",p={unversionedId:"tremor-script/stdlib/tremor/origin",id:"tremor-script/stdlib/tremor/origin",isDocsHomePage:!1,title:"origin",description:"The origin module contains functions for retrieving relevant origin",source:"@site/docs/tremor-script/stdlib/tremor/origin.md",sourceDirName:"tremor-script/stdlib/tremor",slug:"/tremor-script/stdlib/tremor/origin",permalink:"/docs/tremor-script/stdlib/tremor/origin",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/tremor-script/stdlib/tremor/origin.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"chash",permalink:"/docs/tremor-script/stdlib/tremor/chash"},next:{title:"system",permalink:"/docs/tremor-script/stdlib/tremor/system"}},u=[{value:"Functions",id:"functions",children:[{value:"scheme()",id:"scheme",children:[]},{value:"host()",id:"host",children:[]},{value:"port()",id:"port",children:[]},{value:"path()",id:"path",children:[]},{value:"as_uri_string()",id:"as_uri_string",children:[]},{value:"as_uri_record()",id:"as_uri_record",children:[]}]}],c={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"origin"},"origin"),(0,i.kt)("p",null,"The origin module contains functions for retrieving relevant origin\nmetadata about events (eg: host sending the event)."),(0,i.kt)("p",null,"The metadata is generated by onramps and is passed down to the tremor\npipeline as a URI. Internally, the URI is composed of these basic fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheme")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"))),(0,i.kt)("p",null,"The URI format was chosen so that onramps can expose origin information in\na structured manner, without sacrificing the ability to encode information\nthat can vary from onramp to onramp."),(0,i.kt)("p",null,"Since the kind and amount of origin information varies based on onramp\n(especially for the path field), the specifics of what each onramp exposes\nis documented in the onramps page."),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"scheme"},"scheme()"),(0,i.kt)("p",null,"Returns the origin URI scheme, or null value if URI is not set. Encodes the\nsource of events within tremor (i.e. onramp name)."),(0,i.kt)("p",null,"For example, with udp onramp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'origin::scheme() == "tremor-udp"\n')),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("h3",{id:"host"},"host()"),(0,i.kt)("p",null,"Returns the origin URI host, or null value if URI is not set. Encodes the\nsource host (usually IP) that sent the event."),(0,i.kt)("p",null,"For example, with udp onramp and for a test event sent from the same host\nas tremor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'origin::host() # returns "127.0.0.1"\n')),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("h3",{id:"port"},"port()"),(0,i.kt)("p",null,"Returns the origin URI port, or null value if not set (either the whole URI\nor just the port). Encodes the source port on the host that sent the event."),(0,i.kt)("p",null,"For example, with udp onramp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},"origin::port() # returns an ephemeral port on the sender host (eg: 41371)\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")),(0,i.kt)("h3",{id:"path"},"path()"),(0,i.kt)("p",null,"Returns the origin URI path as an array (with path segments constituting\nthe array members), or null value if URI is not set. Encodes information\nspecific to the onramp."),(0,i.kt)("p",null,"The array structure here allows for capturing multiple details about the\norigin, in a manner that's easily accessible from tremor-script\n(position-based retrieval)."),(0,i.kt)("p",null,"For example, with udp onramp receiving events on port 12202:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'origin::path() # returns ["12202"]\n')),(0,i.kt)("h3",{id:"as_uri_string"},"as_uri_string()"),(0,i.kt)("p",null,"Returns the full origin URI as a string, or null value if URI is not set.\nThe string is of the following standard form (with port as optional):"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<scheme>://<host>[:<port>]/<path>")),(0,i.kt)("p",null,"For example, with udp onramp receiving events on port 12202 from the same\nhost as tremor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'origin::as_uri_string() # returns "tremor-udp://127.0.0.1:41371/12202",\n# where 41371 is the ephemeral port on the sending\n# side\n')),(0,i.kt)("h3",{id:"as_uri_record"},"as_uri_record()"),(0,i.kt)("p",null,"Returns the full origin URI as a record, or null value if URI is not set.\nFor example, with udp onramp receiving events on port 12202 from the same\nhost as tremor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tremor"},'origin::as_uri_record() == {\n"scheme": "tremor-udp",\n"host":"127.0.0.1",\n"port":41371, # where 41371 is the ephemeral port on the sending side\n"path":["12202"]\n}\n')))}m.isMDXComponent=!0}}]);