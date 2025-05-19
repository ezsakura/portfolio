import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, BadgeCheck, Code2, Mail, BookOpen, Loader } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";
import emailjs from '@emailjs/browser';



export default function Portfolio() {
  const [page, setPage] = useState("home");
  const [projectFilter, setProjectFilter] = useState("all");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const bgClasses = {
  blue: "bg-blue-50",
  emerald: "bg-emerald-50",
  amber: "bg-amber-50",
};

   const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,      // передаём форму целиком
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Success:', result.text);
          formRef.current.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((error) => {
      console.error('Error:', error.text);
        const userMsg = error.text
          ? `Не удалось отправить сообщение: ${error.text}`
          : 'Не удалось отправить сообщение. Пожалуйста, проверьте соединение с интернетом и попробуйте ещё раз.';
        alert(userMsg);
        
      })
      .finally(() => {
        const successMsg = 'Ваше сообщение успешно отправлено!';
        setLoading(false);
        alert(successMsg);
      });
      
  };


  /* -------------------------- Навигация --------------------------- */
  const nav = [
    { id: "home", label: "Главная", icon: Home },
    { id: "about", label: "Обо мне", icon: User },
    { id: "skills", label: "Скиллы", icon: BadgeCheck },
    { id: "projects", label: "Проекты", icon: Code2 },
    { id: "education", label: "Образование", icon: BookOpen },
    { id: "certs", label: "Сертификаты", icon: BadgeCheck },
    { id: "contact", label: "Контакты", icon: Mail }
  ];

  /* -------------------------- Данные ------------------------------ */
  const chartData = [
    { name: "Front-End", value: 55 },
    { name: "Экономика", value: 25 },
    { name: "Кофе ☕️", value: 20 }
  ];
  const COLORS = ["#A3CEF1", "#C1E1C1", "#FFE5B4"];

  const services = [
    {
      title: "UI/UX Дизайн",
      desc:
        "Проектирование интуитивных и привлекательных интерфейсов, чтобы ваши пользователи не запутались.",
      bg: "bg-indigo-50"
    },
    {
      title: "Дашборды & Визуализация",
      desc: "Красивые, информативные отчёты и интерактивные диаграммы для ваших данных.",
      bg: "bg-pink-50"
    },
    {
      title: "Оптимизация производительности",
      desc: "Лёгкие, быстрые приложения без лишнего балласта и задержек.",
      bg: "bg-teal-50"
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Первая стажировка",
      desc: "Погрузился в корпоративный фронтенд, освободился от страха перед чужим кодом и Jira."
    },
    {
      year: "2023",
      title: "Победа на хакатоне",
      desc: "Наш стартап-бот для налоговых вычетов взял 1 место из 72 команд. Не без моей анимации загрузки 🌟."
    },
    {
      year: "2024",
      title: "Запуск SaaS-сервиса",
      desc: "Сolo-dev: React + Firebase + Stripe. 500+ активных пользователей спустя две недели."
    }
  ];

  const skills = [
    { name: "HTML5 & CSS3", level: 90, years: 3, desc: "Pixel-perfect layouts, responsive design, BEM/SMACSS" },
    { name: "JavaScript (ES6+)", level: 85, years: 3, desc: "Modern JS, DOM manipulation, fetch API" },
    { name: "React & Hooks", level: 82, years: 2, desc: "Custom hooks, context, performance optimizations" },
    { name: "TypeScript", level: 70, years: 1.5, desc: "Типизация, generics, интеграция в React" },
    { name: "Recharts & D3.js", level: 65, years: 1, desc: "Интерактивные диаграммы и графики" },
    { name: "Tailwind CSS", level: 80, years: 2, desc: "Utility-first подход и кастомные конфиги" }
  ];

  const projects = [
    {
      id: 1,
      title: "FinDash – финанс. дашборд",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=60",
      category: "dashboard",
      tech: "React, Recharts, Zustand",
      desc: "Интерактивная визуализация финансовых KPI для SMB-клиентов.",
      demo: "https://findash.example.com",
      repo: "https://github.com/abobus/findash"
    },
    {
      id: 2,
      title: "Barista-Landing",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=60",
      category: "landing",
      tech: "Next.js, Tailwind, Framer Motion",
      desc: "Сайт-визитка для кофейни с плавной анимацией и магазином мерча.",
      demo: "https://barista.example.com",
      repo: "https://github.com/abobus/barista-landing"
    },
    {
      id: 3,
      title: "TaxWise AI Bot",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=60",
      category: "saas",
      tech: "React, OpenAI, Supabase",
      desc: "Помощник ответит на вопросы о налогах в реальном времени.",
      demo: "https://taxwise.example.com",
      repo: "https://github.com/abobus/taxwise-bot"
    },
    {
      id: 4,
      title: "EcoMobile – трекер отходов",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=60",
      category: "mobile",
      tech: "React Native, Expo",
      desc: "Геймификация сортировки мусора с ежедневными челленджами.",
      demo: "https://expo.dev/@abobus/ecomobile",
      repo: "https://github.com/abobus/ecomobile"
    }
  ];

  const categories = [
    { id: "all", label: "Все" },
    { id: "dashboard", label: "Дашборды" },
    { id: "landing", label: "Сайт-лендинги" },
    { id: "saas", label: "SaaS" },
    { id: "mobile", label: "Мобильные" }
  ];

  const education = [
    {
      institution: "Университет Экономики",
      degree: "Бакалавр, Налоги и налогообложение",
      period: "2021–2025",
      details: "Исследовал налоговые стратегии. Автор 2 статей в студенческом журнале.",
      courses: ["Налоговое право", "Финансовый анализ", "Корпоративные финансы"]
    }
  ];

  const certificates = [
    {
      title: "Certified Front-End Developer",
      issuer: "FreeCodeCamp",
      year: "2024",
      link: "https://freecodecamp.org/certification/abobus/frontend"
    },
    {
      title: "React Professional",
      issuer: "Meta",
      year: "2023",
      link: "https://learningportal.meta.com/abobus/react"
    }
  ];

  const testimonials = [
    {
      name: "Иван Иванов",
      text: "Отличная работа, всё было сделано вовремя!"
    },
    {
      name: "Мария Петрова",
      text: "Профессионализм и креативность на высоте."
    }
  ];

  /* -------------------------- Контент страниц --------------------- */
  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <div className="space-y-16">
            {/* Hero */}
            <section className=" text-center p-12 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 via-teal-50 to-yellow-50 shadow-inner">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-extrabold leading-tight text-slate-800"
              >
                Привет! Я Константин Никифоров <span className="inline-block origin-[70%_70%] animate-wiggle">👋</span>
              </motion.h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
                Front-End разработчик, любитель чистого кода, по совместительству
                профессиональный дегустатор латте. Создаю быстро работающие интерфейсы и превращаю сухие
                таблицы в сочные графики.
              </p>
            </section>

            {/* Статистика + диаграмма */}
            <section className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard title="Опыт" number="3+ года" note="в веб-разработке" color="blue" />
                <StatCard title="Проекты" number="15+" note="от лендингов до SaaS" color="emerald" />
                <StatCard title="Чашек кофе" number="~1000" note="и ни одной пролито ☕️" color="amber" />
              </div>
              <div className="w-full h-72 lg:h-80">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      paddingAngle={3}
                      label
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>
        );
      case "about":
        return (
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Обо мне</h2>
              <p className="text-slate-600 max-w-3xl">
                Я увлечён технологиями и финансами: днём оптимизирую React-приложения, вечером разбираюсь в налоговых льготах
                и сложных отчётностях. Люблю качественный дизайн, читаю MDN вместо романов и считаю, что хороший интерфейс
                экономит пользователю время так же, как грамотная налоговая стратегия экономит деньги.
              </p>
            </section>

            {/* Timeline */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Путь развития</h3>
              <div className="relative ml-4 border-l-2 border-slate-200 pl-6 space-y-10">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[17px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                    <h4 className="text-lg font-medium text-slate-800">{item.year} — {item.title}</h4>
                    <p className="text-slate-600 text-sm mt-1 max-w-xl">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Services */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Чем могу помочь</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className={`${service.bg} p-6 rounded-2xl shadow-inner`}
                  >
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        );

      case "skills":
        return (
          <div className="space-y-8 px-4 lg:px-0 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800">Скиллы</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
                >
                  <h4 className="text-lg font-medium text-slate-800 mb-2">{skill.name}</h4>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-2 rounded-full bg-blue-600"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    {skill.level}% уверенности
                  </p>
                  <p className="text-sm text-slate-600 mt-1">Опыт: {skill.years} лет</p>
                  <p className="text-sm text-slate-600 mt-1 italic">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

     case "projects": {
  const filtered = projectFilter === "all"
    ? projects
    : projects.filter(p => p.category === projectFilter);
        return (
          <div className="space-y-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800">Проекты</h2>
            <div className="flex gap-3 flex-wrap">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setProjectFilter(c.id)}
                  className={`px-4 py-1.5 rounded-full border text-sm transition ${projectFilter === c.id
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white hover:bg-blue-50 border-slate-300"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(p => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-2xl shadow-lg bg-white flex flex-col"
                >
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-800">{p.title}</h3>
                      <p className="text-sm text-slate-500 mt-2 mb-4">{p.desc}</p>
                      <span className="inline-block text-xs px-2 py-0.5 bg-slate-100 rounded-full text-slate-600">
                        {p.tech}
                      </span>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">
                        Live Demo ↗
                      </a>
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium underline">
                        Source Code ↗
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>



            {/* Testimonials */}
            <section className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800">Отзывы</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {testimonials.map((t, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow flex gap-4"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                      alt={t.name}
                      className="rounded-full w-16 h-16 object-cover"
                    />
                    <div>
                      <p className="font-medium text-slate-800">{t.name}</p>
                      <p className="text-slate-600 text-sm mt-1">“{t.text}”</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <CTA />
          </div>
        );
     }

 case "education":
        return (
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800">Образование</h2>
            {education.map((edu, idx) => (
              <motion.div key={idx} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-semibold text-slate-800">{edu.degree}, {edu.institution}</h3>
                <span className="text-sm text-slate-500">{edu.period}</span>
                <p className="mt-2 text-slate-600">{edu.details}</p>
                <div className="mt-2">
                  <h4 className="font-medium text-slate-800">Ключевые курсы:</h4>
                  <ul className="list-disc list-inside text-slate-600">
                    {edu.courses.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "certs":
        return (
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800">Сертификаты</h2>
            {certificates.map((cert, idx) => (
              <motion.div key={idx} className="bg-pink-50 p-6 rounded-2xl shadow">
                <h4 className="text-lg font-medium text-slate-800">{cert.title}</h4>
                <p className="text-sm text-slate-500">{cert.issuer}, {cert.year}</p>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm underline">
                  Смотреть сертификат ↗
                </a>
              </motion.div>
            ))}
          </div>
        );

      case "contact":
        return (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6 transition-colors duration-300"
          >
            <h1 className="text-2xl font-semibold text-black">
              Оставьте заявку на обратную связь!
            </h1>

            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm font-medium">
                Имя
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                placeholder="Иван Иванов"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="message" className="text-sm font-medium">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Ваше сообщение…"
                className="rounded-xl border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

             <button
        type="submit"
        disabled={loading}
        className={`
          w-full flex items-center justify-center gap-2 rounded-xl py-3 text-base font-medium
          bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white
          transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300
          ${loading ? 'opacity-70 cursor-not-allowed' : ''}
        `}
      >
        {loading
          ? <Loader className="h-5 w-5 animate-spin" />
          : <Mail className="h-5 w-5" />
        }
        {loading
          ? 'Отправляем...'
          : submitted
            ? 'Отправлено!'
            : 'Отправить'
        }
      </button>
          </form>

        );
      default:
        return null;
    }
  };

  /* -------------------------- Компоненты ------------------------- */
  const CTA = () => (
    <div className="text-center py-12 px-6 bg-slate-50 rounded-3xl shadow-inner">
      <h3 className="text-2xl font-semibold text-slate-800 mb-4">Готовы работать вместе?</h3>
      <p className="text-slate-600 mb-6 max-w-xl mx-auto">
        Свяжитесь со мной любой удобный способ или через форму ниже – обсудим детали за виртуальным кофе ☕️.
      </p>
      <button
        onClick={() => setPage("contact")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Связаться
      </button>
    </div>
  );

  const StatCard = ({ title, number, note, color }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className={`${bgClasses[color]} p-6 rounded-2xl shadow-inner`}
    >
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className={`text-3xl font-bold text-${color}-600`}>{number}</p>
      <p className="mt-2 text-sm text-slate-500">{note}</p>
    </motion.div>
  );
  /* -------------------------- ASIDE ----------------------------- */
  return (
     <div className="min-h-screen flex flex-col md:flex-row bg-blue-50 text-slate-800">
      <aside className=" overflow-auto flex-col w-full md:w-64 h-auto md:h-screen sticky top-0 p-4 m-0 md:m-4 bg-white rounded-none md:rounded-3xl shadow-inner">
        <nav className="flex flex-row md:flex-col gap-2 md:gap-2 mt-4 md:mt-6 justify-around md:justify-start">
          {nav.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => setPage(id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${page === id ? 'bg-blue-600 text-white shadow-md' : 'bg-blue-100 text-slate-800 hover:bg-blue-200'}`}
            >
              <Icon size={20} icon={Icon} /> {label}
            </motion.button>
          ))}
        </nav>
      </aside>
      {/* Контент */}
      <main className="flex-1 m-0 md:m-4 p-4 md:p-10 bg-white rounded-none md:rounded-3xl shadow-inner overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

/* -------------------------- Анимации CSS ------------------------- */
// Вынес короткую кастомную анимацию "wiggle" в CSS (Tailwind config):
// @keyframes wiggle { 0%, 100% { transform: rotate(-10deg); } 50% { transform: rotate(10deg); } }
// .animate-wiggle { animation: wiggle 1.2s ease-in-out infinite; }