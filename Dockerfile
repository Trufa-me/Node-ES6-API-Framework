FROM docker1.inf.weboperations.co.uk/node:6.0.0
Maintainer Recruiter Tribe

USER root

RUN useradd -ms /bin/bash nodeapp

COPY . /opt/nodeapp

WORKDIR /opt/nodeapp

# If these files change the cache is busted
COPY package.json /opt/nodeapp/package.json

RUN npm install && npm run build

RUN chown -R nodeapp:nodeapp /opt/nodeapp

USER nodeapp

EXPOSE 9999

ENTRYPOINT ["./bin/start.sh"]

CMD ["start:prod"]