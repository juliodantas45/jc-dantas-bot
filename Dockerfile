# Usa Node 18 slim (compatível com Puppeteer 22.15.0)
FROM node:18-slim

# Diretório de trabalho
WORKDIR /app

# Instala libs necessárias para Chromium do Puppeteer funcionar
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates fonts-liberation libatk-bridge2.0-0 libatk1.0-0 libcups2 libdbus-1-3 libdrm2 libgbm1 libgtk-3-0 libnspr4 libnss3 libx11-xcb1 libxcomposite1 libxdamage1 libxrandr2 libxss1 libxtst6 wget xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Copia package.json e package-lock.json (ou yarn.lock) para cache do npm
COPY package*.json ./

# Instala dependências, forçando peer dependencies legacy
RUN npm install --legacy-peer-deps

# Copia todo o código do bot
COPY . .

# Exponha a porta (se usar alguma, por padrão 3000 ou ajustar)
EXPOSE 3000

# Comando para iniciar o bot
CMD ["node", "index.js"]
