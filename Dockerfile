

FROM docker.io/phusion/baseimage:0.9.21
MAINTAINER Li Dian <mail@imlidian.com>
WORKDIR /root
RUN apt-get update
RUN apt-get install nginx git --assume-yes
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | /bin/bash
RUN /bin/bash -c "source /root/.bashrc"
RUN /bin/bash -c "nvm install 8.9.0"
RUN /bin/bash nvm "use 8.9.0"
#RUN nvm run node --version
#RUN git clone https://github.com/imdada/overwatch.git
#RUN  ./overwatch/install.sh
#RUN cd overwatch/server
#RUN npm install
#RUN nohup npm start&
RUN rm -r /var/www/html/*
#RUN cd overwatch/web
#RUN npm install
#RUN npm run build
#RUN cp -r  /root/overwatch/web/dist/* /var/www/html/
