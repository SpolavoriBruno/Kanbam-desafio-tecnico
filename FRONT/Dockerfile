FROM node:lts-stretch

WORKDIR /code

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
