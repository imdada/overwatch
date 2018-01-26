

FROM node:slim
MAINTAINER Li Dian <mail@imlidian.com>
WORKDIR /root
RUN apt-get update
RUN apt-get install nginx git --assume-yes
#RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
#RUN bash -i -c 'source /root/.bashrc'
#RUN source /root/.bashrc
#RUN nvm install  8.9.0
#RUN bash -i -c 'nvm install 8.9.0'
#RUN bash -i -c 'nvm use 8.9.0'
#RUN /bin.bash nvm run node --version
ENV NODE_VERSION 8.9.0
#RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \
 # && curl -SLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
  #&& gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
  #&& grep " node-v$NODE_VERSION-linux-x64.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
#  && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \
  #&& rm "node-v$NODE_VERSION-linux-x64.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
 # && ln -s /usr/local/bin/node /usr/local/bin/nodejs
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
RUN cd overwatch/web && npm install 
RUN cd overwatch/web && nohub npm start&
#RUN bash -i -c 'npm install'
#RUN bash -i -c 'npm run build'
#RUN cp -r  /root/overwatch/web/dist/* /var/www/html/
