FROM nginx

WORKDIR /usr/share/nginx

COPY ./dist/ ./html/
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 9632

CMD ["nginx","-g","daemon off;"]
