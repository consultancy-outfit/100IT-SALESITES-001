# ---------- Build Stage ----------
# Use Debian-based Node (not Alpine) so Rollup gets linux-x64-gnu binary and avoids @rollup/rollup-linux-x64-musl issue
FROM node:20-slim AS builder

WORKDIR /app

# build deps for native modules (e.g. better-sqlite3) if needed
RUN apt-get update && apt-get install -y --no-install-recommends python3 make g++ && rm -rf /var/lib/apt/lists/*

# copy package files
COPY package*.json ./

# install dependencies (no package-lock in container = resolve for this platform; or use node:20-slim so rollup optional deps work)
RUN npm install

# copy source code
COPY . .

# build project
RUN npm run build


# ---------- Production Stage ----------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

