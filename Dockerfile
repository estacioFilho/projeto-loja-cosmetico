FROM node:20.14.0

WORKDIR /app-druss

COPY . .

RUN npm install

EXPOSE 5002

CMD ["npm", "start"]
