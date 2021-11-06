#Dockerize Node app
FROM node:14

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]