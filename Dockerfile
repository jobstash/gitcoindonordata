FROM node:18-alpine AS base

FROM base as builder
RUN apk add --no-cache libc6-compat
WORKDIR /gitcoindonordata
COPY package.json pnpm-lock.yaml* ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile
COPY . .
ENV NODE_ENV=production
RUN pnpm build

FROM base AS runner
WORKDIR /gitcoindonordata

COPY - from=builder /gitcoindonordata/package.json ./
COPY - from=builder /gitcoindonordata/pnpm-lock.yaml ./
COPY - from=builder /gitcoindonordata/next.config.mjs ./
COPY - from=builder /gitcoindonordata/.next/standalone ./
COPY - from=builder /gitcoindonordata/.next/static ./.next/static
EXPOSE 3000

ENV PORT 3000

CMD ["pnpm", "start:standalone"]
