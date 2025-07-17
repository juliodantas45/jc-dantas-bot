# Usa Node 18 slim para manter alinhado ao package.json
FROM node:18-slim

# Define diretório de trabalho
WORKDIR /app

# Instala dependências do Puppeteer necessárias para o Chromium funcionar no Railway
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 \
    libpangocairo-1.0-0 libxss1 libgtk-3-0 fonts-liberation wget ca-certificates && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copia package.json e package-lock.json (se houver)
COPY package*.json ./

# Instala as dependências em modo produção (sem dev)
RUN npm install --omit=dev

# Copia todo o código do projeto para dentro do container
COPY . .

# Porta padrão (opcional)
# EXPOSE 3000

# Comando para iniciar o bot
CMD ["npm", "start"]
