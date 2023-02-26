FROM node:10
WORKDIR /usr/app
COPY src/package*.json ./
RUN npm install

COPY src .

EXPOSE 8080
COPY ./start-be.sh /docker-entrypoint-initdb.d/
