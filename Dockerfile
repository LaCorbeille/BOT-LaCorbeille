FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g 

RUN npm install dotenv

COPY . .

CMD ["node", "./main.js"]