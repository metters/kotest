"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[38287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"date_gens",title:"Kotlinx DateTime Gens",slug:"kotlinx-datetime-gens.html",sidebar_label:"Kotlinx DateTime"},l=void 0,i={unversionedId:"proptest/date_gens",id:"version-5.7/proptest/date_gens",title:"Kotlinx DateTime Gens",description:"Kotest provides an optional module that provides generators for KotlinX DateTime.",source:"@site/versioned_docs/version-5.7/proptest/date_gens.md",sourceDirName:"proptest",slug:"/proptest/kotlinx-datetime-gens.html",permalink:"/docs/5.7/proptest/kotlinx-datetime-gens.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/proptest/date_gens.md",tags:[],version:"5.7",frontMatter:{id:"date_gens",title:"Kotlinx DateTime Gens",slug:"kotlinx-datetime-gens.html",sidebar_label:"Kotlinx DateTime"},sidebar:"proptest",previous:{title:"Arrow Generators",permalink:"/docs/5.7/proptest/property-test-generators-arrow.html"},next:{title:"Extra Arbs",permalink:"/docs/5.7/proptest/property-test-extra-arbs.html"}},p={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest provides an optional module that provides generators for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx-datetime"},"KotlinX DateTime"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To use, add ",(0,a.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-property-datetime:version")," to your build.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=kotest-property-datetime"},(0,a.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-property-datetime?label=latest%20release"}))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Generator"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"JVM"),(0,a.kt)("th",{parentName:"tr",align:null},"JS"),(0,a.kt)("th",{parentName:"tr",align:null},"Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.date(yearRange)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates ",(0,a.kt)("inlineCode",{parentName:"td"},"LocalDate"),"s with the year between the given range and other fields randomly."),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.datetime(yearRange, hourRange, minuteRange, secondRage)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates ",(0,a.kt)("inlineCode",{parentName:"td"},"LocalDateTime"),"s with all fields in the given ranges"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Arb.instant(range)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generates ",(0,a.kt)("inlineCode",{parentName:"td"},"Instant"),"s with the epoch randomly generated in the given range"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")))))}m.isMDXComponent=!0}}]);