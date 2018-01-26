FROM node:boron-slim
WORKDIR /root
RUN apt-get update && apt-get install --assume-yes unzip nginx
RUN wget https://github.com/imdada/overwatch/archive/dev.zip && unzip dev.zip && mv overwatch-dev overwatch
WORKDIR /root/overwatch
RUN yes | sh install.sh
RUN cd web && npm run build
WORKDIR /root/overwatch/server
EXPOSE 80 3000
CMD ["/usr/local/bin/npm", "start"]
