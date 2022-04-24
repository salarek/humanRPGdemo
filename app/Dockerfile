FROM node:fermium-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
# COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn","serve"]
