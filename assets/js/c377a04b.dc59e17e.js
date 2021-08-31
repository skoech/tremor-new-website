(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[6971],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3874:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={id:"index",title:"Home"},s="Tremor",p={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Home",description:"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure.",source:"@site/docs/index.md",sourceDirName:".",slug:"/index",permalink:"/docs/index",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/index.md",version:"current",frontMatter:{id:"index",title:"Home"},sidebar:"tutorialSidebar",previous:{title:"History",permalink:"/docs/history"},next:{title:"Running Docusaurus",permalink:"/docs/internal/running-docusaurus"}},m=[],u={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tremor"},"Tremor"),(0,o.kt)("p",null,"Tremor is an event processing system originally designed for the needs of platform engineering and infrastructure."),(0,o.kt)("p",null,"Tremor has been running in production since October 2018, processes 10 terabytes of data per day, or 10 billion messages per minute and 10 million metrics per second. Tremor achieves this with 10x footprint reduction in bare metal infrastructure and cloud based deployments in 6 ( and counting ) systems at Wayfair, whilst reducing memory usage by 10x and delivering better quality of service under conditions when our network is saturated at peak eCommerce trading lifecycles."),(0,o.kt)("p",null,"Tremor reduces cost, reduces complexity and consolidates and simplifies our operational environment to\nspark SRE joy, to reduce workload on our NOC and to drop our operating costs."),(0,o.kt)("p",null,"As a secondary benefit, tremor is relatively low latency and relatively high throughput however this is\nan explicit non-goal of the project."),(0,o.kt)("p",null,"Tremor runs 24x7 365 days per year and is implemented in the Rust programming language."),(0,o.kt)("p",null,"Click for an ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview"},"Architectural overview")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/history"},"Canned History")," of the project."),(0,o.kt)("p",null,"Other interesting topics are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tremor-script/index"},"The tremor-script language")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"tremor-query/index.md"},"The tremor-query language")),(0,o.kt)("li",{parentName:"ul"},"Artefacts namely:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"artefacts/onramps.md"},"Onramps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"artefacts/offramps.md"},"Offramps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"artefacts/codecs.md"},"Codecs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"artefacts/preprocessors.md"},"Pre-")," and ",(0,o.kt)("a",{parentName:"li",href:"artefacts/postprocessors.md"},"Postprocessors")))),(0,o.kt)("li",{parentName:"ul"},"Operational information about",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"operations/monitoring.md"},"Monitoring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"operations/configuration.md"},"Configuration")," and the ",(0,o.kt)("a",{parentName:"li",href:"operations/configuration-walkthrough.md"},"Configuration Walkthrough")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"operations/cli.md"},"The tremor CLI")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api"},"The tremor API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/"},"Workshop")," and various use case ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs/workshop/examples"},"examples")),(0,o.kt)("li",{parentName:"ul"},"Development related information",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"development/benchmarking.md"},"Benchmarks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"development/quick-start.md"},"A Quickstart Guide")),(0,o.kt)("li",{parentName:"ul"},"Notes about ",(0,o.kt)("a",{parentName:"li",href:"development/testing.md"},"Testing")," and ",(0,o.kt)("a",{parentName:"li",href:"development/debugging.md"},"Debugging"))))),(0,o.kt)("p",null,"This is not an exhaustive list and for the curious it might be worth to explore the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-www-docs/tree/main/docs"},"docs")," folder on their own."))}c.isMDXComponent=!0}}]);