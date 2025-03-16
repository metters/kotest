"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[95351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(87462),s=(n(67294),n(3905));const r={id:"koin",title:"Koin",sidebar_label:"Koin",slug:"koin.html"},i=void 0,a={unversionedId:"extensions/koin",id:"version-5.4/extensions/koin",title:"Koin",description:"Koin",source:"@site/versioned_docs/version-5.4/extensions/koin.md",sourceDirName:"extensions",slug:"/extensions/koin.html",permalink:"/docs/5.4/extensions/koin.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/extensions/koin.md",tags:[],version:"5.4",frontMatter:{id:"koin",title:"Koin",sidebar_label:"Koin",slug:"koin.html"},sidebar:"extensions",previous:{title:"Current Instant Listeners",permalink:"/docs/5.4/extensions/instant.html"},next:{title:"WireMock",permalink:"/docs/5.4/extensions/wiremock.html"}},l={},c=[{value:"Koin",id:"koin",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"koin"},"Koin"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://insert-koin.io/"},"Koin DI Framework")," can be used with Kotest through the ",(0,s.kt)("inlineCode",{parentName:"p"},"KoinExtension")," extension."),(0,s.kt)("p",null,"To use the extension in your project, add the dependency to your project:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-koin"},(0,s.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-koin.svg?label=latest%20release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-koin/"},(0,s.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-koin.svg?label=latest%20snapshot"}))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"io.kotest.extensions:kotest-extensions-koin:${version}\n")),(0,s.kt)("p",null,"With the dependency added, we can easily use Koin in our tests!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class KotestAndKoin : FunSpec(), KoinTest {\n\n    override fun extensions() = listOf(KoinExtension(myKoinModule))\n\n    val userService by inject<UserService>()\n\n    init {\n        test("use userService") {\n            userService.getUser().username shouldBe "LeoColman"\n        }\n    }\n}\n')),(0,s.kt)("p",null,"By default, the extension will start/stop the Koin context between leaf tests.\nIf you are using a nested spec style (like DescribeSpec) and instead want the Koin context\nto persist over all leafs of a root tests (for example to share mocked declarations between tests),\nyou can specify the lifecycle mode as ",(0,s.kt)("inlineCode",{parentName:"p"},"KoinLifecycleMode.Root")," in the KoinExtension constructor."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class KotestAndKoin : DescribeSpec(), KoinTest {\n\n    override fun extensions() = listOf(KoinExtension(module = myKoinModule, mode = KoinLifecycleMode.Root))\n\n    val userService by inject<UserService>()\n\n    init {\n        describe("use userService") {\n            it("inside a leaf test") {\n                userService.getUser().username shouldBe "LeoColman"\n            }\n            it("this shares the same context") {\n                userService.getUser().username shouldBe "LeoColman"\n            }\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);