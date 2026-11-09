FROM node:20
WORKDIR /app
RUN npm init -y && npm i express
COPY app.js .
EXPOSE 3000
CMD ["node" , "app.js"]