(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8185],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=s,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(h,o(o({ref:r},c),{},{components:t})):n.createElement(h,o({ref:r},c))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5018:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=t(2122),s=t(9756),a=(t(7294),t(3905)),o=["components"],i={id:"preprocessors",title:"Preprocessors"},p="Preprocessors",l={unversionedId:"Artefacts/preprocessors",id:"Artefacts/preprocessors",isDocsHomePage:!1,title:"Preprocessors",description:"Preprocessors operate on the raw data stream and transform it. They are run before data reaches the codec and do not know or care about tremor's internal representation.",source:"@site/docs/Artefacts/preprocessors.md",sourceDirName:"Artefacts",slug:"/Artefacts/preprocessors",permalink:"/docs/Artefacts/preprocessors",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Artefacts/preprocessors.md",version:"current",frontMatter:{id:"preprocessors",title:"Preprocessors"},sidebar:"tutorialSidebar",previous:{title:"Postprocessors",permalink:"/docs/Artefacts/postprocessors"},next:{title:"Constraints and Limitations",permalink:"/docs/ConstraintsLimitations"}},c=[{value:"Supported Preprocessors",id:"supported-preprocessors",children:[{value:"lines",id:"lines",children:[]},{value:"lines-null",id:"lines-null",children:[]},{value:"lines-pipe",id:"lines-pipe",children:[]},{value:"lines-no-buffer",id:"lines-no-buffer",children:[]},{value:"lines-cr-no-buffer",id:"lines-cr-no-buffer",children:[]},{value:"base64",id:"base64",children:[]},{value:"decompress",id:"decompress",children:[]},{value:"gzip",id:"gzip",children:[]},{value:"zlib",id:"zlib",children:[]},{value:"xz",id:"xz",children:[]},{value:"snappy",id:"snappy",children:[]},{value:"lz4",id:"lz4",children:[]},{value:"gelf-chunking",id:"gelf-chunking",children:[]},{value:"remove-empty",id:"remove-empty",children:[]},{value:"length-prefixed",id:"length-prefixed",children:[]},{value:"textual-length-prefix",id:"textual-length-prefix",children:[]}]}],d={toc:c};function u(e){var r=e.components,t=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"preprocessors"},"Preprocessors"),(0,a.kt)("p",null,"Preprocessors operate on the raw data stream and transform it. They are run before data reaches the codec and do not know or care about tremor's internal representation."),(0,a.kt)("p",null,"Online codecs, preprocessors can be chained to perform multiple operations in succession."),(0,a.kt)("h2",{id:"supported-preprocessors"},"Supported Preprocessors"),(0,a.kt)("h3",{id:"lines"},"lines"),(0,a.kt)("p",null,"Splits the input into lines, using character 10 ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," as the line separator."),(0,a.kt)("p",null,"Buffers any line fragment that may be present (after the last line separator), till more data arrives. This makes it ideal for use with streaming onramps like ",(0,a.kt)("a",{parentName:"p",href:"/docs/Artefacts/onramps#tcp"},"tcp"),", to break down incoming data into distinct events."),(0,a.kt)("p",null,"Any empty lines present are forwarded as is -- if you want to remove them, please chain the ",(0,a.kt)("a",{parentName:"p",href:"#remove-empty"},"remove-empty")," preprocessor with this preprocessor. An example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"preprocessors:\n  - lines\n  - remove-empty\n")),(0,a.kt)("p",null,"Note: The proliferation of various lines preprocessors here will go away once preprocessors ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-rfcs/pull/31"},"support configuration"),"."),(0,a.kt)("h3",{id:"lines-null"},"lines-null"),(0,a.kt)("p",null,"Variant of the ",(0,a.kt)("a",{parentName:"p",href:"#lines"},"lines")," preprocessor that uses null byte ",(0,a.kt)("inlineCode",{parentName:"p"},"\\0")," as the line separator."),(0,a.kt)("h3",{id:"lines-pipe"},"lines-pipe"),(0,a.kt)("p",null,"Variant of the ",(0,a.kt)("a",{parentName:"p",href:"#lines"},"lines")," preprocessor that uses pipe character ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," as the line separator."),(0,a.kt)("h3",{id:"lines-no-buffer"},"lines-no-buffer"),(0,a.kt)("p",null,"Variant of the ",(0,a.kt)("a",{parentName:"p",href:"#lines"},"lines")," preprocessor that does ",(0,a.kt)("em",{parentName:"p"},"not")," buffer any data that may be present after the last line separator -- the fragment is forwarded as is (i.e. treated as a full event)."),(0,a.kt)("h3",{id:"lines-cr-no-buffer"},"lines-cr-no-buffer"),(0,a.kt)("p",null,"Variant of the ",(0,a.kt)("a",{parentName:"p",href:"#lines-no-buffer"},"lines-no-buffer")," preprocessor that uses character 13 ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r")," (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Carriage_return#Computers"},"carriage return"),") as the line separator."),(0,a.kt)("h3",{id:"base64"},"base64"),(0,a.kt)("p",null,"Decodes base64 encoded data to the raw bytes."),(0,a.kt)("h3",{id:"decompress"},"decompress"),(0,a.kt)("p",null,"Decompresses a data stream. It is assumed that each message reaching the decompressor is a complete compressed entity."),(0,a.kt)("p",null,"The compression algorithm is detected automatically from the supported formats. If it can't be detected, the assumption is that the data was decompressed and will be sent on. Errors then can be transparently handled in the codec."),(0,a.kt)("p",null,"Supported formats:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gzip"),(0,a.kt)("li",{parentName:"ul"},"zlib"),(0,a.kt)("li",{parentName:"ul"},"xz"),(0,a.kt)("li",{parentName:"ul"},"snappy"),(0,a.kt)("li",{parentName:"ul"},"lz4")),(0,a.kt)("h3",{id:"gzip"},"gzip"),(0,a.kt)("p",null,"Decompress GZ compressed payload."),(0,a.kt)("h3",{id:"zlib"},"zlib"),(0,a.kt)("p",null,"Decompress Zlib (deflate) compressed payload."),(0,a.kt)("h3",{id:"xz"},"xz"),(0,a.kt)("p",null,"Decompress Xz2 (7z) compressed payload."),(0,a.kt)("h3",{id:"snappy"},"snappy"),(0,a.kt)("p",null,"Decompress framed snappy compressed payload (does not support raw snappy)."),(0,a.kt)("h3",{id:"lz4"},"lz4"),(0,a.kt)("p",null,"Decompress Lz4 compressed payload."),(0,a.kt)("h3",{id:"gelf-chunking"},"gelf-chunking"),(0,a.kt)("p",null,"Reassembles messages that were split apart using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.graylog.org/en/3.0/pages/gelf.html#chunking"},"GELF chunking protocol"),"."),(0,a.kt)("p",null,"If the GELF messages were sent compressed, you can decompress them by chaining the ",(0,a.kt)("a",{parentName:"p",href:"#decompress"},"decompress")," preprocessor. An example is documented ",(0,a.kt)("a",{parentName:"p",href:"/docs/Artefacts/onramps#udp-onramp-example-for-gelf"},"here")," -- you may need to apply ",(0,a.kt)("inlineCode",{parentName:"p"},"decompress")," before and/or after the reassembly here, depending on how your GELF client(s) behave."),(0,a.kt)("h3",{id:"remove-empty"},"remove-empty"),(0,a.kt)("p",null,"Removes empty messages (aka zero len)."),(0,a.kt)("h3",{id:"length-prefixed"},"length-prefixed"),(0,a.kt)("p",null,"Separates a continuous stream of data based on length prefixing. The length for each package in a stream is based on the first 64 bit decoded as an unsigned big endian value."),(0,a.kt)("h3",{id:"textual-length-prefix"},"textual-length-prefix"),(0,a.kt)("p",null,"Extracts the message based on prefixed message length given in ascii digits which is followed by a whitespace as used in ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5425#section-4.3"},"RFC 5425")," for TLS/TCP transport for syslog."))}u.isMDXComponent=!0}}]);