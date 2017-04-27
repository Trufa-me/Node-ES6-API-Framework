FROM node:6.10
MAINTAINER Standards Team (Temp Name)

USER root
RUN mkdir /opt/nodeapp
RUN chown -R node:node /opt/nodeapp
# RUN npm install -g yarn

COPY . /opt/nodeapp
RUN chown node:node /opt/nodeapp/yarn.lock /opt/nodeapp/package.json

USER node

WORKDIR /opt/nodeapp

RUN yarn install

RUN npm run build

EXPOSE 40001

ENTRYPOINT ["./bin/start.sh"]

CMD ["start"]
