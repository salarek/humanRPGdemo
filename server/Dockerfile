FROM node:fermium-buster-slim

WORKDIR /home/server

COPY package*.json ./
# COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5000

CMD ["yarn","server"]
