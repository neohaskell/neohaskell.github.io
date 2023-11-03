"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[8794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var g=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},165:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=e=>{let{issue:t,absolute:n}=e;const[o,r]=a.useState("loading"),[i,l]=a.useState();(0,a.useEffect)((()=>{try{fetch(`https://api.github.com/repos/neohaskell/neohaskell/issues/${t}`).then((e=>e.json())).then((e=>{e&&(r(e.state),l(e.title))}))}catch(e){console.error(e)}}),[]);const s=o?`NOT IMPLEMENTED YET: #${t} - ${i}`:"LOADING",u=`tooltip ${n?"absolute z-10 p-4":""}`;return a.createElement("a",{className:u,"data-tip":s,target:"_blank",href:`https://github.com/neohaskell/neohaskell/issues/${t}`},a.createElement("div",{className:`badge border-black ${{open:"badge-warning",closed:"hidden",loading:"badge-primary"}[o]} badge-lg`}))}},1645:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function o(e){let{src:t,sourceLink:n,alt:o}=e;return a.createElement("figure",{className:"!flex !flex-col !place-items-center"},a.createElement("img",{src:t,alt:o}),a.createElement("figcaption",{className:"!text-xs"},`Source: ${n}`))}},3441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162);n(165),n(1645);const l={sidebar_position:3},s="Functions",u={unversionedId:"essentials/functions",id:"essentials/functions",title:"Functions",description:"The documentation that you're reading is a design document where most of",source:"@site/docs/essentials/functions.mdx",sourceDirName:"essentials",slug:"/essentials/functions",permalink:"/docs/essentials/functions",draft:!1,editUrl:"https://github.com/neohaskell/neohaskell.github.io/tree/main/docs/essentials/functions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Laziness",permalink:"/docs/essentials/laziness"},next:{title:"Meeting the Types",permalink:"/docs/essentials/types"}},c={},p=[{value:"Calling a Function",id:"calling-a-function",level:2},{value:"Defining Functions",id:"defining-functions",level:2},{value:"A Note on Cognitive Overhead",id:"a-note-on-cognitive-overhead",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"functions"},"Functions"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The documentation that you're reading is a design document where most of\nthe features you're reading are yet to be implemented. Check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs-intro"},"Note on the Docs"))),(0,o.kt)("p",null,"NeoHaskell promotes the style of programming that's called ",(0,o.kt)("strong",{parentName:"p"},"functional programming"),". There are so many definitions of\nfunctional programming, but it boils down to one thing: ",(0,o.kt)("strong",{parentName:"p"},"programming with functions"),"."),(0,o.kt)("p",null,"Functions can be divided in two types: ",(0,o.kt)("strong",{parentName:"p"},"Calculations")," and ",(0,o.kt)("strong",{parentName:"p"},"Actions"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"calculation")," is a function that will always return the same result for the same input. ",(0,o.kt)("strong",{parentName:"p"},"In NeoHaskell, they cannot crash/throw an error"),". Examples of calculations are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Performing mathematical operations (adding, subtracting, etc)"),(0,o.kt)("li",{parentName:"ul"},"Returning the length of a list"),(0,o.kt)("li",{parentName:"ul"},"Converting one object to another"),(0,o.kt)("li",{parentName:"ul"},"Doing operations with strings")),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"action")," is a function that usually relies on some external thing to perform its job. ",(0,o.kt)("strong",{parentName:"p"},"These can throw errors.")," Examples of actions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reading a file from the disk"),(0,o.kt)("li",{parentName:"ul"},"Sending an email"),(0,o.kt)("li",{parentName:"ul"},"Modifying some data in the state of the application"),(0,o.kt)("li",{parentName:"ul"},"Printing something to the screen")),(0,o.kt)("p",null,"This distinction is crucial, because when looking for a crash in your application, you can be sure that the problem is\nin an action."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In NeoHaskell, by default all functions are calculations"),". The compiler won't let you perform an action without explicitly\ntelling it that you're doing so. We will cover actions in later sections, so for now, just know ",(0,o.kt)("strong",{parentName:"p"},"that all functions you see are calculations, and cannot fail/crash.")),(0,o.kt)("h2",{id:"calling-a-function"},"Calling a Function"),(0,o.kt)("p",null,"In NeoHaskell, to call a function, you ",(0,o.kt)("strong",{parentName:"p"},"write its name and then the arguments separated by spaces"),". This usually baffles people coming from other languages, but it helps you write more readable and beautiful code."),(0,o.kt)("p",null,"Suppose we want to call a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"estimateShipping")," that returns the cost based on weight in kilos, distance in kilometers, and cost per kilometer. Here's how you would do it. Compare the NeoHaskell code, and the JavaScript code (click on the tabs to switch languages):"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"neohaskell",label:"NeoHaskell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-haskell"},"estimateShipping 15 100 2\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"estimateShipping(15, 100, 2)\n")))),(0,o.kt)("p",null,"The only time that we use parentheses is when we want to pack another function call or using an operator as an argument. For example, if we wanted to call ",(0,o.kt)("inlineCode",{parentName:"p"},"estimateShipping")," adding the weights as the first argument, and with the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"calculateDistance")," as the second argument, we would do it like this:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"neohaskell",label:"NeoHaskell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-haskell"},"estimateShipping (7 + 8) (calculateDistance 10 20) 2\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"estimateShipping(7 + 8, calculateDistance(10, 20), 2)\n")))),(0,o.kt)("p",null,"At this point, it is definitely not clear that one style is more beautiful than another. But it is because that also it is\nadvised to extract the arguments to constants, and then call the function with the constants, inside of a function that you've\ndefined."),(0,o.kt)("h2",{id:"defining-functions"},"Defining Functions"),(0,o.kt)("p",null,"To define a function in NeoHaskell, you write the name of the function, followed by the arguments, and then an equal sign, and then a block for the body of the function. This is too much information to process in a sentence, so let's see an example."),(0,o.kt)("p",null,"Let's write a function that calculates the shipping cost, given the weight, distance, and cost per kilometer:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"neohaskell",label:"NeoHaskell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-haskell"},"estimateShipping weight distance costPerKm = do\n  let distanceCost = distance * costPerKm\n  let weightCost = weight * 2\n  distanceCost + weightCost\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function estimateShipping(weight, distance, costPerKm) {\n  const distanceCost = distance * costPerKm;\n  const weightCost = weight * 2;\n  return distanceCost + weightCost;\n}\n")))),(0,o.kt)("p",null,"In the example above, we're using a ",(0,o.kt)("strong",{parentName:"p"},"block")," to define a function, so it allows us to define constants with the ",(0,o.kt)("inlineCode",{parentName:"p"},"let")," keyword. Note how that the last line in a block is\nreturned, so there's no need to write ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," like in\nother languages."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Blocks are optional"),", and if we wanted to write the same function without it, removing all the constants,\nand writing the calculation inline, we could do it like this:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"neohaskell",label:"NeoHaskell",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-haskell"},"estimateShipping weight distance costPerKm =\n  distance * costPerKm + weight * 2\n"))),(0,o.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function estimateShipping(weight, distance, costPerKm) {\n  return distance * costPerKm + weight * 2;\n}\n")))),(0,o.kt)("p",null,"This way of writing code helps writing data processing code and validation rules in a very readable way. ",(0,o.kt)("strong",{parentName:"p"},"But be careful"),",\nbecause one-liners can easily become hard to read, so ",(0,o.kt)("strong",{parentName:"p"},"it is advised to use blocks for more complex functions.")),(0,o.kt)("h2",{id:"a-note-on-cognitive-overhead"},"A Note on Cognitive Overhead"),(0,o.kt)("p",null,"In the function we've defined above, we're naming our arguments ",(0,o.kt)("inlineCode",{parentName:"p"},"weight"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"distance"),". Is the weight in kilograms or pounds? Is the distance in kilometers, miles, ",(0,o.kt)("a",{parentName:"p",href:"https://edition.cnn.com/2020/04/04/us/social-distancing-florida-alligator-trnd/index.html"},"or alligators"),"? We don't know, and we might have to look at the implementation of the function to know. And still, we'd have no clue, because there aren't even comments in the function."),(0,o.kt)("p",null,"This is extra work that our brains must have to do, and when you're trying to navigate a codebase with hundreds (or thousands) of functions, it can become a nightmare. These kinds of issues might seem anecdotic, but actually ",(0,o.kt)("a",{parentName:"p",href:"https://www.simscale.com/blog/nasa-mars-climate-orbiter-metric/"},"the NASA lost millions due to a similar situation"),"."),(0,o.kt)("p",null,"NeoHaskell takes an approach that helps you define explicit contracts for all of the functions. We do so by ",(0,o.kt)("strong",{parentName:"p"},"modeling our domain")," (the problem we're trying to solve) ",(0,o.kt)("strong",{parentName:"p"},"with types"),"."),(0,o.kt)("p",null,"Let's hop into the next section to learn more about them!"))}h.isMDXComponent=!0}}]);