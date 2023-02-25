# Spotlight IoT GCP
### Current production URLs from GKE on 2-25-2023
Thingsbooard:         http://35.224.156.43:60000/login
Diagramming Tool:     http://34.70.25.202:63000/
API Service Doc:      http://35.193.168.243:60008/docs/

### This intent of this project is based in th following simplistic requirements:
1. Implement opensource React diagramming project as the front-end
2. Include nodejS RESTful API back-end from previous project
3. Integrate the ThingsBoard IoT management platform
4. Implement a Raspberri Pi psuedo device in a virtual machine
5. Deploy cluster in docker-compose for local cluster operations
6. Deploy entire project to Google Docker or Kuberentes Engine via Github actions
7. Register a Raspberry Pi Device
8. Read the cluster details and generate a diagram
9. Read the device list from Thingsboard and generate a diagram

The motivaton for this project is the merging of 2 seperate development projects into a single project and its deployment to a usable state in the GCP. Requirements 6,7 and 8 are nice to have but are optional. This README will include a timeline, tasklist and screen shots of the progress.

The first task is to create the project structure and include the componanets mentioned above:
1. React diagramming sample app - decision: use syncfusions demo app not the open source react diagrams.
         https://github.com/syncfusion/ej2-showcase-react-diagram-builder.git
   Encoutrnered problems with open source project https://github.com/projectstorm/react-diagrams.git

2. Copied RESTful server from previous Spotlight project into be directory  
3. Created thingsboard directory to provide for init.sh to initialize database
4. Using docker image https://hub.docker.com/r/ryankurte/docker-rpi-emu/ - image starts correctly but has no running function and exits immedaitely, this is expected until later in the process.

#### Proof of life:
```
c3a6b86109ae    Up 2 minutes    spotlight-fe
18175db41b04    Up 2 minutes    thingsboard
3bb9e1cf8471    Up 2 minutes (healthy)  spotlight-db
5ee58ba0be9d    Up 2 minutes    spotlight-be
```

The log file for this run can be found in the docs directory with timestamp.

After working on the environment to configure docker to use the docker provider inside minikube so that local images could be found without reaching out to an image repsoitory the deploy.sh produced the followig cluster deployemtn

```
kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
db-6594c6888-qkdn8              1/1     Running   0          25s
my-release-etcd-0               1/1     Running   0          3h5m
spotlight-be-c898f7587-ffgnv    1/1     Running   0          22s
spotlight-fe-756fb77f6b-bs5xh   1/1     Running   0          24s
tb-5b75dd5884-9tz5f             1/1     Running   0          21s
```

## DevOps deployment choices
The project has several mechanism to deploy to kubernetes, it does not currrently dsupport native deploymewnts to GKE or AWS using non kubernetes descriptors.

### Docker -compose
The project contains a docker-compose.yalm file in the root of the project that includes docker image biuld functoinality for local embedded projects in the fe and be directories. Run the following command in a docker environment.

```
docker-compose up --build
```
Visit localhost:9090 for the Thingsboard login screen. 
visit localhost:8080 for the RESTful API swagger page. 
visit localhost:80 to view the diagram editor.

### Kubernetes
The project contains a kubernetes directory filled with resource descritor files that create a deployment in a configured Kubernetes environment, the development effort used minikube as the local kubernetes. In the directory ther eis a deploy.sh script that calls kubectl to deploy the resources files and expose the ports. 

```
./deploy.sh
./undeploy.sh
minikube service --all
```
Because the default nginx in minikube uses ephemeral ports to receive the access port that is exposed for a given service it will appear after the minicube call. If using an alternate kubernetes engine refer to its documentqatoin to receive access urls.


### Terraform
The project contains a terraform directory that currently contains descriptors to create a usable cluster in GKE based on an existing login sessoin. After the terraform process is applied to GKE you can access the cluster by running additional command slisted below to enable kubectl access to the cluster and its resources. You environment may vary from this.

```
terraform plan
terraform apply
gcloud components install gke-gcloud-auth-plugin
sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin
gcloud container clusters get-credentials spotlight-iot-gke --region us-central1-a
kubectl config use-context gke_spotlight-iot_us-central1-a_spotlight-iot-gke
kubectl create namespace spotlight
kubectl get pods -n spotlight

```
#### Kubernetes deploy inside Terraform
The current implementaon of terraform is not deploying any of the application resources in the kubernetes directory. After the above steps kubectl will be configred to point to the GKE based cluster and the deloy.sh script can be run against it to deploy.

This is the kubectl pod list from the GKE deployment.

```
NAME                            READY   STATUS    RESTARTS   AGE
db-6b448d584-gtrzg              1/1     Running   0          2m14s
spotlight-be-694557f95-n2z72    1/1     Running   0          71m
spotlight-fe-66ff57df9b-j7wbj   1/1     Running   0          71m
tb-84649f7878-jrktr             1/1     Running   0          61s
```


## Caveats
The current deployment to GKE is not working due to not have a congifured image registry accessible to GKE to pull images from.

### Thingsboard Docs
#### User Manual
https://thingsboard.io/docs/user-guide
 
#### REST API Ref 
https://demo.thingsboard.io/swagger-ui/#/device-controller/getDeviceCredentialsByDeviceIdUsingGET

#### Python script to provisoin new device into thingsboard
 https://github.com/eykamp/birdhouse/blob/master/management/provision.py
