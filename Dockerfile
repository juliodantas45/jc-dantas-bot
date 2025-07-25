# Usa Node 20 slim (mais recente, para evitar warnings)
FROM node:20-slim

# Define diretório de trabalho dentro da imagem
WORKDIR /app

# Copia apenas os arquivos de dependência para cache do npm
COPY package*.json ./

# Instala dependências do sistema necessárias para Puppeteer (Chromium)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 \
    fonts-liberation libappindicator3-1 libxss1 xdg-utils wget \
    ca-certificates libgtk-3-0 libx11-xcb1 \
    && rm -rf /var/lib/apt/lists/*

# Instala dependências Node.js (usa legacy-peer-deps para evitar conflito)
RUN npm install --legacy-peer-deps

# Copia todo o código do projeto
COPY . .

# Exponha a porta que seu bot usa (ajuste se usar outra porta)
EXPOSE 3000

# Comando para iniciar seu bot
CMD ["node", "index.js"]
