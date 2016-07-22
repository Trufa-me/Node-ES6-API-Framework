# Boilerplate API

This boilerplate is responsible for being the base from which to start creating an API.

This project is using babel to transpile back to ES5 on server! YAY! For performance reasons it is advisable not to run babel-node in prodution.
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
* [docker] - Ensure environment is configured the same anyehere it is deployed.
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]

And of course this boilerplate can be seen here [public repository][git-repo-url]
 on Stash.

### Installation

Boilerplate API requires [Node.js](https://nodejs.org/) v6+ to run.

Open your favorite Terminal and run these commands.

```sh
$ git clone ssh://git@stash.inf.weboperations.co.uk:7999/siftr/recruiter-boilerplate-api.git
$ cd boiler-plate-api
$ ./bin/start.sh
```

Copy confg/index_example.js and rename to index.js. (maybe worth symlinking first)

In your terminal, run the following:

```sh
$ ln -s /home/developer/projects/boiler-plate-api/src/config/ /etc/jobsite/boiler_plate_api/index.js
```

Copy confg/pm2_example.js and rename to pm2.json. (maybe worth symlinking first)

In your terminal, run the following:

```sh
$ ln -s /home/developer/projects/boiler-plate-api/src/config/ /etc/jobsite/boiler_plate_api/pm2.json
```

### Development

Open your favorite Terminal and run these commands.

Run the following:

```sh
$ ./bin/start.sh
```

### Production - this is for running production locally (Docker handles building the compiled version)

Open your favorite Terminal and run these commands.

Run the following:

```sh
$ ./bin/start.sh build
$ ./bin/start.sh start:prod
```

### Tests

Open your favorite Terminal and run these commands.

Run the following:

```sh
$ nvm use v6.0.0
$ ./bin/start.sh test
```

### Generate test coverage report

Open your favorite Terminal and run these commands.

Run the following:

```sh
$ nvm use v6.0.0
$ ./bin/start.sh test:coverage
```

Viewing the coverage report:

open explorer and navigate to your project dir and open coverage/lcov-report/index.html

### Docker
Boilerplate API is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd boiler-plate-api
docker build -t boiler_plate_api .
```

This will create the Boilerplate API image and pull in the necessary dependencies. Once done, run the Docker and map the port to whatever you wish on your host 4005 in this case:

```sh
docker run -d -t -p 9999:9999 -v /etc/jobsite/boiler_plate_api:/opt/nodeapp/config -v /etc/jobsite/oracle:/etc/jobsite/oracle -v /var/lib/docker/logs/boiler_plate_api/logs:/opt/boiler_plate_api/logs --name boiler_plate_api --restart=always boiler_plate_api
```

Verify the deployment by navigating to your server address in your preferred browser.

e.g http://uk.yourname.vm.jobsite.co.uk:9999/v1/someapi/example

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [babeljs]: <https://babeljs.io/>
   [docker]: <https://www.docker.com/>
   [git-repo-url]: <http://stash.inf.weboperations.co.uk:7990/projects/SIFTR/repos/recruiter-boilerplate-api/browse>
   [git-clone-url]: <ssh://git@stash.inf.weboperations.co.uk:7999/siftr/recruiter-boilerplate-api.git>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
