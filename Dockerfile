FROM node:18-alpine AS base

FROM base as deps
RUN apk add --no-cache libc6-compat
WORKDIR /jobstash
COPY package.json pnpm-lock.yaml* .npmrc ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile
# RUN yarn install --frozen-lockfile

FROM base as builder
RUN yarn global add pnpm
WORKDIR /gitcoindonordata
COPY --from=deps /gitcoindonordata/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production

RUN pnpm build

FROM base AS runner
WORKDIR /gitcoindonordata

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /gitcoindonordata/dist/apps/web/.next/standalone ./
COPY --from=builder /gitcoindonordata/apps/web/public ./apps/web/public
COPY --from=builder --chown=nextjs:nodejs /gitcoindonordata/dist/apps/web/.next/static ./dist/apps/web/.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "apps/web/server.js"]
