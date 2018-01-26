

FROM node:slim
MAINTAINER Li Dian <mail@imlidian.com>
WORKDIR /root
RUN apt-get update
RUN apt-get install nginx git --assume-yes
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
RUN bash -i -c 'source /root/.bashrc'
#RUN source /root/.bashrc
#RUN nvm install  8.9.0
RUN bash -i -c 'nvm install 8.9.0'
RUN bash -i -c 'nvm use 8.9.0'
#RUN /bin.bash nvm run node --version
RUN git clone https://github.com/imdada/overwatch.git
#RUN  ./overwatch/install.sh
RUN rm overwatch/web/package-lock.json
RUN cd overwatch/server && npm install
#RUN npm install
#RUN cd overwatch/server && bash  -c 'npm install'
#RUN bash -i -c 'cd overwatch/server && npm install'
#RUN bash -c 'npm install'
RUN nohup npm start&
#RUN rm -r /var/www/html/*
RUN  npm install  -g --unsafe-perm typescript ts-node @angular/cli
RUN cd overwatch/web && npm install && npm start
#RUN bash -i -c 'npm install'
#RUN bash -i -c 'npm run build'
#RUN cp -r  /root/overwatch/web/dist/* /var/www/html/
