FROM node:16.10-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/fib /usr/share/nginx/html
### STAGE 3: visible on git ###

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
LABEL org.opencontainers.image.source="https://github.com/Janeeczek/Fib"
