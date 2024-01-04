FROM node:18.12.1

WORKDIR /fullstackApp

COPY package.json .

RUN npm install

COPY . .

WORKDIR /fullstackApp/client

RUN rm -rf node_modules
RUN npm install

WORKDIR /fullstackApp

ENV PORT=5010

EXPOSE 5010

CMD [ "npm","run", "dev_run" ]