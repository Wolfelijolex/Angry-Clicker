FROM nginx:stable-alpine

COPY ./build/ /var/www/html

RUN echo $' \n\
worker_processes 1; \n\
\n\
events { worker_connections 1024; } \n\
\n\
http { \n\
    include mime.types; \n\
    sendfile on; \n\
\n\
    server { \n\
        listen 80; \n\
        listen [::]:80; \n\
\n\
        root /var/www/html; \n\
        index index.html index.htm; \n\
\n\
        location / { \n\
            try_files $uri $uri/ =404; \n\
        } \n\
    } \n\
} ' > /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
