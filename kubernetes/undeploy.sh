kubectl delete -f db-service.yaml,db-deployment.yaml,db-claim1-persistentvolumeclaim.yaml,db-data-persistentvolumeclaim.yaml
kubectl delete -f spotlight-fe-service.yaml,spotlight-fe-deployment.yaml
kubectl delete -f spotlight-be-claim0-persistentvolumeclaim.yaml,spotlight-be-claim1-persistentvolumeclaim.yaml,spotlight-be-service.yaml,spotlight-be-deployment.yaml
kubectl delete -f tb-data-persistentvolumeclaim.yaml,tb-deployment.yaml,tb-logs-persistentvolumeclaim.yaml,tb-service.yaml
