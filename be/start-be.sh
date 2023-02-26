#!/bin/bash

npx sequelize db:migrate:all
npx sequelize db:seed:all
node index.js