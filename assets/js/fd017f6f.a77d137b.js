"use strict";(self.webpackChunklab_container_apps=self.webpackChunklab_container_apps||[]).push([[87],{4089:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=i(4848),t=i(8453);const a={sidebar_label:"Update APIApp",slug:"/update-apiapp"},r="Update APIApp",c={id:"update-apiapp",title:"Update APIApp",description:"Objective",source:"@site/docs/05-update-apiapp.md",sourceDirName:".",slug:"/update-apiapp",permalink:"/lab-azure-container-apps/update-apiapp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Update APIApp",slug:"/update-apiapp"},sidebar:"tutorialSidebar",previous:{title:"Deploy APIApp",permalink:"/lab-azure-container-apps/deploy-apiapp"},next:{title:"Dapr Service Invocation",permalink:"/lab-azure-container-apps/dapr-service-invocation"}},p={},o=[{value:"Objective",id:"objective",level:2},{value:"Lab Script",id:"lab-script",level:2},{value:"Update Container App - V2",id:"update-container-app---v2",level:3},{value:"Blue / Green Testing",id:"blue--green-testing",level:3},{value:"Cutover to V2",id:"cutover-to-v2",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"update-apiapp",children:"Update APIApp"}),"\n",(0,s.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(n.p,{children:"In this section we will deploy a second Container Image to the APIApp with some new business logic."}),"\n",(0,s.jsx)(n.p,{children:"To do some Blue/Green testing we shall send 90% of traffic to the old instance and 10% to the new instance."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(3256).A+"",width:"2667",height:"1500"})}),"\n",(0,s.jsx)(n.p,{children:"When we are confident that the new business logic is working satisfactory - we shall cutover and send 100% to new Container Image."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(7873).A+"",width:"2667",height:"1500"})}),"\n",(0,s.jsx)(n.h2,{id:"lab-script",children:"Lab Script"}),"\n",(0,s.jsx)(n.h3,{id:"update-container-app---v2",children:"Update Container App - V2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update the APIApp Container Image with V2 business logic"}),"\n",(0,s.jsxs)(n.li,{children:["Immediately amend the ingress rule to split the traffic 10%:90% (new",":old",")"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"az containerapp update -g $RG -o table \\\n  --image ghcr.io/markharrison/coloursapi:green \\\n  --name coloursapi \\\n  --min-replicas 0   --max-replicas 3 \\\n  --revision-suffix greenv2  \n\naz containerapp ingress traffic set -g $RG -o table \\\n  --name coloursapi \\\n  --revision-weight coloursapi--greenv2=10 coloursapi--bluev1=90\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(6586).A+"",width:"1920",height:"678"})}),"\n",(0,s.jsx)(n.h3,{id:"blue--green-testing",children:"Blue / Green Testing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check the WebApp - we should see approx 10% green and 90% blue"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8835).A+"",width:"1920",height:"1198"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the Azure portal we can see the two Container revisions and traffic distribution"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(6931).A+"",width:"2076",height:"1856"})}),"\n",(0,s.jsx)(n.h3,{id:"cutover-to-v2",children:"Cutover to V2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cutover completely to the new V2 business logic"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"az containerapp ingress traffic set -g $RG -o table \\\n  --name coloursapi \\\n  --revision-weight coloursapi--greenv2=100 \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(1220).A+"",width:"1764",height:"524"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(6922).A+"",width:"1920",height:"1198"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deactive old V2 business logic"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"az containerapp revision deactivate  -g $RG -o table \\\n  --name coloursapi \\\n  --revision coloursapi--bluev1 \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(8290).A+"",width:"1764",height:"399"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(6764).A+"",width:"2076",height:"1856"})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In this section we deployed an update V2 of our business logic."}),"\n",(0,s.jsx)(n.p,{children:"Intially we allowed a small amount of traffic to use the new version whilst the majority used the old version.  Once satisified, we cutover fully to use the updated version."}),"\n",(0,s.jsx)(n.p,{children:"To tidy up - delete the resource group"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"az group delete -n $RG --yes\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8835:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ScrnAccessWeb4-7ce92e7e43fcb497ca8c6d403b2d59aa.png"},6922:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ScrnAccessWeb5-6070380c689272342c8504aea7fab5dc.png"},6931:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ScrnAzurePortalCAppAPI3-fbcb9bd1ea0bddb001064dfa8eda84dd.png"},6764:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ScrnAzurePortalCAppAPI4-5ea2b9c98a23b835e58e781054ffc445.png"},6586:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ScrnCreateGreenv2-1995fac1e680865a3b1937b61506649c.png"},1220:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ScrnCutOverGreen-e47d00d90df99635f7e1086dfb9b504b.png"},8290:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ScrnDeactivateBluev1-d0cadb7559c93b2440d44fb91872d31b.png"},3256:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Slide4-4b3f66cc8396c39f395ea0c7098aa518.png"},7873:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Slide5-43d023fe17d9c924bf12d20ef2c79607.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(6540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);