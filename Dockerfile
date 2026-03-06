# ---------- Build Stage ----------
  FROM node:20-bookworm-slim AS builder

  WORKDIR /app
  
  # install build dependencies
  RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*
  
  # copy package files
  COPY package.json package-lock.json ./
  
  # install dependencies
  RUN npm ci
  
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
  
  