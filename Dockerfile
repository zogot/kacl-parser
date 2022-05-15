# Building the dist/ code
FROM node:18-alpine as builder
WORKDIR /app

COPY tsconfig.json ./
COPY package*.json ./

RUN npm install --include=dev

COPY src src

RUN npm run build

# Dependencies
FROM node:18-alpine as dependencies
WORKDIR /app

COPY package*.json ./

RUN npm ci

# Final step
FROM node:18-alpine
WORKDIR /app

USER node

COPY --from=builder --chown=node:node /app/dist /app/dist
COPY --from=dependencies --chown=node:node /app/node_modules /app/node_modules
COPY --from=dependencies --chown=node:node /app/package.json /app/package.json

ENTRYPOINT ["node", "/app/dist/main.js"]