#!/bin/bash

npx sequelize db:migrate
npx sequelize db:seed:all

node index.js