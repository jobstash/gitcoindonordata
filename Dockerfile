FROM node:18-alpine AS base


FROM base as deps
RUN apk add --no-cache libc6-compat
WORKDIR /gitcoindonordata
COPY package.json pnpm-lock.yaml* ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile

FROM base as builder
RUN yarn global add pnpm
WORKDIR /gitcoindonordata
COPY --from=deps /gitcoindonordata/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN pnpm build

FROM base AS runner
WORKDIR /gitcoindonordata
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs ./gitcoindonordata/public ./
COPY --from=builder --chown=nextjs:nodejs ./gitcoindonordata/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs ./gitcoindonordata/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD HOSTNAME="0.0.0.0" node server.js
