gcloud config get-value project
# terraform init
terraform apply
gcloud container clusters get-credentials $(terraform output -raw kubernetes_cluster_name) --region $(terraform output -raw region)