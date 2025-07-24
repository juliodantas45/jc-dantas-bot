# Usa Node 18 slim para manter alinhado ao package.json
FROM node:18-slim

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos necessários
COPY package*.json ./

# Evita download do Chromium pelo Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Instala dependências do Puppeteer e Chromium
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 \
    wget ca-certificates fonts-liberation libappindicator3-1 libxss1 \
    lsb-release chromium \
 && npm install \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Copia os arquivos do projeto
COPY . .

# Expõe a porta usada (opcional)
EXPOSE 3000

# Comando para iniciar o bot
CMD ["npm", "start"]
