#!/bin/sh
echo "Copying /home/ani/Desktop/Website/ to ubuntu@192.168.50.202:/var/www/anicmovsesian.com/"
sshpass -p "D3v310p3r5!" scp -r /home/ani/Desktop/Website/* ubuntu@192.168.50.202:/var/www/anicmovsesian.com/ \
&& echo "Copied Successfully. Check http://192.168.50.202"
