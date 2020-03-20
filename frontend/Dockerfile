# stage: 1
FROM node AS reactbuild
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build
RUN pwd
RUN ls

# stage: 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=reactbuild /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]