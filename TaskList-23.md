Readme: [Return](README.md)   


Timestamp|Task Id|task Name|Task Description|defects
|:--------|------:|:--------|:---------------:|---------------:|
06:30:00 AM|1|Form Project|Create project description and tasklist|
07:00:00 AM|2|Add components|Add Following libraries and components: React diagramming, Spotlight NodeJs REST server, Thingsboard Server, Postgres Database, raspberry Pi VM|
08:00:00 AM|3|Build Docker compose|Create docker compose yaml file to deploy all components into local docker CM and verify proper startup.|
09:00:00 AM|4|Test Running cluster|Verify that all operations are running as expected, create github repository|
10:00:00 AM|5|build local k8s env|install minicube, kubectl,, etcd, compose to deploy docker-compose file to minikube|
11:00:00 AM|6|build deployment descriptors|used Kompose to convert docker-compose files to kubernetes resources files|
11:30:00 AM|7|build deployment scripts|wrote helm chart |
12:00:00 PM|8|build deployment scripts|wrote initial terraform|
12:30:00 PM|9|build deployment scripts|build deploy/undeploy scripts to test k8s resources files|
01:00:00 PM|10|Finish minikube deployment – check in|debugging k8s deployment, check in IaC codebase|
02:00:00 PM|11|Clean up|added namespace isolation for all components, modified tb to use different image, modified init db to correct minor issue, (failed at) loading spotlight data for rest service support|the change removed an embedded postgres database but broke the login process for the db
04:00:00 PM|12|debugging instability in tb deployment|Defect prevention. Tb deployment breakage is definitely related to the change in container image selection for tb in task #11|
