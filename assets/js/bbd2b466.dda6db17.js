(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8722],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1064:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={title:"Support for the Syslog Protocol",slug:"LFX-Blog-Nupur",author:"Nupur Agrawal",author_title:"Tremor 2021 Spring Mentee",tags:["codecs","mentorship","cncf"],categories:["general"],draft:!1,hide_table_of_contents:!1,description:"Nupur's experience contributing to Tremor and work overview."},s=void 0,l={permalink:"/blog/LFX-Blog-Nupur",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/blog/2021-07-05-LFX-Blog-Nupur.md",source:"@site/blog/2021-07-05-LFX-Blog-Nupur.md",title:"Support for the Syslog Protocol",description:"Nupur's experience contributing to Tremor and work overview.",date:"2021-07-05T00:00:00.000Z",formattedDate:"July 5, 2021",tags:[{label:"codecs",permalink:"/blog/tags/codecs"},{label:"mentorship",permalink:"/blog/tags/mentorship"},{label:"cncf",permalink:"/blog/tags/cncf"}],readingTime:3.83,truncated:!0,prevItem:{title:"Property Based Testing of Tremor Script",permalink:"/blog/2021/07/06/Blog-Rohit-Property-Based-Testing"},nextItem:{title:"Google Cloud Storage and Pub/Sub Connectors",permalink:"/blog/2021/06/29/T17-LFX-Blog-Jigyasa-gcloud"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Project Abstract",id:"project-abstract",children:[]},{value:"My Project",id:"my-project",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Hey folks, I am Nupur Agrawal, a third year student at Indian Institute of Technology Roorkee. This blog describes my experience of contributing to Tremor,\nCNCF sandbox project in the 2021 spring chapter of ",(0,a.kt)("a",{parentName:"p",href:"https://lfx.linuxfoundation.org/tools/mentorship/"},"LFX Mentorship Program"),", under the mentorship of\nMatthias Wahl, Anup Dhamala and Heinz Gies."),(0,a.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.tremor.rs/"},"Tremor")," is an event processing system originally designed for the needs of platform engineering and infrastructure. It is built for\nthe users that have a high message volume to deal with and want to build pipelines to process, route, or limit this event stream."),(0,a.kt)("p",null,"At the beginning of the program, I was given walkthrough of the project by Matthias and he patiently explained me the components and working of tremor.\nTremor is nicely documented and the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/"},"docs")," can be very useful for referring many things."),(0,a.kt)("h2",{id:"my-project"},"My Project"),(0,a.kt)("p",null,"My project's aim was to enable tremor to receive and send ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"Syslog Protocol Messages"),", a standard protocol used to send\nsystem log or event messages. It was desired to support both the standard IETF format and the old BSD format via UDP and TCP/TLS. More detailed description\ncan be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/issues/12"},"here"),"."))}d.isMDXComponent=!0}}]);