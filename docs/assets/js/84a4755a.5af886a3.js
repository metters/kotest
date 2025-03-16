"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[71021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),i=n(76775),l=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=c(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,p]=m({queryString:n,groupId:r}),[f,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??f;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var k=n(12466),h=n(72389);const g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,k.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==i&&(p(t),l(r))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},66198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={title:"Setup",slug:"project-setup.html"},s=void 0,u={unversionedId:"framework/setup",id:"framework/setup",title:"Setup",description:"The Kotest test framework is supported on JVM, Javascript and Native.",source:"@site/docs/framework/setup.mdx",sourceDirName:"framework",slug:"/framework/project-setup.html",permalink:"/docs/next/framework/project-setup.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/setup.mdx",tags:[],version:"current",frontMatter:{title:"Setup",slug:"project-setup.html"},sidebar:"framework",previous:{title:"Introduction",permalink:"/docs/next/framework/framework.html"},next:{title:"Writing Tests",permalink:"/docs/next/framework/writing-tests.html"}},p={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Kotest test framework is supported on JVM, Javascript and Native.\nTo enable Kotest for multiple platforms, combine the steps for the individual platforms as detailed in the following tabs."),(0,a.kt)(o.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Kotlin/JS",value:"JS"},{label:"Kotlin/Native",value:"Native"},{label:"Android",value:"Android"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,a.kt)("p",null,"Kotest on the JVM uses the ",(0,a.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"},"JUnit Platform")," gradle plugin.\nFor Gradle 4.6 and higher this is as simple as adding ",(0,a.kt)("inlineCode",{parentName:"p"},"useJUnitPlatform()")," inside the tasks with type ",(0,a.kt)("inlineCode",{parentName:"p"},"Test"),"\nand then adding the Kotest junit5 runner dependency."),(0,a.kt)("p",null,"If you are using Gradle + Groovy then:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"test {\n   useJUnitPlatform()\n}\n")),(0,a.kt)("p",null,"Or if you are using Gradle + Kotlin then:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"tasks.withType<Test>().configureEach {\n   useJUnitPlatform()\n}\n")),(0,a.kt)("p",null,"And then the dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"testImplementation 'io.kotest:kotest-runner-junit5:$version'\n"))),(0,a.kt)(i.Z,{value:"JS",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A working multi-platform project with JVM, native and Javascript all configured, with unit and data driven test examples, can be found here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-multiplatform"},"https://github.com/kotest/kotest-examples-multiplatform"))),(0,a.kt)("p",null,"Add the ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.kotest.multiplatform"},"Kotest multiplatform gradle plugin")," to your build."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  id("io.kotest.multiplatform") version "5.0.2"\n}\n')),(0,a.kt)("p",null,"Add the engine dependency to your ",(0,a.kt)("inlineCode",{parentName:"p"},"commonTest")," dependencies block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  targets {\n    js(IR) { // LEGACY or BOTH are unsupported\n      browser() // to compile for the web\n      nodejs() // to compile against node\n    }\n  }\n\n  sourceSets {\n    val commonTest by getting {\n      dependencies {\n        implementation("io.kotest:kotest-framework-engine:$version")\n      }\n    }\n  }\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Only the new IR compiler backend for Kotlin/JS is supported. If you are compiling JS with the legacy compiler backend then you will not be\nable to use Kotest for testing.")),(0,a.kt)("p",null,"Write your tests using ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/framework/testing-styles.html#fun-spec"},"FunSpec"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/framework/testing-styles.html#should-spec"},"ShouldSpec")," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/framework/testing-styles.html#string-spec"},"StringSpec"),".\nTests can be placed in either ",(0,a.kt)("inlineCode",{parentName:"p"},"commonTest")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"jsTest"),"\nsource sets. Run your tests using the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle check")," command."),(0,a.kt)("p",null,"The Javascript test engine is feature limited when compared to the JVM test engine. The major restriction is that annotation\nbased configuration will not work as Kotlin does not expose annotations at runtime to javascript code."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Tests for Javascript cannot nest tests. This is due to the underlying Javascript test runners (such as Mocha or Karma)\nnot supporting promises in parent tests, which is incompatible with coroutines and in Kotest every test scope is a coroutine.\nThis is why the supported specs are limited to ",(0,a.kt)("inlineCode",{parentName:"p"},"FunSpec"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ShouldSpec")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StringSpec"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The IntelliJ Kotest plugin does not support running common, native or JS tests directly from the IDE using the green run icons.\nOnly execution via gradle is supported."))),(0,a.kt)(i.Z,{value:"Native",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A working multi-platform project with JVM, native and Javascript all configured, with unit and data driven test examples, can be found here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-multiplatform"},"https://github.com/kotest/kotest-examples-multiplatform"))),(0,a.kt)("p",null,"Add the ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/io.kotest.multiplatform"},"Kotest multiplatform gradle plugin")," to your build."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  id("io.kotest.multiplatform") version "5.0.2"\n}\n')),(0,a.kt)("p",null,"Add the engine dependency to your ",(0,a.kt)("inlineCode",{parentName:"p"},"commonTest")," dependencies block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  targets {\n    linuxX64() // can add any supported native targets such as linux, mac, windows etc\n  }\n}\nsourceSets {\n  val commonTest by getting {\n    dependencies {\n      implementation("io.kotest:kotest-framework-engine:$version")\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Tests can be placed in either ",(0,a.kt)("inlineCode",{parentName:"p"},"commonTest")," or a specific native sourceset.\nRun your tests using the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle check")," command."),(0,a.kt)("p",null,"The native test engine is feature limited when compared to the JVM test engine. The major restriction is that annotation\nbased configuration will not work as Kotlin does not expose annotations at runtime to native code."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The IntelliJ Kotest plugin does not support running common, native or JS tests from the IDE. You will need to use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle check")," task."))),(0,a.kt)(i.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,a.kt)("p",null,"For maven you must configure the surefire plugin for junit tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n   <groupId>org.apache.maven.plugins</groupId>\n   <artifactId>maven-surefire-plugin</artifactId>\n   <version>2.22.2</version>\n</plugin>\n")),(0,a.kt)("p",null,"And then add the Kotest JUnit5 runner to your dependencies section."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-runner-junit5</artifactId>\n   <version>{version}</version>\n   <scope>test</scope>\n</dependency>\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Kotest is a ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/multiplatform.html"},"multi-platform project"),".\nIf you are unfamiliar with this, then Kotlin compiles to different targets - JVM, JS, Native, iOS and so on.\nSince version 5.9.0, Kotest includes a workaround so that the ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest-runner-junit5")," module can be used directly, but\nfor older versions you need to explicitly depend on the modules that end with -JVM, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest-property-jvm"),"_"))),(0,a.kt)(i.Z,{value:"Android",mdxType:"TabItem"},(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Currently, only JVM tests are officially supported in Kotest. We are open to suggestions on how to support UI tests."),(0,a.kt)("p",{parentName:"admonition"},"The following steps enable Kotest to be used for unit and integration tests, where the Android framework is not needed or is mocked that usually reside in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/test")," folder of your module.")),(0,a.kt)("p",null,"Kotest on Android uses the ",(0,a.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/user-guide/#running-tests-build-gradle"},"JUnit Platform")," gradle plugin.\nThis requires configuring the android test options block in your build file and then adding the Kotest junit5 runner dependency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"android.testOptions {\n   unitTests.all {\n      it.useJUnitPlatform()\n   }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n   testImplementation 'io.kotest:kotest-runner-junit5:version'\n}\n"))),(0,a.kt)(i.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,a.kt)("p",null,"To configure the test framework for both JS and JVM, you just combine copy the steps for JVM and JS."))))}m.isMDXComponent=!0}}]);