# Use Node 20 oficial como base
FROM node:20-bullseye

# Define diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json primeiro para instalar dependências
COPY package*.json ./

# Instala as dependências (produção)
RUN npm install --omit=dev

# Copia todo o resto do código
COPY . .

# Exponha a porta (se precisar, no seu caso provavelmente não)
# EXPOSE 3000

# Comando para rodar seu bot
CMD ["node", "index.js"]
