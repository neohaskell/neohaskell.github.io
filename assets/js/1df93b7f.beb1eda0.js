/*! For license information please see 1df93b7f.beb1eda0.js.LICENSE.txt */
(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[3237],{6131:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>N});var a=l(7294),n=l(9960),o=l(2263),r=l(7961),s=l(7462),i=l(4184),c=l.n(i);const m=e=>{let{children:t,onClick:l=(()=>{}),rounded:n="full",size:o="md",color:r="cyan",disabled:s,className:i}=e;return a.createElement("button",{className:c()("border-black border-2 text-black "+i,{"bg-violet-200 hover:bg-violet-300 active:bg-violet-400":"violet"===r&&!s},{"bg-pink-200 hover:bg-pink-300 active:bg-pink-400":"pink"===r&&!s},{"bg-red-200 hover:bg-red-300 active:bg-red-400":"red"===r&&!s},{"bg-orange-200 hover:bg-orange-300 active:bg-orange-400":"orange"===r&&!s},{"bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400":"yellow"===r&&!s},{"bg-lime-200 hover:bg-lime-300 active:bg-lime-400":"lime"===r&&!s},{"bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400":"cyan"===r&&!s},{"bg-none hover:bg-cyan-300 active:bg-cyan-400":""===r&&!s},{"rounded-none":"none"===n},{"rounded-md":"md"===n},{"rounded-full":"full"===n},{"h-10 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]":"sm"===o},{"h-12 px-5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]":"md"===o},{"h-14 px-5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]":"lg"===o},{"border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":s}),onClick:l,disabled:s},t)};var u=l(614);const d={fit:"w-fit",full:"w-full","1/2":"w-1/2","1/3":"w-1/3"},g=["px-8","py-4","dark:bg-slate-950","border-4","bg-white","text-black","border-black",...["bg-slate-950","text-white","border-white","shadow-neowhite"].map((e=>`dark:${e}`))],h=e=>{let{rainbow:t,children:l,width:n,shadowClass:o="shadow-neoblack",background:r="bg-white"}=e;const s=[...t?g.filter((e=>!e.includes("shadow"))).concat("shadow-rainbow"):g,`${d[n]}`,o,r].join(" ");return a.createElement("div",{className:s},l)},p=[{title:"Static feels like Dynamic",description:a.createElement(a.Fragment,null,"NeoHaskell's type system is so powerful that you'll forget it's there. With type inference, you'll spend less time annotating and more time coding in a language that feels dynamic."),buttonText:"Start Coding",showcase:{language:"haskell",code:'process = do\n  joe <- getPerson "Joe"\n  if joe.age > 18 then\n    print "Joe is an adult"\n  else\n    print "Joe is a child"'}},{title:"Hassle-Free Development Environment",description:a.createElement(a.Fragment,null,"NeoHaskell's CLI tool installs all required utilities and makes multi-platform support a breeze. Whether you're compiling to native code or generating WebAssembly for browser compatibility, you'll enjoy error messages that guide, not hinder."),buttonText:"Enjoy the Ride",showcase:{code:"",language:""}},{title:"Focus-Driven, Event-Driven",description:a.createElement(a.Fragment,null,"In NeoHaskell, you work directly events and functions that react to them. Say goodbye to the cognitive overhead of managing state or wrestling with dependency injection. Your focus stays where it belongs: on solving problems and crafting solutions."),buttonText:"Begin your Journey",showcase:{code:"",language:""}},{title:"Naturally Full-Stack",description:a.createElement(a.Fragment,null,"Relish the ease of crafting full-stack applications in a unified language environment. NeoHaskell takes care of frontend-backend communication, allowing you to focus solely on your application's logic."),buttonText:"Experience Bliss",showcase:{code:"",language:""}}],b=[{title:"Beautiful, Ready-to-Use Tools",description:a.createElement(a.Fragment,null,"NeoHaskell offers a clean and intuitive language design, complemented by a core library that provides all the tools you need to start creating amazing software right away."),buttonText:"Start Coding",showcase:{language:"haskell",code:"processLogs rawLogs =\n  rawLogs\n  |> map parseLogs\n  |> collect\n  |> andThen (filter isImportant)\n  |> andThen (map toStructuredLog)"}},{title:"Hassle-Free Development Environment",description:a.createElement(a.Fragment,null,"NeoHaskell's CLI tool installs all required utilities and makes multi-platform support a breeze. Whether you're compiling to native code or generating WebAssembly for browser compatibility, you'll enjoy error messages that guide, not hinder."),buttonText:"Enjoy the Ride",showcase:{code:"",language:""}},{title:"Focus-Driven, Event-Driven",description:a.createElement(a.Fragment,null,"In NeoHaskell, you work directly events and functions that react to them. Say goodbye to the cognitive overhead of managing state or wrestling with dependency injection. Your focus stays where it belongs: on solving problems and crafting solutions."),buttonText:"Begin your Journey",showcase:{code:"",language:""}},{title:"Naturally Full-Stack",description:a.createElement(a.Fragment,null,"Relish the ease of crafting full-stack applications in a unified language environment. NeoHaskell takes care of frontend-backend communication, allowing you to focus solely on your application's logic."),buttonText:"Experience Bliss",showcase:{code:"",language:""}}];function f(e){let{n:t,title:l,showcase:n,description:o,buttonText:r}=e;const s=(t??0)%2==0?"xl:flex-row":"xl:flex-row-reverse",i="code"in n?a.createElement(u.Z,{showLineNumbers:!0,className:"!rounded-none !mb-0",language:n.language},n.code):a.createElement(n.img,null);return a.createElement("div",{className:`bg-violet-200 shadow-neocyan border-4 border-black xl:p-16 sm:p-8 p-0 flex sm:flex-col xl:flex-nowrap flex-wrap md:mx-32 sm:gap-16 gap-8 ${s}`},a.createElement("div",{className:"self-center bg-codeBg flex-grow sm:overflow-visible overflow-hidden"},i),a.createElement("div",{className:"flex flex-col gap-4 sm:p-0 p-8"},a.createElement("h3",{className:"text-3xl"},l),a.createElement("p",{className:"text-lg"},o),a.createElement("div",{className:"xl:self-start self-center"},a.createElement(m,{rounded:"full",color:"cyan"},a.createElement("h3",null,r)))))}function x(){return a.createElement("section",null,a.createElement("div",{className:"sm:container relative"},a.createElement("span",{className:"absolute left-1/2 w-4 h-full bg-violet-500 border-black border-2 -z-20"}),a.createElement("div",{className:"flex flex-col gap-32"},a.createElement("div",{className:"relative mb-10"},a.createElement("span",{className:"absolute w-full h-full py-36 bg-lightbackground -z-20"}),a.createElement("img",{className:"absolute sm:h-36 h-24 bottom-1/4 lg:right-2/3 right-3/4 -z-10",src:"img/Star2.svg"}),a.createElement("img",{className:"absolute sm:h-36 h-24 top-1/4 lg:left-2/3 left-3/4 -z-10 ",src:"img/Star1.svg"}),a.createElement("h1",{className:"text-center"},a.createElement("span",{className:"text-4xl sm:text-6xl"},"Features"))),a.createElement("div",{className:"flex flex-col gap-32 mb-24"},p.map(((e,t)=>a.createElement(f,(0,s.Z)({key:t},e,{n:t}))))),a.createElement("div",{className:"mx-auto relative pb-10"},a.createElement(h,{background:"bg-yellow-400"},a.createElement("h2",{className:"text-black sm:text-2xl text-lg"},"Coming Soon")))),a.createElement("div",{className:"flex flex-col gap-32 mb-24"},b.map(((e,t)=>a.createElement(f,(0,s.Z)({key:t},e,{n:t})))))))}function v(e){let{title:t,children:l,open:n,okText:o="OK",cancelText:r,onOk:s=(()=>{}),onCancel:i=(()=>{})}=e;return n&&a.createElement("div",{className:"z-999 fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10"},a.createElement("div",{className:"max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white"},a.createElement("div",{className:"w-full"},a.createElement("div",{className:"mx-auto my-20 max-w-[400px] flex flex-col gap-5"},a.createElement("h1",{className:"text-5xl font-extrabold text-center"},t),a.createElement("div",{className:"text-xl leading-relaxed text-center"},l),a.createElement("div",{className:"flex flex-row items-stretch gap-4"},r&&a.createElement(m,{color:"red",className:"grow",onClick:()=>i()},a.createElement("h3",null,r)),o&&a.createElement(m,{className:"grow",onClick:()=>s()},a.createElement("h3",null,o)))))))}function y(){const[e,t]=a.useState(!0);return a.createElement("div",{className:"absolute left-1/2 top-1/2"},a.createElement(v,{open:e,okText:"Continue on my own",onOk:()=>t(!e),title:"Greetings traveller!"},a.createElement("p",null,"You probably found this site by accident. It is far from finished, but if you're curious about the project:"),a.createElement("a",{className:"text-lightsecondary hover:underline hover:decoration-wavy underline-offset-4 py-4 block",href:"https://discord.com/invite/wDj3UYzec8",target:"_blank",onClick:()=>t(!e)},a.createElement("h3",null,"JOIN THE DISCORD SERVER!"))))}const w=(e,t)=>`dark:${e}-dark${t} ${e}-light${t}`;function E(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:`${w("text","text")}`},a.createElement("div",{className:"px-8 my-24"},a.createElement("div",{className:"mb-10"},a.createElement("div",{className:""},a.createElement("h1",{className:"text-center tracking-supatight leading-relaxed lg:text-7xl md:text-6xl sm:text-5xl text-3xl"},"A language that triggers",a.createElement("br",null),a.createElement("span",{className:"dark:text-darkprimary text-lightsecondary underline decoration-wavy underline-offset-8"},"flow state."))))),a.createElement("div",{className:"mx-auto mb-4 lg:w-2/3"},a.createElement(h,{rainbow:!0},a.createElement("p",{className:"text-center md:text-2xl sm:text-xl text-lg justify-normal my-10 mx-auto md:w-3/4"},a.createElement("strong",null,"NeoHaskell is a dialect of Haskell that is focused on beginner-friendliness and productivity.")),a.createElement("p",{className:"text-center md:text-2xl sm:text-xl text-lg justify-normal my-10 mx-auto md:w-3/4"},"It is designed to be easy to learn and use, while also being powerful enough to release your app with minimum effort and maximum confidence."))),a.createElement(k,null),a.createElement("div",{className:"relative text-center mx-auto mt-20 mb-10"},a.createElement(n.Z,{to:"/docs/intro"},a.createElement(m,{color:"yellow",rounded:"full",size:"lg"},a.createElement("h2",{className:"mx-4 my-2 sm:text-2xl text-xl"},"Read the Dogma")))))}function k(e){let{enabled:t}=e;return t?a.createElement("div",{className:"mx-auto mt-24 width-full max-w-6xl"},a.createElement("div",{className:"relative overflow-hidden h-0 pb-16-9"},a.createElement("iframe",{className:"absolute top-0 left-0 w-full h-full max-w-full",src:"https://www.youtube.com/embed/VM-2OVNt-eQ?si=A7JKcVobgEpi1fvt",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))):a.createElement(a.Fragment,null)}function N(){const{siteConfig:e}=(0,o.Z)();return a.createElement(r.Z,{description:`${e.tagline}`},a.createElement("div",{className:"container"},a.createElement(y,null),a.createElement(E,null),a.createElement("main",{className:"pt-32"},a.createElement(x,null))))}},4184:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var o=typeof l;if("string"===o||"number"===o)e.push(l);else if(Array.isArray(l)){if(l.length){var r=n.apply(null,l);r&&e.push(r)}}else if("object"===o){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var s in l)a.call(l,s)&&l[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}}]);