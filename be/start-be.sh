#!/bin/bash

env

pg_uri="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_SERVER:5432/postgres"
# make sure pg is ready to accept connections
until pg_isready -h $POSTGRES_SERVER -p 5432 -U postgres
do
  echo "Waiting for postgres at: $pg_uri"
  sleep 2;
done

npx sequelize db:migrate
npx sequelize db:seed:all

node index.js