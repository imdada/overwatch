# NOTE: This should not be used in production!
#
# biuld:
#   docker build -t overwatch .
# run:
#   docker run --name=overwatch-dev -p 4200:80 -p 3000:3000 -tid overwatch
# attach:
#   docker exec -it overwatch-dev bash
#
# visit: http://localhost:4200 after build & run
#

FROM node:boron-slim
MAINTAINER ZstringX <thomas931225@126.com>
WORKDIR /root

# install packages
RUN { \
        echo debconf debconf/frontend select Noninteractive; \
        echo mysql-community-server mysql-community-server/data-dir select ''; \
        echo mysql-community-server mysql-community-server/root-pass password ''; \
        echo mysql-community-server mysql-community-server/re-root-pass password ''; \
        echo mysql-community-server mysql-community-server/remove-test-db select true; \
    } | debconf-set-selections \
    && apt-get update && apt-get install -y unzip nginx mysql-server

# validate mysql & create database
# https://serverfault.com/a/892896
RUN find /var/lib/mysql -type f -exec touch {} \; && \
    service mysql start && \
    echo 'create database overwatch' | mysql -uroot

# download source
RUN wget https://github.com/imdada/overwatch/archive/master.zip && \
    unzip master.zip && rm -f master.zip && mv overwatch-master overwatch

# build source
WORKDIR /root/overwatch
RUN yes | sh install.sh
WORKDIR /root/overwatch/web
RUN npm run build && cp -r dist/* /var/www/html && nginx

# clean
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /root/overwatch/server
ADD entrypoint.sh /root/entrypoint.sh
EXPOSE 80 3000
ENTRYPOINT [ "/root/entrypoint.sh" ]
