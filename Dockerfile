FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install --production

FROM node:18-alpine AS builder
WORKDIR /usr/src/app

COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules

RUN npm run build


FROM node:18-alpine AS runner
WORKDIR /usr/src/app
RUN npm install pm2 -g
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json


COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next ./.next
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY startpm2.sh /usr/local/bin/
RUN ln -s /usr/local/bin/startpm2.sh && chmod +x /usr/local/bin/startpm2.sh
COPY ecosystem.config.js .
COPY server.js .

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD startpm2.sh