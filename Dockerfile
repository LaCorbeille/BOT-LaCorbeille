FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g 

COPY . .

CMD ["node", "./main.js"]