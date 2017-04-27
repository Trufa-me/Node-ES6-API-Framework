# Boilerplate API

This boilerplate is responsible for being the base from which to start creating an API.

This project is using babel to transpile back to ES5 on server! YAY! For performance reasons it is advisable not to run babel-node in production.
Its is therefore extremely important to pre-compile the project and run the compiled version instead. This is what the command npm run build
is used for.

Ways to run the app are outlined later in this readme file.

Current endpoints:

POST /v1/someapi/example
POST /v1/someapi/example

### Version
1.0.0

### Tech

This API uses a number of open source projects to work properly:

* [babeljs] - Use next generation JavaScript, today! Transforms code back to ES5!
* [docker] - Ensure environment is configured the same anywhere it is deployed.
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

And of course this boilerplate can be seen here [public repository][git-repo-url]
 on Stash.

### Installation

Boilerplate API requires [Node.js](https://nodejs.org/) v6+ to run.

Open your favorite Terminal and run these commands.

```sh
$ git git@github.com:Trufa-me/Node-ES6-API-Framework.git
$ cd Node-ES6-API-Framework
```

You can move confg/example_default.js to more convenient place e.g.  /etc/jobsite/Node-ES6-API-Framework/default.json and point confg/example_default.js simlink to a new target.

In your terminal, run the following as below:

```sh
$ ln -s /etc/jobsite/Node-ES6-API-Framework/default.json config/default.json
```

### Start application for Development

Open your favorite Terminal and run these commands.


In development project relies on nvm as well as yarn so install those:

Install nvm:
```sh
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
nvm install v6.10.0

```

Install yarn:
```sh
$ npm install -g yarn
```

Run the following:

```sh
$ ./bin/start.sh
```

This command should start api in development mode with [nodemon] and restart api every time you save a file.

### Production - this is for running production locally (Docker handles building the compiled version)

Open your favorite Terminal and run these commands.

Run the following:

```sh
$ ./bin/start.sh build
$ ./bin/start.sh start:prod
```

You should get below output:
```[developer@myMachine Node-ES6-API-Framework]$ ./bin/start.sh
Found '/home/developer/projects/Node-ES6-API-Framework/.nvmrc' with version <v6.10.0>
Now using node v6.10.0 (npm v4.1.2)
yarn install v0.20.3
warning boilerplate-api@1.1.0: "dependencies" has dependency "nodemon" with range "^1.11.0" that collides with a dependency in "devDependencies" of the same name with version "^1.9.0"
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.64s.

> boilerplate-api@1.1.0 start:dev /home/developer/projects/Node-ES6-API-Framework
> cross-env NODE_ENV=development ./node_modules/nodemon/bin/nodemon.js nodemon

[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: /home/developer/projects/Node-ES6-API-Framework/src/**/*
[nodemon] starting `npm run babel-node -- src/index.js nodemon`

> boilerplate-api@1.1.0 babel-node /home/developer/projects/Node-ES6-API-Framework
> babel-node --ignore node_modules,tests "src/index.js" "nodemon"

Front-End server is running at http://localhost:40001
Try me: http://localhost:40001/v1/someapi/promise
```

### Tests

Open your favorite Terminal and run these commands.

Run the following:

```sh
$ ./bin/start.sh test
```

Output:
```[developer@myMachine Node-ES6-API-Framework]$ ./bin/start.sh test

> boilerplate-api@1.1.0 test /home/developer/projects/Node-ES6-API-Framework
> mocha --recursive ./tests/ --compilers js:babel-core/register



  boilerplate api configuration
    ✓ should contain all the correct configuration options


  1 passing (58ms)

[developer@myMachine Node-ES6-API-Framework]$
```

### Generate test coverage report

Run the following:

```sh
$ ./bin/start.sh test:coverage
```

Output:
```[developer@myMachine Node-ES6-API-Framework]$ ./bin/start.sh test:coverage

> boilerplate-api@1.1.0 test:coverage /home/developer/projects/Node-ES6-API-Framework
> nyc --reporter=lcov --reporter=text ./node_modules/.bin/mocha --recursive --require babel-register ./tests/



  boilerplate api configuration
    ✓ should contain all the correct configuration options


  1 passing (11ms)

----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |  Unknown |  Unknown |  Unknown |  Unknown |                |
----------|----------|----------|----------|----------|----------------|
[developer@myMachine Node-ES6-API-Framework]$
```

Viewing the coverage report:

Open explorer and navigate to your project dir and open coverage/lcov-report/index.html

### Docker
API Framework is very easy to install and deploy as a Docker container.

```sh
cd boiler-plate-api
docker build .
```

This will create the Boilerplate API image and pull in the necessary dependencies. Once done, run the Docker and map the port to whatever you wish on your host 40001 in this case:

```sh
docker run -d -t -p 40001:40001  --name boiler_plate_api --restart=always boiler_plate_api
```

Verify the deployment by navigating to your server address in your preferred browser.

e.g http://localhost:40001/v1/someapi/example

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [babeljs]: <https://babeljs.io/>
   [docker]: <https://www.docker.com/>
   [git-repo-url]: <https://github.com/Trufa-me/Node-ES6-API-Framework>
   [git-clone-url]: <git@github.com:Trufa-me/Node-ES6-API-Framework.git>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [nodemon]: <https://github.com/remy/nodemon/blob/master/README.md>
