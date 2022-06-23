"use strict";(self.webpackChunklab_container_apps=self.webpackChunklab_container_apps||[]).push([[712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:0,id:"intro",slug:"/",sidebar_label:"Introduction"},i="Azure Container Apps",l={unversionedId:"intro",id:"intro",title:"Azure Container Apps",description:"Hands-on Lab Script",source:"@site/docs/01-introduction.md",sourceDirName:".",slug:"/",permalink:"/lab-azure-container-apps/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,id:"intro",slug:"/",sidebar_label:"Introduction"},sidebar:"tutorialSidebar",next:{title:"Create CApps Environment",permalink:"/lab-azure-container-apps/create-container-apps-environment"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"azure-container-apps"},"Azure Container Apps"),(0,a.kt)("p",null,"Hands-on Lab Script"),(0,a.kt)("p",null,"7 June 2022"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1466).Z,width:"1575",height:"394"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Azure Container Apps is a fully managed serverless container service for building and deploying modern apps at scale, and empowers developers to focus on the business logic of their apps rather than on cloud infrastructure management."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/container-apps/"},"https://azure.microsoft.com/services/container-apps/")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The following are required to complete the script:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Azure Subscription -  ",(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/pricing/details/container-apps/"},"pricing")," ... there is some free monthly allowance."),(0,a.kt)("li",{parentName:"ul"},"Azure CLI - this can be used either:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"locally ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/cli/azure/install-azure-cli"},"install instructions"),"."),(0,a.kt)("li",{parentName:"ul"},"accesed via the ",(0,a.kt)("a",{parentName:"li",href:"https://shell.azure.com"},"cloud Shell"),"."))),(0,a.kt)("li",{parentName:"ul"},"Two demo containers:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ColoursWeb ... web front-end that will display a number of lights ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/markharrison/ColoursWeb"},"https://github.com/markharrison/ColoursWeb"),"."),(0,a.kt)("li",{parentName:"ul"},"ColoursAPI ... API app that will return random colours ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/markharrison/ColoursAPI"},"https://github.com/markharrison/ColoursAPI"),".")))))}u.isMDXComponent=!0},1466:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/01-introduction-d4314502c94c760bce37d01feb091b28.png"}}]);