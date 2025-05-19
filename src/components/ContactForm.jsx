/* ---------------- components/ContactForm.jsx ---------------- */
import React, { useRef, useState } from 'react';
import { Mail, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    setLoading(true);
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        formRef.current.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch(err => {
        alert(`Ошибка отправки: ${err.text || 'проверьте интернет'}`);
      })
      .finally(() => 
        setLoading(false),
        alert('Ваше сообщение успешно отправлено!'));
  };

  return (
    <>
      {/* Новый заголовок для всей секции */}
        {/* Левая часть — Форма */}
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-2xl p-8 md:mr-6">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Заголовок формы убран */}

            {/* Контейнер для Имя + Фамилия */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Имя */}
              <div className="grid gap-1">
                <label htmlFor="firstName" className="text-sm font-medium" required>
                  Имя
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  type="text"
                  placeholder="Иван"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* Фамилия */}
              <div className="grid gap-1">
                <label htmlFor="lastName" className="text-sm font-medium" required>
                  Фамилия
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  type="text"
                  placeholder="Иванов"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  
                />
              </div>
            </div>

            {/* Email — на всю ширину */}
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-medium" required>
                Ваш email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Сообщение */}
            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm font-medium" required>
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Ваше сообщение…"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Кнопка */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl"
            >
              {loading ? <Loader className="animate-spin" /> : <Mail />}
              {loading ? 'Отправляем...' : submitted ? 'Отправлено!' : 'Отправить'}
            </button>
          </form>
        </div>
    </>
  );
}