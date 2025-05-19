# 💼 Personal Portfolio Website

Welcome to my personal portfolio website!
This project is built using modern frontend development tools, showcasing my skills, projects, and providing an easy way to get in touch.

## ⚙️ Tech Stack

* ⚡ **Vite + React** — lightning-fast builds and a modern approach to SPAs
* 📩 **EmailJS** — send emails directly from the site
* 🌀 **framer-motion** — smooth animations and interactivity
* 💡 **lucide-react** — stylish, flexible SVG icons
* 📊 **recharts** — clear charts and data visualizations

## 🚀 Quick Start

1. Clone the repository:

   ```bash
   git clone https://github.com/sakura/portfolio.git
   cd portfolio
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run dev
   ```
4. Open in your browser:

   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```bash
src/
├── assets/            # Images and media (folder not created yet)
├── components/        # Reusable components
├── sections/          # Main page sections
├── utils/             # Helper functions
├── Portfolio.jsx      # Main component
├── index.css          # Main CSS file (includes Tailwind CSS)
├── main.jsx           # Entry point
```

Want to change the contents of the arrays? Edit `utils.jsx` in the `utils` folder!

## 📬 EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and a template
3. Add the following variables to your `.env` file:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

> ⚠️ Don’t forget to add `.env` to `.gitignore`!

## ✨ Features

* 📱 Fully responsive design
* ✉️ Send feedback messages via email
* 📈 Statistics and charts with Recharts
* 💫 Animated transitions and effects

## 📞 Contacts

If you’d like to get in touch, write to:

**📧 [knikiforov017@gmail.com](mailto:knikiforov017@gmail.com)**

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ and React.

---

# 💼 Личный Портфолио Сайт

Добро пожаловать в мой персональный сайт-портфолио!  
Этот проект реализован с использованием современных инструментов фронтенд-разработки, демонстрируя мои навыки, проекты и обеспечивая простой способ связи.

## ⚙️ Стек технологий

- ⚡ **Vite + React** — молниеносная сборка и современный подход к SPA
- 📩 **EmailJS** — отправка email-сообщений прямо с сайта
- 🌀 **framer-motion** — плавные анимации и интерактивность
- 💡 **lucide-react** — стильные и гибкие SVG-иконки
- 📊 **recharts** — наглядные графики и визуализация данных

## 🚀 Быстрый старт

1. Клонируй репозиторий:

```bash
git clone https://github.com/sakura/portfolio.git
cd portfolio
```

2. Установи зависимости:

```bash
npm install
```

3. Запусти локальный сервер:

```bash
npm run dev
```

4. Открой в браузере:

```
http://localhost:5173
```

## 📁 Структура проекта

```bash
src/
├── assets/            # Изображения и медиа (папки пока не существует)
├── components/        # Переиспользуемые компоненты
├── sections/          # Основные секции страницы
├── utils/             # Вспомогательные функции
├── Portfolio.jsx      # Главный компонент
├── index.css          # Главный CSS файл (подключен Tailwind CSS)
├── main.jsx           # Точка входа
```

Желаете поменять содержимое массивов? Отредактируйте utils.jsx в папке utils!


## 📬 EmailJS настройка

1. Зарегистрируйся на [EmailJS](https://www.emailjs.com/)
2. Создай email-сервис и шаблон
3. Добавь следующие переменные в `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

> ⚠️ Не забудь добавить `.env` в `.gitignore`!

## ✨ Особенности

- 📱 Полностью адаптивный дизайн
- ✉️ Обратная связь с отправкой сообщений на email
- 📈 Статистика и диаграммы с Recharts
- 💫 Анимированные переходы и эффекты

## 📞 Контакты

Если вы хотите связаться со мной, пишите на:

**📧 knikiforov017@gmail.com**

## 📄 Лицензия

Проект распространяется под лицензией [MIT](LICENSE).

---

Сделано с ❤️ и React.



