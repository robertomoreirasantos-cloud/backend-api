FROM node:20-alpine
WORKDIR /app

# Copia pacotes e instala dependências
COPY package*.json ./
RUN npm ci --omit=dev

# Copia código
COPY . .

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "start"]
