FROM node:latest

ENV BACKEND="http://webengi.marom.ch:8080"

COPY . ./frontend

WORKDIR /frontend

RUN npm install

CMD node ./app.js
