#!/bin/bash
if [ "$1" == 'test' ]
then
	npm test 
elif  [ "$1" == 'start:prod' ] #start the production pm2 environment and use compiled babel version
then
	npm run start:prod
elif  [ "$1" == 'build' ] #build compiled babel version
then
	npm run build
elif  [ "$1" == 'start' ] #start from compiled babel version
then
	npm start
else #dev mode - run using nodemon and babel-node
	nvmpath=/opt/jsnode
	source "${nvmpath}/nvm.sh"
	nvm use
	npm install
	npm run start:dev
	node --version
fi
