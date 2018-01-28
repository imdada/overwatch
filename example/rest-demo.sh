host=127.0.0.1:3000
system=`uname`
if [ $system = Darwin ]
then
    sed -i "" -e "s/\"time\": .*,/\"time\": `date +%s`,/" system-stats.json
else
    sed -i -e "s/\"time\": .*,/\"time\": `date +%s`,/" system-stats.json
fi
curl -XPOST "http://$host/stats/" -H "Content-Type: application/json" -d @system-stats.json
