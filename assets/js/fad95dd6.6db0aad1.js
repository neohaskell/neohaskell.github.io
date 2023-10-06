"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return n?i.createElement(u,a(a({ref:t},p),{},{components:n})):i.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={title:"NHEP 4 - Semantic Versioning",authors:["nick"],date:"2023-10-06T00:00"},a=void 0,s={permalink:"/blog/0004-semantic-versioning",editUrl:"https://github.com/neohaskell/nhep/edit/main/nhep/0004-semantic-versioning/index.mdx",source:"@site/blog/nhep/nhep/0004-semantic-versioning/index.mdx",title:"NHEP 4 - Semantic Versioning",description:"Introduction",date:"2023-10-06T00:00:00.000Z",formattedDate:"October 6, 2023",tags:[],readingTime:2.55,hasTruncateMarker:!1,authors:[{name:"Nick Tchayka",title:"Creator of NeoHaskell",url:"https://github.com/NickSeagull",imageURL:"https://github.com/NickSeagull.png",key:"nick"}],frontMatter:{title:"NHEP 4 - Semantic Versioning",authors:["nick"],date:"2023-10-06T00:00"},prevItem:{title:"NHEP 3 - Principles of Design",permalink:"/blog/0003-principles-of-design"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Impact on Principle of Least Astonishment",id:"impact-on-principle-of-least-astonishment",level:2},{value:"Impact on Principle of Developer Happiness",id:"impact-on-principle-of-developer-happiness",level:2},{value:"Impact on Principle of Least Effort",id:"impact-on-principle-of-least-effort",level:2},{value:"Usage of SemVer in early development phases",id:"usage-of-semver-in-early-development-phases",level:2},{value:"Standardizing the use of SemVer",id:"standardizing-the-use-of-semver",level:2},{value:"Considerations",id:"considerations",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"STATUS - ACCEPTED",type:"tip"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In the context of the NeoHaskell ecosystem, we employ the ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," (SemVer) schema. SemVer consists of a set of rules and guidelines for assigning and incrementing version numbers within our software development process. By embracing SemVer, NeoHaskell addresses the intricacies of managing dependencies, especially as the ecosystem complexity evolves. The primary objective of utilizing Semantic Versioning within the NeoHaskell ecosystem is to ensure that our version numbers are both transparent and informative, effectively communicating the nature of changes made to our software."),(0,o.kt)("h2",{id:"impact-on-principle-of-least-astonishment"},"Impact on Principle of Least Astonishment"),(0,o.kt)("p",null,"Semantic Versioning has a positive impact on the Principle of Least Astonishment. First of all, it is a very popular schema, used by many open-source projects. Second, adhering to clear and consistent rules for version numbering reduces confusion and surprises for developers and users of software packages. When version numbers follow a predictable pattern (Major.Minor.Patch), it becomes easier for stakeholders to understand the significance of each release. This predictability enhances the user experience and makes it easier to manage software dependencies."),(0,o.kt)("h2",{id:"impact-on-principle-of-developer-happiness"},"Impact on Principle of Developer Happiness"),(0,o.kt)("p",null,"Semantic Versioning contributes to the Principle of Developer Happiness. It provides developers with a systematic approach to versioning, which simplifies the process of releasing and upgrading software packages. Developers can confidently make changes to their codebase while following SemVer guidelines, knowing that version numbers convey the impact of those changes. This reduces the stress associated with managing dependencies and allows developers to focus on building and improving their software."),(0,o.kt)("h2",{id:"impact-on-principle-of-least-effort"},"Impact on Principle of Least Effort"),(0,o.kt)("p",null,"Semantic Versioning aligns with the Principle of Least Effort by streamlining the management of software dependencies. When developers adhere to SemVer, they can make backward-compatible changes without having to release new major versions. This reduces the effort required to maintain and update software packages. Additionally, clear documentation of public APIs and the use of version numbers to indicate compatibility further simplify the integration of dependencies, minimizing the effort needed to ensure smooth interactions between software components."),(0,o.kt)("h2",{id:"usage-of-semver-in-early-development-phases"},"Usage of SemVer in early development phases"),(0,o.kt)("p",null,"During the early development of the NeoHaskell project, the major version will be kept at 0, so that the community can expect breaking changes to occur frequently. Once the project reaches a stable state, the major version will be incremented to 1, indicating that breaking changes will be made less frequently."),(0,o.kt)("h2",{id:"standardizing-the-use-of-semver"},"Standardizing the use of SemVer"),(0,o.kt)("p",null,"The Semantic Versioning schema is advised as a standard for all NeoHaskell projects, as it will help all of the ecosystem to be in sync."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"neo")," CLI tool will easily help bumping versions, as it will inspect the exported functions and types and will suggest the next version based on the changes made."),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"Note that even though the API of a package is not changed, the implementation of a function can be changed, which can lead to different results. This is considered a breaking change and should be reflected in the version number."),(0,o.kt)("p",null,"Take a look at this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/semver/semver/issues/311"},"GitHub thread")," for examples and more information."))}d.isMDXComponent=!0}}]);