

FROM docker.io/phusion/baseimage:0.9.21
MAINTAINER Li Dian <mail@imlidian.com>
RUN apt-get update
RUN apt-get install nginx git --assume-yes

#WORKDIR
RUN git clone https://github.com/imdada/overwatch.git
RUN  ./overwatch/install.sh
#server
#RUN cd ~/overwatch/server
#RUN nohup npm start&
#web
#RUN rm -r /var/www/html/*
#RUN cn overwatch/web
#RUN npm run build
#RUN cp -r  /root/overwatch/web/dist/* /var/www/html/
#RUN nginx -s stop
#RUN nginx
#
#RUN ./overwatch/example/rest-demo.sh
