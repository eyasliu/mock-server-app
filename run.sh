#!/bin/bash
# check forever is exit
if [[ ! -x $(which forever) ]]; then
    echo "forever not exit"
    npm i -g forever
fi

if [[ $1 == "stop" ]]; then
    forever stop server.js
else
    echo "install production dependencies"
    npm i --production
    echo "install dependencies OK!"
    mkdir -p ./db
    echo "starting service"
    forever start server.js
    echo "start service OK"
    echo "Sync Qiniu CDN File"
    node scripts/dest/updateQiniu.js
fi