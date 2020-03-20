FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# RUN sequelize db:migrate

COPY . .

EXPOSE 3000

CMD [ "sh", "start.sh" ]