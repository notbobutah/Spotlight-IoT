#eval $(minikube docker-env)
#minikube addons enable ingress

# kubectl apply -f db-service.yaml,db-deployment.yaml,db-claim1-persistentvolumeclaim.yaml,db-data-persistentvolumeclaim.yaml
# kubectl apply -f spotlight-fe-service.yaml,spotlight-fe-deployment.yaml
# kubectl apply -f spotlight-be-claim0-persistentvolumeclaim.yaml,spotlight-be-claim1-persistentvolumeclaim.yaml,spotlight-be-service.yaml,spotlight-be-deployment.yaml
# kubectl apply -f tb-data-persistentvolumeclaim.yaml,tb-deployment.yaml,tb-logs-persistentvolumeclaim.yaml,tb-service.yaml

kubectl create namespace spotlight
# gcloud compute disks create --size=500GB --format --zone=us-central1-a pg-data-disk

kubectl -n spotlight apply -f db-deployment.yaml,db-pg-data-persistentvolume.yaml
kubectl -n spotlight apply -f spotlight-fe-deployment.yaml
kubectl -n spotlight apply -f spotlight-be-claim0-persistentvolumeclaim.yaml,spotlight-be-claim1-persistentvolumeclaim.yaml,spotlight-be-deployment.yaml
kubectl -n spotlight apply -f tb-data-persistentvolumeclaim.yaml,tb-deployment.yaml,tb-logs-persistentvolumeclaim.yaml

kubectl expose deployment db -n spotlight  --type=NodePort --name=db
kubectl expose deployment tb -n spotlight --type=NodePort --name=tb
kubectl expose deployment spotlight-be -n spotlight --type=NodePort --name=spotlight-be
kubectl expose deployment spotlight-fe -n spotlight --type=NodePort --name=spotlight-fe

kubectl expose deployment tb           --name tb-lb-service --type LoadBalancer --port 60000 --target-port 9090 -n spotlight
kubectl expose deployment spotlight-be --name be-lb-service --type LoadBalancer --port 60008 --target-port 8080 -n spotlight
kubectl expose deployment spotlight-fe --name fe-lb-service --type LoadBalancer --port 63000 --target-port 3000 -n spotlight
