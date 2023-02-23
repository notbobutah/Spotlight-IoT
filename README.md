# Spotlight IoT GCP
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



### Thingsboard Docs
#### User Manual
https://thingsboard.io/docs/user-guide
 
#### REST API Ref 
https://demo.thingsboard.io/swagger-ui/#/device-controller/getDeviceCredentialsByDeviceIdUsingGET

#### Python script to provisoin new device into thingsboard
 https://github.com/eykamp/birdhouse/blob/master/management/provision.py
