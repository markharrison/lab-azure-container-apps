---
sidebar_position: 0
id: intro
slug: /
sidebar_label: 'Introduction'
---

# Azure Container Apps

Hands-on Lab Script

7 June 2022 (checked 14 March 2024)

![](images/01-introduction.png)

## Introduction

Azure Container Apps is a fully managed serverless container service for building and deploying modern apps at scale, and empowers developers to focus on the business logic of their apps rather than on cloud infrastructure management.

[https://azure.microsoft.com/services/container-apps/](https://azure.microsoft.com/services/container-apps/)

## Prerequisites 

The following are required to complete the script:

- Azure Subscription -  [pricing](https://azure.microsoft.com/pricing/details/container-apps/) ... there is some free monthly allowance.
- Azure CLI - this can be used either:
  - locally [install instructions](https://docs.microsoft.com/cli/azure/install-azure-cli).
  - accesed via the [cloud Shell](https://shell.azure.com).
- Two demo containers:
  - ColoursWeb ... web front-end that will display a number of lights [https://github.com/markharrison/ColoursWeb](https://github.com/markharrison/ColoursWeb).
  - ColoursAPI ... API app that will return random colours [https://github.com/markharrison/ColoursAPI](https://github.com/markharrison/ColoursAPI).
