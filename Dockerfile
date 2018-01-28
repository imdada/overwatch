FROM node:boron-slim
WORKDIR /root
RUN apt-get update && apt-get install --assume-yes unzip nginx
RUN wget https://github.com/imdada/overwatch/archive/dev.zip && unzip dev.zip && mv overwatch-dev overwatch
ADD environment.prod.ts overwatchweb/src/environments/environment.prod.ts
ADD environment.ts  overwatch/web/src/environments/environment.ts
ADD config.json overwatch/server/app/config.json
ADD nigix.sh /root/overwatch/nigix.sh
WORKDIR /root/overwatch
#RUN cd web && npm start
RUN cd web && npm run build
RUN rm -r /var/www/html/*
RUN cp -r  /root/overwatch/web/dist/* /var/www/html/
WORKDIR /root/overwatch/server
ADD entrypoint.sh /root/entrypoint.sh
EXPOSE 80 3000 
ENTRYPOINT [ "/root/entrypoint.sh" ]
