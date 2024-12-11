# Стадия для сборки фронтенда
FROM node:16 AS frontend-build

WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# Стадия для бэкенда
FROM node:16 AS backend

WORKDIR /app/backend
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install
COPY ./backend ./
EXPOSE 5000
CMD ["node", "server.js"]

# Стадия для фронтенда (сервер для обслуживания статики)
FROM nginx:alpine AS frontend-server

WORKDIR /usr/share/nginx/html
COPY --from=frontend-build /app/frontend/build ./
