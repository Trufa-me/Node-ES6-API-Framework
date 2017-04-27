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
$ git clone ssh://git@stash.inf.weboperations.co.uk:7999/fram/node-es6-api-framework.git
$ cd node-es6-api-framework
```

You can move confg/example_default.js to more convenient place e.g.  /etc/jobsite/node-es6-api-framework/default.json and point confg/example_default.js simlink to a new target.

In your terminal, run the following as below:

```sh
$ ln -s /etc/jobsite/node-es6-api-framework/default.json config/default.json
```

### Start application for Development

Open your favorite Terminal and run these commands.

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
```[developer@myMachine node-es6-api-framework]$ ./bin/start.sh
Found '/home/developer/projects/node-es6-api-framework/.nvmrc' with version <v7.5.0>
Now using node v7.5.0 (npm v4.1.2)
yarn install v0.20.3
warning boilerplate-api@1.1.0: "dependencies" has dependency "nodemon" with range "^1.11.0" that collides with a dependency in "devDependencies" of the same name with version "^1.9.0"
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.64s.

> boilerplate-api@1.1.0 start:dev /home/developer/projects/node-es6-api-framework
> cross-env NODE_ENV=development ./node_modules/nodemon/bin/nodemon.js nodemon

[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: /home/developer/projects/node-es6-api-framework/src/**/*
[nodemon] starting `npm run babel-node -- src/index.js nodemon`

> boilerplate-api@1.1.0 babel-node /home/developer/projects/node-es6-api-framework
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
```[developer@myMachine node-es6-api-framework]$ ./bin/start.sh test

> boilerplate-api@1.1.0 test /home/developer/projects/node-es6-api-framework
> mocha --recursive ./tests/ --compilers js:babel-core/register



  boilerplate api configuration
    ✓ should contain all the correct configuration options


  1 passing (58ms)

[developer@myMachine node-es6-api-framework]$
```

### Generate test coverage report

Run the following:

```sh
$ ./bin/start.sh test:coverage
```

Output:
```[developer@myMachine node-es6-api-framework]$ ./bin/start.sh test:coverage

> boilerplate-api@1.1.0 test:coverage /home/developer/projects/node-es6-api-framework
> nyc --reporter=lcov --reporter=text ./node_modules/.bin/mocha --recursive --require babel-register ./tests/



  boilerplate api configuration
    ✓ should contain all the correct configuration options


  1 passing (11ms)

----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |  Unknown |  Unknown |  Unknown |  Unknown |                |
----------|----------|----------|----------|----------|----------------|
[developer@myMachine node-es6-api-framework]$
```

Viewing the coverage report:

Open explorer and navigate to your project dir and open coverage/lcov-report/index.html

### Docker
API Framework is very easy to install and deploy as a Docker container.

```sh
cd boiler-plate-api
docker build .
```

This will create the Boilerplate API image and pull in the necessary dependencies. Once done, run the Docker and map the port to whatever you wish on your host 4005 in this case:

```sh
docker run -d -t -p 9999:9999  --name boiler_plate_api --restart=always boiler_plate_api
```

Verify the deployment by navigating to your server address in your preferred browser.

e.g http://localhost:9999/v1/someapi/example

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [babeljs]: <https://babeljs.io/>
   [docker]: <https://www.docker.com/>
   [git-repo-url]: <http://stash.inf.weboperations.co.uk:7990/projects/SIFTR/repos/recruiter-boilerplate-api/browse>
   [git-clone-url]: <ssh://git@stash.inf.weboperations.co.uk:7999/siftr/recruiter-boilerplate-api.git>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [nodemon]: <https://github.com/remy/nodemon/blob/master/README.md>
