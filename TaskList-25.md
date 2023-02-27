Readme: [Return](README.md)   

Timestamp|Task Id|task Name|Task Description|defects
|:--------|------:|:--------|:---------------:|---------------:|
06:00:00 AM|3.1|new postgres image from dockerfile|build and test new dockerfile based extended postgres:12 image to include start files in docker entry point, fix github actions to build and upload db image|
07:00:00 AM|3.2|cluster deploy|deleted cluster deployment, ran terraform and captured log for apply, deleted all disks in gconsole|
08:00:00 AM|3.3|deployed kubernetes |deployed pods into k8s, db stuck in pending status|no resources deployed, retrying again
09:00:00 AM|3.4|debug db startup|update repo, pushed devops changes, ran local db postgres and tested setup.|
10:00:00 AM|3.5|resolve db init problems|fixed database initialization, creating the thingsboard database, users etc at startup of the container.|still having persistence issues in GKE, database files are ephemeral
11:00:00 AM|3.6|debug thingsboard startup problems.|now db is setup properly but tb is not starting correctly. Hibernate appears to fail in creating the schema etc.|modified deployment script to use default k8s env variables for DB server ip and port
12:00:00 PM|3.7|expose Uis to public IP address|successfully exposed UIs on port 9090, 8080 and 3000 creating load-balancer services|
02:00:00 PM|3.8|add pi emulator container/add registration pi|update startup scripts for pi vm to call to the tb restful api instance and register the vm as a device for a tenant, |
03:00:00 PM|3.9|Manually register fake pi device|call curl and register a device via json and REST in tb|generated the script based on the REST endpoint but have not executed it yet.
04:00:00 PM|3.101|automate previous steps in script|Create a script that registers an emulated device in the tb REST Api and returns device id|
04:00:00 PM|3.11|Improve pi emulated image|added  extended pi image to github actions and pushed to ghcr.io |
05:00:00 PM|3.12|Build k8s deploy for pi|build resource yaml for k8s deployment of pi image using registry image id|
06:00:00 PM|3.13|updated README, tasks and docs.|updated readme contents and details. Still working on spreadsheet conversion.|
