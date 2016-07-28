FROM docker1.inf.weboperations.co.uk/node_centos7:6.0.0_26
Maintainer Recruiter candidate search

USER root

# If these files change the cache is busted
COPY package.json /opt/nodeapp/package.json

RUN npm install

COPY . /opt/nodeapp

WORKDIR /opt/nodeapp

RUN npm run build

USER nodeapp

EXPOSE 9999

ENTRYPOINT ["./bin/start.sh"]

CMD ["start:prod"]