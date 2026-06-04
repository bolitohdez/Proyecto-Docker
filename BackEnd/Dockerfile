FROM node:18

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["./wait-for-it.sh", "db", "node", "server.js"]