FROM node:14

RUN apt-get update && apt-get install -y libusb-1.0-0 libusb-1.0-0-dev libudev-dev

WORKDIR /app

COPY package.json ./

# COPY yarn.lock ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
