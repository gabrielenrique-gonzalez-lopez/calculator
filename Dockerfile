FROM node:12.18.1

ENV NODE_ENV=production

WORKDIR .

COPY ["package.json", "./"]

RUN npm install --production

COPY . .

EXPOSE  8080

CMD [ "node", "/src/index.js"]