# ---------- Build Stage ----------
FROM node:18-alpine AS builder

WORKDIR /app

# copy package files
COPY package*.json ./

# install dependencies
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