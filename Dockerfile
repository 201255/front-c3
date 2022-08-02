FROM node:16

WORKDIR /app_rest

COPY package*.json ./
COPY package-lock*.json ./


RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start"]