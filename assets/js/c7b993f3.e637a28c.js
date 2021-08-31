(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8198],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2161:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),s=["components"],i={title:"Google Cloud Storage and Pub/Sub Connectors",author:"Jigyasa Khaneja",author_title:"Tremor 2021 Spring Mentee",tags:["connectors","mentorship","cncf","gpc"],draft:!1,hide_table_of_contents:!1,description:"Jigyasa's LFX spring Mentorship experience report."},l=void 0,c={permalink:"/blog/2021/06/29/T17-LFX-Blog-Jigyasa-gcloud",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/blog/2021-06-29T17-LFX-Blog-Jigyasa-gcloud.md",source:"@site/blog/2021-06-29T17-LFX-Blog-Jigyasa-gcloud.md",title:"Google Cloud Storage and Pub/Sub Connectors",description:"Jigyasa's LFX spring Mentorship experience report.",date:"2021-06-29T00:00:00.000Z",formattedDate:"June 29, 2021",tags:[{label:"connectors",permalink:"/blog/tags/connectors"},{label:"mentorship",permalink:"/blog/tags/mentorship"},{label:"cncf",permalink:"/blog/tags/cncf"},{label:"gpc",permalink:"/blog/tags/gpc"}],readingTime:12.31,truncated:!0,prevItem:{title:"Support for the Syslog Protocol",permalink:"/blog/LFX-Blog-Nupur"},nextItem:{title:"Releasing Tremor v0.9!",permalink:"/blog/2020/10/16/v09-release"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Learning about Tremor",id:"learning-about-tremor",children:[]},{value:"Learning Rust",id:"learning-rust",children:[]},{value:"My Project",id:"my-project",children:[]},{value:"Walk-Through Guide",id:"walk-through-guide",children:[{value:"Google Cloud Storage",id:"google-cloud-storage",children:[]},{value:"Google Cloud Pub/sub",id:"google-cloud-pubsub",children:[]}]},{value:"Testing for gsub onramp (Pub/sub)",id:"testing-for-gsub-onramp-pubsub",children:[]},{value:"Network Failure Recovery",id:"network-failure-recovery",children:[]},{value:"Use of Connectors",id:"use-of-connectors",children:[]},{value:"The Tremor community",id:"the-tremor-community",children:[]},{value:"Final Thoughts",id:"final-thoughts",children:[]}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Hello folks! I'm Jigyasa, a final-year computer science engineering student at Indira Gandhi Delhi Technical University for Women pursuing my bachelor's in Technology. This blog is about my experience contributing to ",(0,a.kt)("a",{parentName:"p",href:"https://www.tremor.rs/"},"Tremor")," as part of the LFX Mentorship program.\ni"),(0,a.kt)("h3",{id:"learning-about-tremor"},"Learning about Tremor"),(0,a.kt)("p",null,"Tremor is an event processing system for unstructured data with rich support for structural pattern matching, filtering, and transformation. It is built for users that have a high message volume to deal with and want to build pipelines to process, route, or limit this event stream. It has a scripting language called tremor-script and a query language as well called tremor-query or trickle."),(0,a.kt)("p",null,"I had never worked on an event processing system before this internship. In fact, my first major contribution to open-source was through this mentorship program. To get started with it, my mentor ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/darach-ennis-789866?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnRZIYeLfRAWJpWsDNlzweA%3D%3D"},"Darach Ennis"),", suggested me some documents that helped me learn more about it:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/overview/"},"https://docs.tremor.rs/overview/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/course/#/2"},"https://docs.tremor.rs/course")),(0,a.kt)("p",null,"Apart from that, learning more about the tremor-query, tremor-script, and going through the workshops in the docs can be really helpful."),(0,a.kt)("p",null,"The codebase of Tremor is in Rust, and since I had no prior experience with Rust, I started learning the language."),(0,a.kt)("h3",{id:"learning-rust"},"Learning Rust"),(0,a.kt)("p",null,"Getting started with Rust was very intimidating. It involved working with things like memory management, borrow checker, lifetimes, and the expressive types which was very new to me and hence, confusing"),(0,a.kt)("p",null,"While getting started with a new language, I try to follow along some interactive tutorials/videos. These are some resources that I found helpful: "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serokell.io/blog/learn-rust"},"https://serokell.io/blog/learn-rust")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://fasterthanli.me/articles/a-half-hour-to-learn-rust"},"https://fasterthanli.me/articles/a-half-hour-to-learn-rust")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/"},"https://doc.rust-lang.org/book/")),(0,a.kt)("p",null,"However, while coding I used to run into a lot of errors. My mentor suggested me a good practice which is to document those errors and always make good notes of anything and everything I learn. So the next time I come across something similar, I can just refer to my notes instead of searching that up on the internet. I used to document the little things like a new ",(0,a.kt)("inlineCode",{parentName:"p"},"vi")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," command that I learned and found helpful. It's also very important to keep those notes organized so that it's faster and easier to find what you're looking for. Compiling notes of all the new things learned in a day can be very helpful."),(0,a.kt)("p",null,"At times when I used to get stuck with some Rust errors, I used to reach out to my mentor or anyone from the Tremor community and they would help me. Apart from that, these discord servers can be of great help too:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/rust-lang-community"},"Rust programming language community server")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/4BUXJEB2"},"Firepit")),(0,a.kt)("h3",{id:"my-project"},"My Project"),(0,a.kt)("p",null,"My task during the internship was to add support for the Google Cloud connectors in Tremor. I worked on adding the Google Cloud Storage and Google Cloud Pub/Sub connectors. A detailed description of it can be found here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/issues/724"},"https://github.com/tremor-rs/tremor-runtime/issues/724")),(0,a.kt)("p",null,"Before explaining more about it, here's what a connector involves:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sources:")," Ingest data from the outside world and deserialise to events ( onramps )"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sinks:")," Send serialised events to the outside world ( offramps )"),(0,a.kt)("p",null,"Connectors serve the purpose of sending events to and receiving events from the outside world. A connector can be an event ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," (a.k.a. ",(0,a.kt)("inlineCode",{parentName:"p"},"onramp"),") or an event ",(0,a.kt)("inlineCode",{parentName:"p"},"sink")," (a.k.a. ",(0,a.kt)("inlineCode",{parentName:"p"},"offramp"),") or both."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector",src:n(446).Z})),(0,a.kt)("h4",{id:"google-cloud-storage-connector"},"Google Cloud Storage connector:"),(0,a.kt)("p",null,"I wrote a GCS sink that can issue the basic GCS operations such as list buckets and objects, create, insert and delete objects from the Google Cloud Platform cloud storage service. The docs can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/offramps/#gcs"},"GCS offramp docs")),(0,a.kt)("h4",{id:"google-cloud-pubsub-connector"},"Google Cloud Pub/Sub connector:"),(0,a.kt)("p",null,"The gpub sink can issue the operation of sending a message to a Google Cloud Pub/Sub topic. It also allows creating a subscription to a topic to receive messages in it, with the option to enable/disable message ordering. The gsub source allows receiving messages via a subscription in batches as well as one after another. The docs can be found here:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/offramps/#gpub"},"gpub offramp")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/onramps/#gsub"},"gsub onramp")),(0,a.kt)("h2",{id:"walk-through-guide"},"Walk-Through Guide"),(0,a.kt)("p",null,"To get started, you need a service account on GCP and you will need a GCP pem file for certificates authentication and a service token json file."),(0,a.kt)("p",null,"The command used to get the service token ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud iam service-accounts keys create key-file.json -iam-account=<iam-account-name>@<project-id>.iam.gserviceaccount.com\n")),(0,a.kt)("p",null,"or "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud iam service-accounts keys create key-file.json -iam-account=<mail-id-of-service-account>\n")),(0,a.kt)("p",null,"Go to GCP dashboard \u2192 IAM & Admin \u2192 Service Accounts and get the email-id mentioned which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"<mail-id-of-service-account>")),(0,a.kt)("h3",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,a.kt)("p",null,"The following is a usage example of the gcs connector. The following files are required:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"outbound.trickle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"inbound.trickle")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"test.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"offramp:\n  - id: stdout\n    type: stdout\n    codec: json\n    config:\n  - id: gcs\n    type: gcs\n    codec: json\n    postprocessors:\n      - gzip   \n    preprocessors:\n      - gzip \n    linked: true\n    config:\n      pem: <path-to-pem-file>\nonramp:\n  - id: stdin\n    type: file\n    codec: json\n    config:\n      source: /dev/stdin   \nbinding:\n  - id: example\n    links:\n      '/onramp/stdin/{instance}/out':\n        - '/pipeline/outbound/{instance}/in'\n      '/pipeline/outbound/{instance}/out':\n        - '/offramp/stdout/{instance}/in'\n        - '/offramp/gcs/{instance}/in'\n      '/offramp/gcs/{instance}/out':\n        - '/pipeline/inbound/{instance}/in'\n      '/pipeline/inbound/{instance}/out':\n        - '/offramp/stdout/{instance}/in'\nmapping:\n  \"/binding/example/passthrough\":\n    instance: \"passthrough\"\n")),(0,a.kt)("p",null,"The above config receives ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," on stdin, sends it to Google Cloud Storage service (and stdout) and writes the response received from GCS (since ",(0,a.kt)("inlineCode",{parentName:"p"},"linked: true"),") to stdout."),(0,a.kt)("p",null,"The instance variable (in the binding) is replaced by the value passthrough in the mapping upon deployment, so it is possible to define multiple bindings (deployments) for a single mapping (template).\nSupported preprocessors, that can be configured in yaml file can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/preprocessors/"},"preprocessors"),". Supported postprocessors and more about it: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/postprocessors/"},"postprocessors"),".\nSupported codecs, that can be configured in yaml file can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/codecs/"},"codecs")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the env variable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export GOOGLE_APPLICATION_CREDENTIALS="<path-to-service-token-json-file>"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command used to run tremor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tremor server run -f outbound.trickle inbound.trickle test.yaml | jq .\n")),(0,a.kt)("p",null,"For a detailed guide on the operations that can be performed, refer the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/offramps/#gcs"},"docs"),"."),(0,a.kt)("h3",{id:"google-cloud-pubsub"},"Google Cloud Pub/sub"),(0,a.kt)("p",null,"Google Cloud Pub/Sub guarantees delivery of all messages, whether low throughput or high throughput, so there should be no concern about messages being lost."),(0,a.kt)("p",null,"Pub/Sub guarantees at-least-once message delivery, which means that occasional duplicates are to be expected since we acknowledge the messages once they are received."),(0,a.kt)("p",null,"The following is a usage example of the pub/sub connector. These are the files required:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"outbound trickle:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},"select event from in into out\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"inbound.trickle:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'select {"data": event, "meta": $} from in into out;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"test.yaml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"offramp:\n  - id: stdout\n    type: stdout\n    codec: json\n    config:\n  - id: gpub\n    type: gpub\n    codec: json\n    postprocessors:\n      - gzip    \n    linked: true \n    config:\n      pem: <path-to-pem-file>\nonramp:\n  - id: stdin\n    type: file\n    codec: json\n    config:\n      source: /dev/stdin  \n  - id: gsub\n    type: gsub\n    codec: json  \n    preprocessors:\n      - gzip\n    config:\n      pem: <path-to-pem-file>\n      subscription: '<name-of-subscription>'\nbinding:\n  - id: example\n    links:\n      '/onramp/stdin/{instance}/out':\n        - '/pipeline/outbound/{instance}/in'\n      '/pipeline/outbound/{instance}/out':\n        - '/offramp/stdout/{instance}/in'\n        - '/offramp/gpub/{instance}/in'\n      '/offramp/gpub/{instance}/out':\n        - '/pipeline/inbound/{instance}/in'\n      '/pipeline/inbound/{instance}/out':\n        - '/offramp/stdout/{instance}/in'\n      '/onramp/gsub/{instance}/out':\n        - '/pipeline/inbound/{instance}/in'\nmapping:\n  \"/binding/example/passthrough\":\n    instance: \"passthrough\"\n")),(0,a.kt)("p",null,"The above config receives ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," on stdin, sends it to Google Pub/sub service (and stdout) and writes the response received from Google Pub/sub (since ",(0,a.kt)("inlineCode",{parentName:"p"},"linked")," is set to true) to stdout. At the same time, it also receives the messages for the configured subscription from Google pub/sub and writes those messages to stdout."),(0,a.kt)("p",null,"Supported preprocessors, that can be configured in yaml file can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/preprocessors/"},"preprocessors"),".\nSupported postprocessors and more about it: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/postprocessors/"},"postprocessors"),".\nSupported codecs, that can be configured in yaml file can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/codecs/"},"codecs")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tremor Dot Diagram",src:n(3866).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a topic using the following ",(0,a.kt)("inlineCode",{parentName:"li"},"gcloud")," command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud pubsub topics create <topic-name>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set the env variable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export GOOGLE_APPLICATION_CREDENTIALS="<path-to-service-token-json-file>"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command used to run tremor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tremor server run -f outbound.trickle inbound.trickle test.yaml | jq .\n")),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/offramps/#gpub"},"gpub")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/artefacts/onramps/#gsub"},"gsub")," docs to perform opertaions."),(0,a.kt)("h2",{id:"testing-for-gsub-onramp-pubsub"},"Testing for gsub onramp (Pub/sub)"),(0,a.kt)("p",null,"Google Cloud Pub/Sub guarantees delivery of all messages and also preserves the order of messages if the subscription has ",(0,a.kt)("inlineCode",{parentName:"p"},"message-ordering")," set."),(0,a.kt)("p",null,"However, we wish to test the property of guranteed delivery and message-ordering for gsub in events like poor network connectivity. In order to test, before sending the message to pub/sub, we add a field ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," in the event (json) that increments every time we send a message. This would be done in the outbound trickle file. To validate that all the messages are received in order, we have a validation logic in the inbound trickle file that checks if the difference between the ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," value of the current message and the previous message is one, the order is maintained."),(0,a.kt)("p",null,"For this purpose, we also use a write-ahead log or ",(0,a.kt)("inlineCode",{parentName:"p"},"wal")," that builds on circuit breaker and acknowledgement mechanisms to provide guaranteed delivery. The write-ahead log is useful in situations where sources/onramps do not offer guaranteed delivery themselves, but the data being distributed downstream can benefit from protection against loss and duplication."),(0,a.kt)("p",null,"We have 3 different configurations for the outbound trickle file - using a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/workshop/examples/20_transient_gd/"},"transient wal"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tremor.rs/workshop/examples/21_persistent_gd/"},"persistent wal")," and no wal. The cofigurations are as follows:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"No wal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'define script counter\nscript\n  let count = match state==null of\n    case true =>\n      0\n    default =>\n      state.count + 1\n  end;\n\n  let state = {"count": count};\n  {"command": "send_message", "project":"<project-id>", "topic":"<topic-name>", "data": merge event of {"count": state.count} end, "ordering_key": "<ordering-key>"}\nend;\n\ncreate script counter;\n\nselect event from in into counter;\nselect event from counter into out;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transient-wal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'define qos::wal operator in_memory_wal\nwith\n  read_count = 20,\n  max_elements = 1000, # Capacity limit of 1000 stored events\n  max_bytes = 10485760 # Capacity limit of 1MB of events\nend;\n\ncreate operator in_memory_wal;\n\ndefine script counter\nscript\n  let count = match state==null of\n    case true =>\n      0\n    default =>\n      state.count + 1\n  end;\n\n  let state = {"count": count};\n  {"command": "send_message", "project":"<project-id>", "topic":"<topic-name>", "data": merge event of {"count": state.count} end, "ordering_key": "<ordering-key>"}\nend;\n\ncreate script counter;\n\nselect event from in into counter;\nselect event from counter into in_memory_wal;\nselect event from in_memory_wal into out;\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Persistent-wal")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'define qos::wal operator on_disk_wal\nwith\n  read_count = 20,\n  max_elements = 1000, # Capacity limit of 1000 stored events\n  max_bytes = 10485760 # Capacity limit of 1MB of events\nend;\ncreate operator on_disk_wal;\n\ndefine script counter\nscript\n  let count = match state==null of\n    case true =>\n      0\n    default =>\n      state.count + 1\n  end;\n\n  let state = {"count": count};\n  {"command": "send_message", "project":"<project-id>", "topic":"<topic-name>", "data": merge event of {"count": state.count} end, "ordering_key": "<ordering-key>"}\nend;\n\ncreate script counter;\n\nselect event from in into counter;\nselect event from counter into on_disk_wal;\nselect event from on_disk_wal into out;\n')),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"inbound")," trickle, we have the validation logic as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-trickle"},'define script validate\nscript\n  match state == null of\n    case true =>\n      let valid = match event.data.count == 0 of \n        case true =>\n          true      \n        default =>\n          false\n      end,\n      let state = {"prev": event.data.count},\n      {"response": event, "valid": valid} \n      \n    default =>\n      let valid = match state.prev + 1 == event.data.count of \n        case true =>\n          true\n        default =>\n          false\n      end,\n      let state = {"prev": event.data.count},\n      \n      {"response":event, "valid": valid}\n  end;\nend;\n\ncreate script validate;\n\nselect {"data": event, "meta": $} from in into validate;\nselect event from validate into out;\n')),(0,a.kt)("p",null,"For the testing, we run the sink (a.k.a offramp) to send messages and source (a.k.a onramp) to receive messages separately."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Testing gsub",src:n(1701).Z})),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note:")),"\n",(0,a.kt)("em",{parentName:"p"},"On killing the server and resarting right afterwards, we see that we lost 1 message (id 7) which was acknwledged inside tremor but not yet fully delivered to the console by gsub.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In all the 3 cases, we obtain similar results. We observe that on restarting tremor, we may lose in flight messages (events) that were already acknowledged at the time the server went down and thus not fully delivered by the downstream system. We may also observe duplicate messages (messages being received more than once). However, the order of messages is preserved.\nHence, for the ",(0,a.kt)("inlineCode",{parentName:"p"},"gsub")," onramp, a ",(0,a.kt)("inlineCode",{parentName:"p"},"wal")," can assist with partial recovery of downstream system but it is not guarenteed to be lossless."),(0,a.kt)("h2",{id:"network-failure-recovery"},"Network Failure Recovery"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Network Failure Recovery testing",src:n(4014).Z})),(0,a.kt)("p",null,"While testing in poor connectivity, the pivot point (where it just works) was observed when downlink and uplink packets dropped varies between 47%-50%. "),(0,a.kt)("h2",{id:"use-of-connectors"},"Use of Connectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bulk batch rolling event/log storage to GCS"),(0,a.kt)("li",{parentName:"ul"},"Distribution of openTelemetry logs/trace/metrics over GCP pub/sub")),(0,a.kt)("h2",{id:"the-tremor-community"},"The Tremor community"),(0,a.kt)("p",null,"The Tremor community is absolutely great. As I was contributing to it as a part of my internship, I was lucky to have direct access to the Tremor developers working at Wayfair whenever I had any questions. We used to have a lot of meetings in the General Voice channel on discord with the Tremor developers and anyone could join in and ask questions, discuss ideas and share what they are working on. This used to be super helpful."),(0,a.kt)("p",null,'Apart from that, on the first Tuesday of every month we used to have office hours where everyone joins in and there used to be discussions on topics like: "Why did tremor go open source", "Good practices for contributing to open-source", and Q/As. They used to be a lot of fun.'),(0,a.kt)("p",null,"I am so grateful to my mentors: Darach, Heinz and Matthias for being super kind and always encouraging me to ask questions and clarifying all my doubts. Also, thanks to Ana for always being so nice and helping with my Rust errors. They all are amazing and I thank them for their time and help."),(0,a.kt)("h2",{id:"final-thoughts"},"Final Thoughts"),(0,a.kt)("p",null,"It was an overall great journey contributing to Tremor. I learned so much in these 3 months' time with the support of my mentors. I'm very grateful to CNCF for organizing this mentorship program as it gave me an opportunity to learn about event processing, distributed systems, Rust, Cloud-Native technologies, etc. I wouldn't have learned so much in these 3 months' time had I not been a part of this mentorship program. It was definitely a fun learning experience."))}d.isMDXComponent=!0},446:function(e,t,n){"use strict";t.Z=n.p+"assets/images/connector-b5049c7dbfe33de71b96d2ee25136f23.png"},3866:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dot-diagram-38e419be865fb5bf57190638508a7b39.png"},4014:function(e,t,n){"use strict";t.Z=n.p+"assets/images/network-failure-testing-7b192bf0cc0bad6271046fd9ae4cc2f5.png"},1701:function(e,t,n){"use strict";t.Z=n.p+"assets/images/validation-testing-image-35e388fced29a6888b362e9ab78e7da2.png"}}]);