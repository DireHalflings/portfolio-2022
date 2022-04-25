# # stage1 - build react app first 
FROM node:16.13.0-alpine3.11 as build
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# # stage2 - build nginx server
FROM nginx:stable-alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY package*.json ./
RUN rm -r /usr/share/nginx/html/*
COPY --from=build app/build/. /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
