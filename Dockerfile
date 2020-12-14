FROM node:14

RUN mkdir -p /opt/app

COPY yarn.lock /opt/app/yarn.lock
COPY package.json /opt/app/package.json
WORKDIR /opt/app
RUN yarn install

COPY . /opt/app
RUN NODE_ENV=production yarn nx build awesome-ac

EXPOSE 3000

CMD [ "yarn", "next", "start", "./dist/apps/awesome-ac" ]