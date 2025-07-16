FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 \
        libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0 \
        fonts-liberation wget ca-certificates && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

RUN npm install --omit=dev

COPY . .

CMD ["node", "index.js"]
