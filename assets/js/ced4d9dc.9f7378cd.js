(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9832],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8792:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={},l="CNCF OpenTelemetry Passthrough",p={unversionedId:"Workshop/examples/otel_passthrough/README",id:"Workshop/examples/otel_passthrough/README",isDocsHomePage:!1,title:"CNCF OpenTelemetry Passthrough",description:"This example is the simplest possible configuration of tremor with support for CNCF OpenTelemetry",source:"@site/docs/Workshop/examples/40_otel_passthrough/README.md",sourceDirName:"Workshop/examples/40_otel_passthrough",slug:"/Workshop/examples/otel_passthrough/README",permalink:"/docs/Workshop/examples/otel_passthrough/README",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/docs/Workshop/examples/40_otel_passthrough/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ingesting documents from kafka into elastic",permalink:"/docs/Workshop/examples/kafka_elastic_correlation/README"},next:{title:"CNCF OpenTelemetry Zipkin Interorking",permalink:"/docs/Workshop/examples/otel_zipkin/README"}},c=[{value:"Environment",id:"environment",children:[]},{value:"Business Logic",id:"business-logic",children:[]},{value:"Command line testing during logic development",id:"command-line-testing-during-logic-development",children:[]},{value:"Docker",id:"docker",children:[]}],u={toc:c};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cncf-opentelemetry-passthrough"},"CNCF OpenTelemetry Passthrough"),(0,a.kt)("p",null,"This example is the simplest possible configuration of tremor with support for CNCF OpenTelemetry\ninterception and distribution. It shows the very basic building blocks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Onramp"),(0,a.kt)("li",{parentName:"ul"},"CNCF OpenTelemetry Offramp"),(0,a.kt)("li",{parentName:"ul"},"Deployment configuration file")),(0,a.kt)("p",null,"External open telemetry clients can use port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," to send OpenTelemetry logs, traces and metrics\nthrough tremor. Tremor prints the json mapping to standard out and forwards the events to the\nOpenTelemetry collector."),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:n(3294).Z},"onramp")," we use is the ",(0,a.kt)("inlineCode",{parentName:"p"},"otel")," CNCF OpenTeletry onramp listening on\na non-standard CNCF OpenTelemetry port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316"),", it receives protocol buffer messages over gRPC on this\nport. The log, metric and trace events received are converted to tremor's value system and passed through\na passthrough pipeline to the CNCF OpenTelemetry sink. The sink will try to connect to a downstream CNCF\nOpenTelemetry endpoint. In this workshop we will use the well known OpenTelemetry port of ",(0,a.kt)("inlineCode",{parentName:"p"},"4317")," for our\nsink and run the standard OpenTelemetry collector on this port using a simple ",(0,a.kt)("a",{target:"_blank",href:n(7951).Z},"collector configuration"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'onramp:\n  - id: otlp\n    type: otel # Use the OpenTelemetry gRPC listener source\n    codec: json # Json is the only supported value\n    config:\n      port: 4316 # The TCP port to listen on\n      host: "0.0.0.0" # The IP address to bind on ( all interfaces in this case )\n')),(0,a.kt)("p",null,"It connects to a simple passthrough pipeline. This pipeline forwards any received\nobservability events downstream unchanged."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out;\n")),(0,a.kt)("p",null,"We connect the passthrough output events into an OpenTelemetry sink which distributes them to\na downstream OpenTelemetry service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'offramp:\n  - id: otlp\n    type: otel\n    codec: json # Jsn is the only supported value\n    config:\n      host: "0.0.0.0"\n      port: 4317\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{target:"_blank",href:n(116).Z},"binding")," expresses these relations and gives deployment connectivity graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"binding:\n  - id: example\n    links:\n      '/onramp/otlp/{instance}/out':\n       - '/pipeline/example/{instance}/in'\n      '/pipeline/example/{instance}/out':\n       - '/offramp/stdout/{instance}/in'\n       - '/offramp/otlp/{instance}/in'\n")),(0,a.kt)("p",null,"Finally the ",(0,a.kt)("a",{target:"_blank",href:n(1007).Z},"mapping")," instanciates the binding with the given name and instance variable to activate the elements of the binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'mapping:\n  /binding/example/passthrough:\n    instance: "passthrough"\n')),(0,a.kt)("h2",{id:"business-logic"},"Business Logic"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("h2",{id:"command-line-testing-during-logic-development"},"Command line testing during logic development"),(0,a.kt)("p",null,"Use any compliant OpenTelemetry instrumented application and configure the\nserver to our source on port ",(0,a.kt)("inlineCode",{parentName:"p"},"4316")," instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"4317"),"."),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("p",null,"For convenience, use the provided ",(0,a.kt)("a",{target:"_blank",href:n(4592).Z},"docker-compose.yaml")," to\nstart and stop tremor and the opentelemetry collector as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Start\n$ docker compose up\n\n# Stop\n$ docker compose stop\n")))}m.isMDXComponent=!0},4592:function(e,t,n){"use strict";t.Z=n.p+"assets/files/docker-compose-3281555bd80804f51ee292c4db4aaafd.yaml"},7951:function(e,t,n){"use strict";t.Z=n.p+"assets/files/collector-config-2d8d08bfe178670bd9729be750de7fb0.yaml"},3294:function(e,t,n){"use strict";t.Z=n.p+"assets/files/00_ramps-f3ec739bb6b0c551cffe3f94725b9f9a.yaml"},116:function(e,t,n){"use strict";t.Z=n.p+"assets/files/01_binding-7d6c2c8727298377446379c886448d73.yaml"},1007:function(e,t,n){"use strict";t.Z=n.p+"assets/files/02_mapping-9c81a0870131ab67e86b0f001460a101.yaml"}}]);