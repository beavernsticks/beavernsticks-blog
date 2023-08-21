FROM node:alpine as build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm ci && npm run docs:build

FROM flashspys/nginx-static
RUN apk update && apk upgrade
COPY --from=build /usr/src/app/docs/.vuepress/dist /static
