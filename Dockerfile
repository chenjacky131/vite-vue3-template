# 第一阶段下载依赖
FROM node:16-buster-slim as dependency

LABEL description="A demo Dockerfile for build my hello world"

COPY . /var/web/

WORKDIR /var/web

RUN apt remove -y cmdtest \
apt remove -y yarn \
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
apt update \
apt install yarn 

RUN set -x \
  && yarn install 

# 第二阶段
FROM node:16-buster-slim as builder

COPY --from=0 /var/web /var/web

WORKDIR /var/web

RUN set -x \
  && yarn run build

# 第三阶段
FROM nginx:1.23.1-alpine as prod

EXPOSE 80
COPY --from=1 /var/web/dist /usr/share/nginx/html

CMD [ "nginx", "-g", "daemon off;" ]
