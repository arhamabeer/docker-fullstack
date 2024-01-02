FROM node:latest

WORKDIR /fullstackApp

COPY . .

ENV PORT=5010

EXPOSE 5010

RUN npm install

CMD [ "npm", "start" ]