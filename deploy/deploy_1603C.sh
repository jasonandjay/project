#!/bin/bash

WEB_PATH='/home/ubuntu/1603C/chenmanjie/'$1
WEB_USER='ubuntu'
WEB_USERGROUP='ubuntu'

echo $WEB_PATH
echo "Start deployment"
cd $WEB_PATH
echo "pulling source code..."
git reset --hard origin/master
git clean -f
git pull
git checkout master
echo "changing permissions..."
chown -R $WEB_USER:$WEB_USERGROUP $WEB_PATH
echo "Finished."