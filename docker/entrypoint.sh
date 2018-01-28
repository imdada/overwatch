#!/bin/bash
find /var/lib/mysql -type f -exec touch {} \; && service mysql start
nginx
cd /root/overwatch/server && npm start
