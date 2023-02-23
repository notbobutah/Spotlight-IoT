#!/bin/bash
docker pull postgres
mkdir -p $HOME/docker/volumes/postgres
docker run --rm --name spotlight_db_1 -e POSTGRES_PASSWORD=spotlight -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres
docker ps -aqf "name=spotlight"
dbip="$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' spotlight)"
echo +++++++++++++++++++++++++++++
echo the postgres databaser server is running at "${dbip}"
echo  try these commands:
echo      docker exec -it spotlight /bin/bash
echo      docker exec -it spotlight psql -h localhost -U postgres 
echo  postgres setup after container starts
echo      docker exec -it spotlight psql -U postgres

echo Creating spotlight schema objects in database
export PGPASSWORD=spotlight
psql -h 172.17.0.2 -U postgres -f src/sql/spotlight.ddl.sql 
echo Creating spotlight data in database
psql -h 172.17.0.2 -U postgres -f src/sql/spotlight.data.sql 

# pull pgadmin docker image and start
docker pull dpage/pgadmin4
docker run --rm --name pgadmin -p 80:80 \
    -e 'PGADMIN_DEFAULT_EMAIL=postgres@localhost' \
    -e 'PGADMIN_DEFAULT_PASSWORD=SpotLight' \
    -e 'PGADMIN_CONFIG_ENHANCED_COOKIE_PROTECTION=True' \
    -e 'PGADMIN_CONFIG_LOGIN_BANNER="Spotlight local developer tools"' \
    -e 'PGADMIN_CONFIG_CONSOLE_LOG_LEVEL=10' \
    -d dpage/pgadmin4
echo login to pgadmin by visiting http://localhost
echo use the credentials postgres@localhost / SpotLight
echo create a server connection using 
echo "${dbip}" postgres / spotlight

docker ps
