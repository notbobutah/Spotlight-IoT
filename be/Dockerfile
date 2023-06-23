FROM node:10
RUN sed -i -e 's/deb.debian.org/archive.debian.org/g' \
           -e 's|security.debian.org|archive.debian.org/|g' \
           -e '/stretch-updates/d' /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y postgresql-client vim

WORKDIR /usr/app
COPY src/package*.json ./
RUN npm install

COPY src .

EXPOSE 8080
COPY ./start-be.sh /docker-entrypoint-initdb.d/
CMD ["/docker-entrypoint-initdb.d/start-be.sh"]
