# Build Stage
FROM node:lts-bullseye AS builder
WORKDIR /app
COPY . . 

RUN npm install -g @angular/cli
RUN npm install

RUN ng config -g cli.warnings.versionMismatch false
RUN ng build

# Release Stage 
FROM nginx:latest
RUN apt update -y
COPY --from=builder /app/dist/AngularHoursFrontend/* /usr/share/nginx/html/
COPY ./deploy/default.conf /etc/nginx/conf.d/

