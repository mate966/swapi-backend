FROM node:18-alpine

WORKDIR /app

COPY . .

# Instalacja zależności bez corepack
RUN npm install -g pnpm && pnpm install

# Build aplikacji (Next.js + Payload)
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]