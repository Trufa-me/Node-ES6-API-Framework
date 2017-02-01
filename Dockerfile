FROM docker1.inf.weboperations.co.uk/node_centos7:7.5.0_48
Maintainer Recruiter candidate search

USER root
RUN chown -R nodeapp:nodeapp /opt/nodeapp
RUN npm install -g yarn

COPY . /opt/nodeapp
COPY yarn.lock /opt/nodeapp/yarn.lock
RUN chown nodeapp:nodeapp /opt/nodeapp/yarn.lock

USER nodeapp

# If these files change the cache is busted
COPY package.json /opt/nodeapp/package.json

WORKDIR /opt/nodeapp

RUN yarn install

RUN npm run build

EXPOSE 9997

ENTRYPOINT ["./bin/start.sh"]

CMD ["start"]