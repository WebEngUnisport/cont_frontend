FROM node:latest

COPY . ./frontend

WORKDIR /frontend

RUN npm install

CMD node ./app.js
