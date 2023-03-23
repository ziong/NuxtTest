#!/bin/bash

cd ~

nginx -s quit -c ~/NuxtTest/nginx/conf/nginx.conf -e /tmp/error.log