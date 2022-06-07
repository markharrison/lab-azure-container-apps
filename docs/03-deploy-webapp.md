---
sidebar_label: 'Deploy WebApp'
slug: /deploy-webapp
---

# Deploy WebApp

## Objective

In this section we will create a Container App which will be the WebApp front-end.   

![](images/Slide2.png)

## Lab Script

### Create Container App

- Create the Container App for the WebApp front-end 
  - Container image is pulled from the GitHub container registry
  - Specify that it can be externally accessed
  - Specify that it can scale from 0 to 3 container instances (replicas) 

```
az containerapp create -g $RG -o table \
  --image ghcr.io/markharrison/coloursweb:latest \
  --name coloursweb \
  --environment $CAENV \
  --ingress external --target-port 80 \
  --min-replicas 0   --max-replicas 3 \
  --revision-suffix webv1 
``` 

![](images/ScrnCreateWebv1.png) 

Note the name of the URL that is emitted - in the above example it is:

`https://coloursweb.jollymushroom-52b07fac.northeurope.azurecontainerapps.io/`

### Auto Scale Up / Down

- Check how many replicas (container instances) are running

```
az containerapp replica list  -g $RG -o table \
  --name coloursweb \
  --revision coloursweb--webv1
```

![](images/ScrnReplicaWeb1.png)

- Wait for 5 minutes - after no activity, it should scale down to zero replicas

![](images/ScrnReplicaWeb2.png)

- Access the web site - in a web browser go to the URL that was emitted when the container app was created 

![](images/ScrnAccessWeb1.png)

- Accessing the site will cause one replica to be spun up to service the request.

![](images/ScrnReplicaWeb3.png)

### Explore Azure Portal

- In the Azure portal we can see the Container App.  Explore the various menu options.

![](images/ScrnAzurePortalCAppWeb1.png)

![](images/ScrnAzurePortalCAppWeb2.png)

## Summary 

In this section we created our first application - the Web front-end. 

The number of replicas automatically scaled as needed and went down to zero when not used.   No usage charges apply when an application is scaled to zero.
