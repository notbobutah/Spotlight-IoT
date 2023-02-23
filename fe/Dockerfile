FROM node:16

WORKDIR /usr/app

EXPOSE 3000
ENV BIND_HOST=0.0.0.0

ADD package.json .
RUN npm install

COPY . /usr/app

CMD ["npm", "start"]
#CMD ["react-scripts-ts" "start"]