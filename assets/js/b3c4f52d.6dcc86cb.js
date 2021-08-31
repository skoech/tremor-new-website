(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[8599],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),p=o,d=u["".concat(l,".").concat(p)]||u[p]||h[p]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6831:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Improving our Influx Parser- A Story in Four Acts",author:"The Tremor Team",author_image_url:"https://avatars.githubusercontent.com/u/60009416?s=200&v=4",tags:["perf"],draft:!1,hide_table_of_contents:!1,description:"The process of improving the performance of our influx line protocol parser."},l="Influx Parsing Performance",m={permalink:"/blog/2020/03/06/influx-perf",editUrl:"https://github.com/skoech/tremor-new-website/tree/main/docs/blog/2020-03-06-influx-perf.md",source:"@site/blog/2020-03-06-influx-perf.md",title:"Improving our Influx Parser- A Story in Four Acts",description:"The process of improving the performance of our influx line protocol parser.",date:"2020-03-06T00:00:00.000Z",formattedDate:"March 6, 2020",tags:[{label:"perf",permalink:"/blog/tags/perf"}],readingTime:8.895,truncated:!0,prevItem:{title:"Rust & Tell Berlin- March 2020",permalink:"/blog/2020/03/31/rust-and-tell"},nextItem:{title:"Tremor is now Open Source!",permalink:"/blog/2020/02/22/welcome"}},c=[{value:"Act 1 - Allocation",id:"act-1---allocation",children:[]},{value:"Act 2 - Degeneralisation",id:"act-2---degeneralisation",children:[]},{value:"Act 3 - Outside help",id:"act-3---outside-help",children:[]},{value:"Act 4 - Borrow vs. Owned",id:"act-4---borrow-vs-owned",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Yesterday, we spent the day on a report ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tremor-rs/tremor-runtime/issues/82"},"that our influx parser was slow"),", and it turns out it was indeed."),(0,a.kt)("p",null,"This is an exciting topic as just a few days ago, we ",(0,a.kt)("a",{parentName:"p",href:"https://bobkonf.de/2020/ennis-gies.html"},"gave a talk at BoBKonf 2020")," on this topic, so this is a great opportunity to show some of the topics and our process in action."),(0,a.kt)("p",null,"All the topics in this blog are links; the main one above this text is to the pull request, the titles of each section link to the commit that implements the topic discussed. Go ahead, click on some, and take a look!"),(0,a.kt)("p",null,"There are two tools worth introducing here that we used during this performance session."),(0,a.kt)("p",null,"One is ",(0,a.kt)("a",{parentName:"p",href:"http://brendangregg.com/perf.html"},"perf"),", which we used with a minimal setup of ",(0,a.kt)("inlineCode",{parentName:"p"},"perf record")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"perf report"),". We use this to get a glance at where code is spending time. This is not perfect, but it is quick and easy for decent results."),(0,a.kt)("p",null,"The other one is ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/criterion/0.3.1/criterion/"},"criterion"),", an excellent Rust framework for microbenchmarks based on the ",(0,a.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/criterion"},"haskell framework")," with the same name. It is so helpful since it allows us to show changes in performance between changes. That makes it perfect for the kind of incremental improvements our process favors."),(0,a.kt)("h2",{id:"act-1---allocation"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/tremor-rs/tremor-runtime/pull/87/commits/42ee11637bc5cd3a215cce1cb841afe791b944b4"},"Act 1 - Allocation")),(0,a.kt)("p",null,"We talked a bit about allocations and how they can slow down programs in our talk. We tackled two main areas there, and both of them applied to this benchmark."),(0,a.kt)("p",null,"First, we switched our allocator to ensure we use the same allocator in both our builds, and the benchmark can make a significant difference!"),(0,a.kt)("p",null,"Second, we found a few places where we used ",(0,a.kt)("inlineCode",{parentName:"p"},"String::new()")," and then push to this String - this is one of the patterns we mentioned in our talk, and as you can see in this PR, something we still do wrong at times."),(0,a.kt)("p",null,"From prior experience, we know that tag names, values, and field names rarely, if ever, are larger than ",(0,a.kt)("inlineCode",{parentName:"p"},"256")," characters, so we preallocate with this to eliminate almost all string relocations during parsing."),(0,a.kt)("p",null,"As you can see, this simple change already had a decent impact on performance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"simple-value            time:   [540.03 ns 540.27 ns 540.53 ns]\n                       change: [-14.017% -13.948% -13.884%] (p = 0.00 < 0.05)\n                       Performance has improved.\n \nint-value               time:   [314.67 ns 314.90 ns 315.14 ns]\n                       change: [-8.9227% -8.8709% -8.8179%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 13 outliers among 100 measurements (13.00%)\n 1 (1.00%) low mild\n 12 (12.00%) high mild\n \nstr-value               time:   [460.68 ns 460.92 ns 461.16 ns]\n                       change: [-11.668% -11.617% -11.564%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 4 outliers among 100 measurements (4.00%)\n 1 (1.00%) low mild\n 2 (2.00%) high mild\n 1 (1.00%) high severe\n \nescaped-value           time:   [477.57 ns 478.02 ns 478.51 ns]\n                       change: [-13.262% -12.894% -12.594%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 1 outliers among 100 measurements (1.00%)\n 1 (1.00%) high mild\n")),(0,a.kt)("h2",{id:"act-2---degeneralisation"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/tremor-rs/tremor-runtime/pull/87/commits/d1490fb940ad99ca3570e4af8c5f5407c4d054e6"},"Act 2 - Degeneralisation")),(0,a.kt)("p",null,'When we originally wrote the code, what we did is generalize the "find a character" logic between the cases where we were looking for one, two, or three distinct characters to terminate a token.'),(0,a.kt)("p",null,"That made sense from the perspective of not duplicating code, however looking at the output of perf, it showed that we're spending an awful lot of time in this one particular function."),(0,a.kt)("p",null,"So we split this function into its three cases and implemented each on its own, allowing simplified code for one and two termination characters. This simplifies the logic and, in result, improves performance for those cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"simple-value            time:   [533.13 ns 534.49 ns 536.02 ns]\n                       change: [-1.5482% -1.3801% -1.1996%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 3 outliers among 100 measurements (3.00%)\n 2 (2.00%) high mild\n 1 (1.00%) high severe\n \nint-value               time:   [287.45 ns 287.61 ns 287.78 ns]\n                       change: [-8.5277% -8.4504% -8.3783%] (p = 0.00 < 0.05)\n                       Performance has improved.\n \nstr-value               time:   [428.11 ns 428.38 ns 428.68 ns]\n                       change: [-7.2129% -7.1458% -7.0775%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 2 outliers among 100 measurements (2.00%)\n 1 (1.00%) low mild\n 1 (1.00%) high mild\n \nescaped-value           time:   [446.53 ns 447.30 ns 448.53 ns]\n                       change: [-6.6970% -6.5679% -6.4161%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 7 outliers among 100 measurements (7.00%)\n 6 (6.00%) high mild\n 1 (1.00%) high severe\n")),(0,a.kt)("h2",{id:"act-3---outside-help"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/tremor-rs/tremor-runtime/pull/87/commits/6c9ee7ce64d1474bbd609f7ad99e4303b0ee98df"},"Act 3 - Outside help")),(0,a.kt)("p",null,"Not all performance improvements have to be written in code, sometimes asking the right question and looking for the right thing can do the trick."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/lexical/"},"lexical")," is a rust library that implements a faster version of number parsing, which is a significant part of what influx line protocol is."),(0,a.kt)("p",null,"The changes are minimal, and as you can see, the impact isn't that huge, but every percentage point counts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"simple-value            time:   [522.24 ns 522.45 ns 522.69 ns]\n                       change: [-0.3955% -0.2589% -0.1477%] (p = 0.00 < 0.05)\n                       Change within noise threshold.\nFound 13 outliers among 100 measurements (13.00%)\n 2 (2.00%) low mild\n 4 (4.00%) high mild\n 7 (7.00%) high severe\n \nint-value               time:   [295.19 ns 295.38 ns 295.56 ns]\n                       change: [-1.9771% -1.6929% -1.5006%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 5 outliers among 100 measurements (5.00%)\n 3 (3.00%) low mild\n 1 (1.00%) high mild\n 1 (1.00%) high severe\n \nstr-value               time:   [421.03 ns 421.25 ns 421.46 ns]\n                       change: [-3.0571% -2.9466% -2.8421%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 8 outliers among 100 measurements (8.00%)\n 3 (3.00%) low severe\n 1 (1.00%) low mild\n 3 (3.00%) high mild\n 1 (1.00%) high severe\n \nescaped-value           time:   [433.66 ns 434.61 ns 435.77 ns]\n                       change: [-2.9065% -2.7290% -2.5090%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 4 outliers among 100 measurements (4.00%)\n 1 (1.00%) high mild\n 3 (3.00%) high severe\n")),(0,a.kt)("h2",{id:"act-4---borrow-vs-owned"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/tremor-rs/tremor-runtime/pull/87/commits/eb24fd9c3f5982a2dae743abd41a75a4253eec07"},"Act 4 - Borrow vs. Owned")),(0,a.kt)("p",null,"The last act is a bit more exciting, so we'll spend extra time on it (both here and when implementing it)."),(0,a.kt)("p",null,"This touches on something we didn't discuss in detail during our talk for the sake of time. It is that owned values instead of borrowed values are\nsignificantly more expensive."),(0,a.kt)("p",null,"While 'owned' and 'borrowed' are very Rust-specific terms, you can think about it this way:"),(0,a.kt)("p",null,"An owned value is a value that has its own memory, on creation, it allocates that memory copies the data in, and when it gets freed, the memory too gets freed."),(0,a.kt)("p",null,"A borrowed value doesn't own the memory it refers to. Instead, it borrows the memory from another value, and now those two are tied to each other. Rust uses lifetimes to represent this- this is a vast topic of its own, so we'll not go into details here, but think about it that a borrowed value in some way is a pointer to someone else's memory."),(0,a.kt)("p",null,"For influx data, a lot of the strings can are perfectly fine represented inside the initial memory; they don't need modification or change to be then used in the final data representation."),(0,a.kt)("p",null,"The first implementation ignored this fact and always created a newly owned data structure - this is expensive (as you will see below). However, it's not that simple. Not all strings can just be passed, pointing to the original memory. Influx uses some escaping in its line protocol that makes this impossible."),(0,a.kt)("p",null,"Fortunately, Rust has a data structure that allows representing the situation where we often return borrowed data but sometimes need to own it- it's named a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cow"),'. No, not that cow, it doesn\'t eat grass, it is a Copy On Write structure that we can abuse to cover the "we sometimes need to own the data" situation.'),(0,a.kt)("p",null,"In short, a ",(0,a.kt)("inlineCode",{parentName:"p"},"Cow< '_, str>")," allows returning either a borrowed ",(0,a.kt)("inlineCode",{parentName:"p"},"&str")," or an owned String - perfect for our use case!"),(0,a.kt)("p",null,"Since most of the time we simply need can return the ",(0,a.kt)("inlineCode",{parentName:"p"},"&str")," we use a trick I picked up from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/maciejhirsz/json-rust/blob/master/src/codegen.rs#L67-L99"},"json crate")," that is to split out the logic in a base and a complex case where the base case can perform the common operation quickly and only if it is required we switch to the complex and more costly implementation."),(0,a.kt)("p",null,"In our case, this means we assume that all strings can be returned as borrowed, and only if we find an escape sequence, we switch to a more complex implementation. While this has some extra cost on the rare case, it makes the typical case rather cheap."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"simple-value            time:   [385.62 ns 385.85 ns 386.06 ns]\n                       change: [-25.171% -25.122% -25.073%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 5 outliers among 100 measurements (5.00%)\n 1 (1.00%) low severe\n 3 (3.00%) low mild\n 1 (1.00%) high mild\n \nint-value               time:   [240.91 ns 241.37 ns 241.97 ns]\n                       change: [-18.169% -18.051% -17.905%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 1 outliers among 100 measurements (1.00%)\n 1 (1.00%) high severe\n \nstr-value               time:   [308.08 ns 308.17 ns 308.27 ns]\n                       change: [-26.978% -26.901% -26.833%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 8 outliers among 100 measurements (8.00%)\n 1 (1.00%) low severe\n 4 (4.00%) low mild\n 3 (3.00%) high mild\n \nescaped-value           time:   [368.73 ns 369.05 ns 369.38 ns]\n                       change: [-15.303% -15.233% -15.160%] (p = 0.00 < 0.05)\n                       Performance has improved.\nFound 3 outliers among 100 measurements (3.00%)\n 1 (1.00%) low mild\n")),(0,a.kt)("h2",{id:"conclusion"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/tremor-rs/tremor-runtime/pull/87"},"Conclusion")),(0,a.kt)("p",null,"So we performed 3 very simple and one more complex tweaks, and this doubled the performance of our influx parsing. As you can see, a few simple tweaks, when added together, can have some massive impact."),(0,a.kt)("p",null,"The most important take away here, however, is the process and that it is iterative."),(0,a.kt)("p",null,"We begin each round by looking at measurements, in this case, perf data. Then collect baseline data, in this case, with criterion. From there, we form a theory what could improve the results, implement a solution based on this theory, and finally validate the results with another run of criterion to see the relative diference."),(0,a.kt)("p",null,"And here the final results of all changes combined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Gnuplot not found, using plotters backend\nsimple-value            time:   [376.98 ns 377.26 ns 377.52 ns]                         \n                        change: [-55.627% -55.569% -55.518%] (p = 0.00 < 0.05)\n                        Performance has improved.\nFound 3 outliers among 100 measurements (3.00%)\n  2 (2.00%) low mild\n  1 (1.00%) high mild\n\nint-value               time:   [233.04 ns 233.19 ns 233.34 ns]                      \n                        change: [-47.584% -47.507% -47.435%] (p = 0.00 < 0.05)\n                        Performance has improved.\n\nstr-value               time:   [302.36 ns 302.43 ns 302.50 ns]                      \n                        change: [-58.246% -58.202% -58.159%] (p = 0.00 < 0.05)\n                        Performance has improved.\nFound 6 outliers among 100 measurements (6.00%)\n  2 (2.00%) low mild\n  4 (4.00%) high mild\n\nescaped-value           time:   [364.08 ns 364.35 ns 364.67 ns]                          \n                        change: [-52.159% -52.084% -52.004%] (p = 0.00 < 0.05)\n                        Performance has improved.\nFound 8 outliers among 100 measurements (8.00%)\n  8 (8.00%) high severe\n")))}u.isMDXComponent=!0}}]);