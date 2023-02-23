reacte diagrams erros during intitial biuld
npm install --save @types/lodash
 error TS2307: Cannot find module 'lodash' or its corresponding type declarations.

 Thingsboard does not recognize that the database has been insitialized already on startup as the new configuratoin points to an external database in the postgres instance. It attenppts to run the data load to init the system and encounters an error because of existing data. The solution to this is to build and use a seperate thingsboard image that does not use an embedded postgres db.

#### kubernetes deployment
 When working on the minikube deployment I decided to use compose-on-kubernetes project which reads a docker-compose file and deploys to kubernetes, this required setting up a golang environment to biuld the source for the tool. the tools adds a compose API to the kubernetes cbackplane and then allows the kubectl command to call that API.

 Minikube service list shows compose deployed
|-------------|--------------------------|--------------|-----|
|  NAMESPACE  |           NAME           | TARGET PORT  | URL |
|-------------|--------------------------|--------------|-----|
| default     | kubernetes               | No node port |
| default     | my-release-etcd          | No node port |
| default     | my-release-etcd-headless | No node port |
| docker      | compose-api              | No node port |
| kube-system | kube-dns                 | No node port |
|-------------|--------------------------|--------------|-----|

While I was able to build, configure and deploy the docker-compose api set its supported version of Docker language is far behind the current state and required many changes to my docker-compose.yml file. While I was able to get kompose to run properly and create the kubernetes resource definoin files I ultimately opted to manually write helm charts.