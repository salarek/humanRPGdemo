FROM node:fermium-buster-slim

WORKDIR /home/app

COPY package*.json ./
# COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn","serve"]
