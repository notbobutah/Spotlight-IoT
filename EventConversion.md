# Spotlight IoT Kafka Event Conversion

Using the existing Spotlight IoT GCP project as a basis the Kafka event broker, meta manager (zookeeper), Kafka schema registry, Kafka REST Proxy, Kafka connect and ksqldb servers have been added to the deployment by modifying the docker-compose yaml file. 

Spotlight deployment configuration:

   Database: Postgres, on internal:external port  5432:5432
   NodeJs Backend API on internal:external port 8080:8080
   Java Worker on internal:external port 