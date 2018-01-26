#!/bin/bash

read -p "GFW? (Y/n)" yn
case $yn in
    [Yy]* | "" ) NPM_ARGS="--registry=https://registry.npm.taobao.org";export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/dist;export SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass;;
    [Nn]* ) NPM_ARGS="";;
esac

install_node() {
    export NVM_DIR="$HOME/.nvm"
    if ! [ -s "$NVM_DIR/nvm.sh" ]; then
        echo "installing nvm... (https://github.com/creationix/nvm)"
        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash
    fi
    . "$NVM_DIR/nvm.sh"
    echo "installing node..."
    nvm install --lts
}

# check NodeJS
if ! [ -x "$(command -v npm)" ]; then
    while true; do
        read -p "npm is not installed. install now? (Y/n)" yn
        case $yn in
            [Yy]* | "" ) install_node; break;;
            [Nn]* ) echo "npm is required, please make sure npm is available and try again."; exit 1;;
        esac
    done
fi

# npm install $NPM_ARGS -g typescript ts-node @angular/cli

echo "installing server..."
( cd server && npm $NPM_ARGS install )
echo "done"

echo "installing web..."
( cd web && npm $NPM_ARGS install )
echo "done"

echo "all done"
