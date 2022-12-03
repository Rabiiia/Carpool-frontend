#!/usr/bin/env bash

# PROJECT_NAME="Name or your frontend project, for example movie --> folder you created under /var/www"
# DROPLET_URL="URL for your droplet"


echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

# first xxxxxx with your droplet url
# second xxxxx with your frontend folder
scp -r ./dist/* root@acmverden.dk:/var/www/CA3

# write ./deploy.sk in terminal everytime you want to deploy frontend changes on your nginx server 
