#!/bin/bash
source ~/.bash_profile
nvm use
if [ "$1" == 'test' ]
then
	yarn test
elif  [ "$1" == 'test:coverage' ] #build test documentation
then
	yarn test:coverage
elif  [ "$1" == 'build' ] #build compiled babel version
then
	yarn build
elif  [ "$1" == 'start' ] #start from compiled babel version
then
	yarn start
else #dev mode - run using nodemon and babel-node
	yarn install
	yarn start:dev
	node --version
fi
