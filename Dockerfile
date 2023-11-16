################################################
FROM node:19-alpine3.16 as base

WORKDIR /app

RUN apk update && \
    apk add git && \
    npm i -g @vue/cli && \
    npm update -g @vue/cli && \
    npm i -g vite@latest && \
    npm install -g degit

################################################
FROM base as app
WORKDIR /app

# EXPOSE 8080