"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[29],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const a={title:"NHEP 8 - Script-style modules",authors:["nick"],date:"2023-11-08T00:00"},r=void 0,l={permalink:"/blog/0008-script-style-modules",editUrl:"https://github.com/neohaskell/nhep/edit/main/nhep/0008-script-style-modules/index.mdx",source:"@site/blog/nhep/nhep/0008-script-style-modules/index.mdx",title:"NHEP 8 - Script-style modules",description:"Introduction",date:"2023-11-08T00:00:00.000Z",formattedDate:"November 8, 2023",tags:[],readingTime:5.755,hasTruncateMarker:!1,authors:[{name:"Nick Tchayka",title:"Creator of NeoHaskell",url:"https://github.com/NickSeagull",imageURL:"https://github.com/NickSeagull.png",key:"nick"}],frontMatter:{title:"NHEP 8 - Script-style modules",authors:["nick"],date:"2023-11-08T00:00"},prevItem:{title:"NHEP 7 - More Concise Type Signature Syntax",permalink:"/blog/0007-more-concise-type-signature-syntax"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Possible Implementation",id:"possible-implementation",level:2},{value:"Example with no exports",id:"example-with-no-exports",level:3},{value:"Example with exports",id:"example-with-exports",level:3},{value:"Impact on Principle of Least Astonishment",id:"impact-on-principle-of-least-astonishment",level:2},{value:"Impact on Principle of Developer Happiness",id:"impact-on-principle-of-developer-happiness",level:2},{value:"Impact on Principle of Least Effort",id:"impact-on-principle-of-least-effort",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"STATUS - DRAFT",type:"tip"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Haskell doesn't allow writing code directly in a file, with the intent of running it as a script.\nSimilarly to Java, Rust or C, it forces the user to put the code that is going to be run in a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,i.kt)("p",null,"Contrary to Java or the others, the syntax is extremely useful for scripts, as it is expressive and concise.\nThere are solutions like ",(0,i.kt)("inlineCode",{parentName:"p"},"runhaskell")," that allow you to run a Haskell file that defines a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function,\nand users are already using it for scripts. For example, the widely used library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/digital-asset/ghc-lib/blob/master/CI.hs"},"ghc-lib uses it for their CI/CD processes"),"."),(0,i.kt)("h2",{id:"possible-implementation"},"Possible Implementation"),(0,i.kt)("p",null,"Imports would be parsed and put at the top level, the rest would be inside of a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function. The users would have to run the module's ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function explicitly, so there are no unexpected side effects on imports."),(0,i.kt)("h3",{id:"example-with-no-exports"},"Example with no exports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'module MyScript where\n\nimport File\n\nfoo <- File.read "foo.txt"\n\nmyFunction :: Int -> String\nmyFunction n =\n  Int.toString n + foo\n')),(0,i.kt)("p",null,"This would be compiled to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'module MyScript where\n\nimport File\n\nmain = do\n  foo <- File.read "foo.txt"\n\n  myFunction :: Int -> String\n  myFunction n =\n    Int.toString n + foo\n\n  pass    -- This is a function that does nothing but is required to make the main function valid\n')),(0,i.kt)("h3",{id:"example-with-exports"},"Example with exports"),(0,i.kt)("p",null,"The complexity is exporting symbols. If one would want to export some kind of function or data type from this kind of module, those would have to be put at the top level, which means that they wouldn't be allowed to use stuff from the scope they're defined with. E.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'module MyScript (myFunction) where\n\nimport File\n\nfoo <- File.read "foo.txt"\n\nmyFunction :: Int -> String\nmyFunction n =\n  Int.toString n + foo\n')),(0,i.kt)("p",null,"This would be compiled to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'module MyScript (myFunction, main) where\n\nimport File\n\nmyFunction :: Int -> String\nmyFunction n =\n  Int.toString n + foo     -- Woops, foo is not defined!\n\nmain = do\n  foo <- File.read "foo.txt"\n  pass\n')),(0,i.kt)("p",null,"A solution would be to have a compile-time marker that marks the function as reexported in a script-style module, and if it has a ",(0,i.kt)("inlineCode",{parentName:"p"},"<symbol>  is not in scope")," error, tell that it is not allowed to do that kind of stuff because it is introducing side effects, and we would direct the user to the proper documentation that explains why not."),(0,i.kt)("p",null,"Another solution, which is a double-edged blade, is to do some symbol tracking and if the function has to be reexported to the top level, we create a top-level mutable reference that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Is ",(0,i.kt)("strong",{parentName:"li"},"NOT")," reexported"),(0,i.kt)("li",{parentName:"ol"},"Is initialized in ",(0,i.kt)("inlineCode",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ol"},"The function does an unsafe read of the mutable reference, using that value.")),(0,i.kt)("p",null,"This has the problem that if ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," hasn't been called, this would fail in runtime."),(0,i.kt)("p",null,"A naive solution would be to introduce a runtime check, but that would make the code slower, and we'd introduce a\nruntime error that would be hard to debug, which goes against the principles of NeoHaskell."),(0,i.kt)("p",null,"A possibility would be to have another compile-time check, that would disallow the usage of the function if the\n",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function of that module hasn't been called yet. Still, that is a complex task to implement, as we'd have to\nfigure out a way to track that, especially when branching is introduced, or even when concurrency is at play."),(0,i.kt)("h2",{id:"impact-on-principle-of-least-astonishment"},"Impact on Principle of Least Astonishment"),(0,i.kt)("p",null,"Most languages nowadays allow writing scripts directly in a file, so it would not be surprising for users to be able to do that in NeoHaskell."),(0,i.kt)("p",null,"On the other hand, having the separation between the import and the module initialization is something not common at\nall in other languages, so it is a very alien thing unless we manage to find a way to make it more familiar."),(0,i.kt)("p",null,"A possibility here could be that script-style modules are not allowed to export anything, as they are scripts,\nmeant to be run directly, and not imported."),(0,i.kt)("p",null,"Also, another possibility would be to have main to return a record of functions, as scripts do not return anything.\n(They can print stuff, and write to files, but they do not return anything, apart from an exit code)."),(0,i.kt)("p",null,"This could introduce a powerful tool for defining services, as the service initialization would be done in the main\nfunction and the service would be returned as a record of functions, which would be the API of the service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'module ProductService (\n  count,\n  deleteById\n) where\n\nimport File\nimport Env\n\ndbFile <- Env.get "DB_FILE"\n          |> orElse "db.sqlite"\n\ntableName <- Env.get "TABLE_NAME"\n             |> orElse "products"\n\ndb <- File.read dbFile\n\ncount :: IO Int\ncount = ...\n\ndeleteById :: UUID -> IO\ndeleteById id = ...\n')),(0,i.kt)("p",null,"If we wrapped everything into a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," making it compile to the following, it would enable\na very interesting pattern for defining services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},'module ProductService (\n  count,\n  deleteById\n) where\n\ndata ProductService = ProductService {\n  count :: IO Int,\n  deleteById :: UUID -> IO\n}\n\ninit :: IO ProductService\ninit = do\n  dbFile <- Env.get "DB_FILE"\n            |> orElse "db.sqlite"\n\n  tableName <- Env.get "TABLE_NAME"\n               |> orElse "products"\n\n  db <- File.read dbFile\n\n  count :: IO Int\n  count = ...\n\n  deleteById :: UUID -> IO\n  deleteById id = ...\n\n  yield ProductService {\n    count,\n    deleteById,\n  }\n')),(0,i.kt)("p",null,"So now, some code that would use this service could do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"import ProductService\n\nmain = do\n  product <- ProductService.init\n  totalProducts <- product.count\n  print (Int.toString totalProducts)\n")),(0,i.kt)("p",null,"Perhaps, at this point, it'd make sense to introduce a new keyword for defining services, instead of\nrelying on ",(0,i.kt)("inlineCode",{parentName:"p"},"module"),"? Maybe ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),"?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"service ProductService (\n  count,\n  deleteById\n) where\n\n-- and so on...\n")),(0,i.kt)("h2",{id:"impact-on-principle-of-developer-happiness"},"Impact on Principle of Developer Happiness"),(0,i.kt)("p",null,"Many technologies allow the use of the same language as a way of configuring the application/project, for example,\nin Ruby they use the language itself to define project dependencies or even the specification of the project.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rails/rails/blob/main/rails.gemspec"},"Here's the gemspec file of Ruby on Rails"),"."),(0,i.kt)("p",null,'On the other hand, instead of writing scripts with Bash, Python or Ruby, one could use NeoHaskell, which is a much\nmore powerful language, and it would allow the user to use the same language for everything. Nowadays, people\nare using Python in an "explorative" manner, where they write scripts and keep tweaking them until they get the\ndesired result, and then they put that into their application.'),(0,i.kt)("h2",{id:"impact-on-principle-of-least-effort"},"Impact on Principle of Least Effort"),(0,i.kt)("p",null,"This removes the necessity of having to write a ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," function, which is a very small thing, but it is still\nsomething that the user has to do, and it is not something that is needed in other languages."),(0,i.kt)("p",null,"On the other hand, this does introduce many implementation tasks in the NeoHaskell codebase, so it is not something\nthat can be done in a short amount of time."))}d.isMDXComponent=!0}}]);