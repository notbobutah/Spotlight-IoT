Readme: [Return](README.md)   

Timestamp|Task Id|task Name|Task Description|results
|:--------|------:|:--------|:---------------:|---------------:|
06:00:00 AM|2.1| configure gcloud sdk|verify gcloud account configuration is proper, project exists|
07:00:00 AM|2.2|manual setup GKE cluster|setup online cluster, configs and controls for deployment|
08:00:00 AM|2.3|update terraform GKE|Update GKE account details, repo locations, deployment names etc|
09:00:00 AM|2.4|test GKE deployment|run terraform deployment, verify deployment, operations and functionality.|
10:00:00 AM|2.5|update repo|Push working branch to github with ability to push to GKE|
10:30:00 AM|2.51|update readme|add devops instructions for each deployment type to readme section with dependency section|
11:00:00 AM|2.6|image registry|select and implement an image registry to give a shared location to push docker images  allowing for distributed deployment access to those image.|ghcr.io, images built and pushed by actions
12:00:00 PM|2.7|test prod deployment|test and verify public deployment in GKE from github action event.|image registry solved problems with images being unavailable, still resolving a persistence problem with GKE
01:00:00 PM|2.8|update db contents|verify and correct database init loads to ensure APIs are returning data.|looks like the db is having some mount point problems in GKE
02:00:00 PM|2.9|update persistence|update k8s persistence definitions to not use local filesystem hostpaths|
03:00:00 PM|2.101|update postgres persistance|Created configmap in effort to initdb and setup the database for thingsboard and my code|
04:00:00 PM|2.11|update postgres persistence|Worked on persistence claim to resolve defect unique to GKE where the PV directory was not empty on creation preventing the database from starting|database is still having issues,will try to create extended docker image for db to include initdb.sh and seed data
