FROM node:18-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
  libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 \
  fonts-liberation libappindicator3-1 xdg-utils wget ca-certificates \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
