import React from 'react';
import ReactDOM from 'react-dom/client'; // Новый импорт для React 18 и выше
import App from './App'; // Импортируем главный компонент приложения
import './styles/styles.css'; // Подключаем стили

// Используем новый метод для создания корня в React 18+
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Отображаем компонент App в корне
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
