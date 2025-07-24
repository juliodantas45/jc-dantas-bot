# Usa Node 20.18.1 para evitar conflitos com cheerio e outras libs
FROM node:20.18.1

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package*.json ./
RUN npm install

# Copia todo o projeto
COPY . .

# Instala dependências do Chromium (obrigatórias para puppeteer no Render)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libxss1 libxshmfence1 \
    libgbm1 libasound2 libpangocairo-1.0-0 libpangoft2-1.0-0 libgtk-3-0 \
    fonts-liberation libappindicator3-1 xdg-utils && \
    rm -rf /var/lib/apt/lists/*

# Expõe a porta padrão (opcional, se seu bot não tem server web, pode ignorar)
EXPOSE 3000

# Comando para rodar o bot
CMD ["npm", "start"]
