FROM node:alpine 

WORKDIR /app
COPY package*.json ./ 
RUN npm install --production
COPY . . 

EXPOSE 3000
ENTRYPOINT ["node", "index.js"]


