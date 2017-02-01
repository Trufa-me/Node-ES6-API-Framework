#!/bin/bash
if [ "$1" == 'test' ]
then
	npm test
elif  [ "$1" == 'test:coverage' ] #build test documentation
then
	npm run test:coverage
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
	yarn install
	npm run start:dev
	node --version
fi