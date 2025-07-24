# Usa Node 18 slim
FROM node:18-slim

# Define diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY package*.json ./

# Instala dependências do sistema para puppeteer (Chromium)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 \
    fonts-liberation libappindicator3-1 libxss1 xdg-utils wget \
    ca-certificates libgtk-3-0 libx11-xcb1 \
    && rm -rf /var/lib/apt/lists/*

# Instala dependências Node com cache travado
RUN npm install --legacy-peer-deps

# Copia o restante do código para dentro da imagem
COPY . .

# Expõe porta (ajuste se necessário)
EXPOSE 3000

# Comando padrão para iniciar o bot
CMD ["node", "index.js"]
