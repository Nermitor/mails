# Dependencies
FROM node:18-alpine as packages
WORKDIR /app
COPY --link package*.json .env ./
RUN npm ci --no-audit

# Builder
FROM node:18-alpine as node-builder
WORKDIR /app
COPY --link --from=packages /app/node_modules /app/node_modules
COPY --link . .
RUN npx prisma migrate deploy
RUN npm run build

# Server
FROM node:18-alpine as node-runtime
WORKDIR /app
COPY --link --from=node-builder app/.output /app
COPY --link --from=node-builder app/prisma prisma

ENV PORT 3100
EXPOSE 3100

CMD ["node", "/app/server/index.mjs" ]