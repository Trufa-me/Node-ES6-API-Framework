FROM docker1.inf.weboperations.co.uk/node_centos7:7.5.0_48
Maintainer Recruiter candidate search

USER root
RUN chown -R nodeapp:nodeapp /opt/nodeapp
RUN npm install -g yarn

COPY . /opt/nodeapp
RUN chown nodeapp:nodeapp /opt/nodeapp/yarn.lock /opt/nodeapp/package.json

USER nodeapp

WORKDIR /opt/nodeapp

RUN yarn install

RUN npm run build

EXPOSE 9997

ENTRYPOINT ["./bin/start.sh"]

CMD ["start"]
