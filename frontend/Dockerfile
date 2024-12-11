# Используем официальный образ для Node.js с React
FROM node:16

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY . .

# Собираем приложение для продакшн
RUN npm run build

# Устанавливаем сервер для обслуживания статики
RUN npm install -g serve

# Открываем порт, на котором будет работать фронтенд
EXPOSE 3000

# Запускаем сервер для обслуживания статики
CMD ["serve", "-s", "build", "-l", "3000"]

