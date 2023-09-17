FROM node:latest

COPY . /app

WORKDIR /app

RUN npm install

ENV PORT 8080

ENV NAME World

CMD ["node", "index.js"]
