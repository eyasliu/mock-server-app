if [ `which forever` ]; then
    echo "forever is ok!"
else
    npm i -g forever
fi

if [ $1 == "stop" ]; then
    forever stop server.js
else
    echo "install production dependencies"
    npm i --production
    echo "install dependencies OK!"
    mkdir -p ./db
    echo "starting service"
    forever start server.js
    echo "start service OK"
fi