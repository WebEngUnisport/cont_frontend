FROM node:latest

COPY ./serv ./frontend

WORKDIR /frontend

RUN npm install

CMD node ./serv.js
