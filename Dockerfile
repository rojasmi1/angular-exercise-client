# specify the node base image with your desired version node:<version>
FROM node:8

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "ng", "serve" ]