# build stage
FROM node:16-alpine3.14 as builder

LABEL app="drone-ui-mp"

WORKDIR /usr/app

# INSTALL
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY . .

# BUILD
RUN yarn build

FROM nginx:1.20-alpine
WORKDIR /var/www/html
COPY --from=builder /usr/app/dist/files ./
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf