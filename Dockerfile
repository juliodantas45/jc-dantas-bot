FROM node:18-slim

# Instala dependências do Puppeteer
RUN apt-get update && apt-get install -y --no-install-recommends \
  libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 \
  fonts-liberation libappindicator3-1 libxss1 lsb-release xdg-utils wget \
  ca-certificates && rm -rf /var/lib/apt/lists/*

# Cria diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./
COPY .npmrc ./

# Instala dependências
RUN npm install

# Copia restante dos arquivos
COPY . .

# Porta padrão (caso use HTTP opcional)
EXPOSE 3000

# Comando para rodar o bot
CMD ["node", "index.js"]
