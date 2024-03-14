"use strict";(self.webpackChunklab_container_apps=self.webpackChunklab_container_apps||[]).push([[797],{4987:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=i(4848),t=i(8453);const a={sidebar_label:"Dapr Service Invocation",slug:"/dapr-service-invocation"},s="DAPR Service Invocation",o={id:"dapr-service-invocation",title:"DAPR Service Invocation",description:"Objective",source:"@site/docs/06-dapr-service-invocation.md",sourceDirName:".",slug:"/dapr-service-invocation",permalink:"/lab-azure-container-apps/dapr-service-invocation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Dapr Service Invocation",slug:"/dapr-service-invocation"},sidebar:"tutorialSidebar",previous:{title:"Update APIApp",permalink:"/lab-azure-container-apps/update-apiapp"}},c={},p=[{value:"Objective",id:"objective",level:2},{value:"Lab Script",id:"lab-script",level:2},{value:"Redeploy Application",id:"redeploy-application",level:3},{value:"Enable DAPR",id:"enable-dapr",level:3},{value:"Service Invocation",id:"service-invocation",level:3},{value:"Application Insights",id:"application-insights",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"dapr-service-invocation",children:"DAPR Service Invocation"}),"\n",(0,r.jsx)(n.h2,{id:"objective",children:"Objective"}),"\n",(0,r.jsxs)(n.p,{children:["Dapr (Distributed Application Runtime) is a runtime that helps build resilient, stateless, and stateful microservices.   This section assumes that the reader has a basic understanding of Dapr - please refer to ",(0,r.jsx)(n.a,{href:"https://dapr.io",children:"https://dapr.io"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Dapr uses the 'Sidecar Pattern' which extracts the common concerns from a service and host them separately in a separate process / container. In the diagram below we see the Dapr functionality is located in an additional container that works alongside our application container."}),"\n",(0,r.jsx)(n.p,{children:"In this section we shall enable Dapr to handle service invocation between our two containers.\nThe advantages this offers includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Service discovery using name resolution."}),"\n",(0,r.jsx)(n.li,{children:"Secure inter-service communication using mutual (mTLS) authentication."}),"\n",(0,r.jsx)(n.li,{children:"Automatically handle retries and transient errors."}),"\n",(0,r.jsx)(n.li,{children:"Calls between applications are traced and metrics are gathered to provide insights / diagnostics - there is support for several tracing backends and OpenTelemetry collectors."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(8890).A+"",width:"2667",height:"1500"})}),"\n",(0,r.jsx)(n.h2,{id:"lab-script",children:"Lab Script"}),"\n",(0,r.jsx)(n.h3,{id:"redeploy-application",children:"Redeploy Application"}),"\n",(0,r.jsx)(n.p,{children:"To provide Dapr tracing using Application Insights, we need to specify the Application Insights instrumentation key to the Container Apps Environment."}),"\n",(0,r.jsx)(n.p,{children:"Currently, AZ CLI cannot update an existing Container Apps Environment so we will need to redeploy our application from scratch but this time specifying the Application Insights instrumentation key."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Set up some variables for our configuration"}),"\n",(0,r.jsx)(n.li,{children:"Create a Resource Group - this will be a boundary for all the resources we create.    At the end we can tidy up by deleting the Resource Group."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'RG="ContainerAppsDapr-rg"\nLOCATION="northeurope"\nCAENV="ContainerAppsEnvDapr"\nAPPINS="colours-appins-dapr"\naz group create -g $RG -l $LOCATION  -o table\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create an Application Insights instance - get the instrumentation key and store in variable"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'IKEY=$(az monitor app-insights component create -g $RG \\\n  --app $APPINS \\\n  --location $LOCATION  \\\n  --query "instrumentationKey" )\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create the Container Apps Environment - specifying the instrumentation key for Dapr to use"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"az containerapp env create -g $RG -l $LOCATION -o table \\\n  --dapr-instrumentation-key $IKEY \\\n  --name $CAENV \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Redeploy our containers to the new environment"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"az containerapp create -g $RG -o table \\\n  --image ghcr.io/markharrison/coloursweb:latest \\\n  --name coloursweb \\\n  --environment $CAENV \\\n  --ingress external --target-port 80 \\\n  --min-replicas 0   --max-replicas 3 \\\n  --revision-suffix webv1 \n\naz containerapp create -g $RG -o table \\\n  --image ghcr.io/markharrison/coloursapi:green \\\n  --name coloursapi \\\n  --environment $CAENV \\\n  --ingress internal --target-port 80 \\\n  --min-replicas 0   --max-replicas 3 \\\n  --revision-suffix greenv2 \\\n  --revisions-mode multiple  \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(1493).A+"",width:"1920",height:"1733"})}),"\n",(0,r.jsx)(n.p,{children:"We are now in a similar position to the end of the previous section - but this time we have an Application Insights wired up for Dapr."}),"\n",(0,r.jsx)(n.h3,{id:"enable-dapr",children:"Enable DAPR"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enable Dapr sidecar on the WebApp container.  The app-id is what Dapr uses for service discovery.  The port number is what our WebApp is listening to."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"az containerapp dapr enable -g $RG -o table \\\n  --name coloursweb \\\n  --dapr-app-id dapr-coloursweb \\\n  --dapr-app-port 80 \\\n  --dapr-app-protocol http   \n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enable Dapr sidecar on the APIApp container.  The app-id is what Dapr uses for service discovery.  The port number is what our APPApp is listening to."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"az containerapp dapr enable -g $RG -o table \\\n  --name coloursapi \\\n  --dapr-app-id dapr-coloursapi \\\n  --dapr-app-port 80 \\\n  --dapr-app-protocol http   \n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(1692).A+"",width:"1920",height:"741"})}),"\n",(0,r.jsx)(n.p,{children:"Dapr can be seen as enabled with the Azure portal."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(2327).A+"",width:"2064",height:"1797"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(9310).A+"",width:"2064",height:"1797"})}),"\n",(0,r.jsx)(n.h3,{id:"service-invocation",children:"Service Invocation"}),"\n",(0,r.jsxs)(n.p,{children:["The Web App configuration needs to be configured to an URL that forces it to use the sidecar to invoke the API.   It is explained here ",(0,r.jsx)(n.a,{href:"https://docs.dapr.io/reference/api/service_invocation_api/",children:"https://docs.dapr.io/reference/api/service_invocation_api/"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fire up the web browser to access the WebApp - and using the menu select Config (access via top left burger icon)"}),"\n",(0,r.jsxs)(n.li,{children:["Enter the following values:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["API URL - set to sidecar ... need to use ",(0,r.jsx)(n.a,{href:"http://localhost:3500/v1.0/invoke/dapr-coloursapi/method/colours/random",children:"http://localhost:3500/v1.0/invoke/dapr-coloursapi/method/colours/random"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"3500 is the port that the Dapr sidecar uses by default in Azure Container Apps."}),"\n",(0,r.jsx)(n.li,{children:"dapr-coloursapi is the app-id that we assigned to the APIApp sidecar ... this is how the WebApp sidecar routes to the correct target sidecar."}),"\n",(0,r.jsx)(n.li,{children:'Anything specified after /method/ is the API route.  Remember from the previous sections that we used "/colours/random".'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"API Mode: unchecked"}),"\n",(0,r.jsx)(n.li,{children:"Select [Submit]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(1397).A+"",width:"2043",height:"786"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(159).A+"",width:"2043",height:"1086"})}),"\n",(0,r.jsx)(n.h3,{id:"application-insights",children:"Application Insights"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Explore the tranactions recorded by Application Insights"}),"\n",(0,r.jsx)(n.li,{children:"Start with Application Map - each node on the map represents an application component.  Application Map helps you spot performance bottlenecks or failure hotspots across all components of your distributed application."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(5794).A+"",width:"2046",height:"1788"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Next look at Transactions.   Dependency transactions are requests from ColoursWeb .   Requests transactions are requests received by ColoursAPI ."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(8729).A+"",width:"2046",height:"1788"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Select a transaction and drill down."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(2480).A+"",width:"2046",height:"1788"})}),"\n",(0,r.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(n.p,{children:"In this section we enabled Dapr.  The client container called the API container using the Dapr service invocation functionality."}),"\n",(0,r.jsx)(n.p,{children:"We then looks at the tracing captured by Application Insights - this is used to ensure there was no performance anomalies and can help diagnose any issues encountered."}),"\n",(0,r.jsx)(n.p,{children:"To tidy up - delete the resource group"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"az group delete -n $RG --yes\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1493:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnCreateCAEnvDapr-1f3f88ae4f0054dab53722403ad79052.png"},5794:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprAppIns1-c9fc48abcc64175fdb496d4e90a588a9.png"},8729:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprAppIns2-1d7bc35a8a3064067f41e79c91f54a68.png"},2480:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprAppIns3-8413a905a48ffff8ffc1c64a99a535b0.png"},1692:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprEnable1-403ee8e1429800a5a6fa68d5a1fe4acd.png"},2327:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprEnable2-0b499b989b5d96477d3aecefe3bf9c10.png"},9310:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprEnable3-7cd296df1229e7102066372dd05a5565.png"},159:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprService-463c1c2033fb9e0a345104a2a02af8c3.png"},1397:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/ScrnDaprServiceConfig-5eef9391a516f1383b65e23cf5ac5fa2.png"},8890:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/Slide6-83bda364a29d30122275409503979a04.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(6540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);