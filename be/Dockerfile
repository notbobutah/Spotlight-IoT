FROM node:10
WORKDIR /usr/app
COPY src/package*.json ./
RUN npm install

COPY src .

RUN npx sequelize db:migrate:all
RUN npx sequelize db:seed:all

EXPOSE 8080
CMD [ "npm", "start" ]