FROM node:lts-stretch

WORKDIR /code

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

ENTRYPOINT [ "npm", "start" ]
