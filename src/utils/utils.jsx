
export const Info = [
  { email: 'knikiforov017@gmail.com' },
  { number: '8800553535' },
  { adres:  'Lorem' },
  { name: " sakura"},
{  desc :'Front-End разработчик, любитель чистого кода, по совместительству профессиональный дегустатор латте. Создаю быстро работающие интерфейсы и превращаю сухие таблицы в сочные графики.'}
];
export const skills = [
   { name: "HTML5 & CSS3", level: 80, years: 3, desc: "Pixel-perfect layouts, responsive design, BEM" },
    { name: "JavaScript (ES6+)", level: 60, years: 1, desc: "Modern JS, DOM manipulation, fetch API" },
    { name: "React & Hooks", level: 54, years: 1.5, desc: "Custom hooks, context, performance optimizations" },
    { name: "Recharts & D3.js", level: 35, years: 1, desc: "Интерактивные диаграммы и графики" },
    { name: "Tailwind CSS", level: 70, years: 2, desc: "Utility-first подход и кастомные конфиги" }
];
export const timeline = [
      {
      year: "2022",
      title: "МЦК-ЧЭМК",
      desc: "Получил специальность 'Разработчик Web и мультимедийных приложений.'"
    },
    {
      year: "2-ая половина 2022",
      title: "Первое место работы по профессии",
      desc: "В сентябре 2022 года, устроился 'Контент-менеджером' в hi-Tech studio. 🌟."
    },
    {
      year: "2-ая половина 2022",
      title: "Первый сертификат в 1C-Bitrix",
      desc: "На этом месте работы получил свой первый сертификат 'Контент-менеджер'."
    },
    {
      year: "2024",
      title: "Второе место работы",
      desc: "Приняли на позицию джун разработчика (по совместительству сис. админом)"
    }
];
 export const certificates = [
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

 export const education = [
    {
      institution: "МЦК-ЧЭМК",
      degree: "Бакалавр, Налоги и налогообложение",
      period: "2021–2025",
      details: "Исследовал налоговые стратегии. Автор 2 статей в студенческом журнале.",
      courses: ["Налоговое право", "Финансовый анализ", "Корпоративные финансы"]
    },
        {
      institution: "Университет Экономики",
      degree: "Бакалавр, Налоги и налогообложение",
      period: "2021–2025",
      details: "Исследовал налоговые стратегии. Автор 2 статей в студенческом журнале.",
      courses: ["Налоговое право", "Финансовый анализ", "Корпоративные финансы"]
    },
        {
      institution: "Университет Экономики",
      degree: "Бакалавр, Налоги и налогообложение",
      period: "2021–2025",
      details: "Исследовал налоговые стратегии. Автор 2 статей в студенческом журнале.",
      courses: ["Налоговое право", "Финансовый анализ", "Корпоративные финансы"]
    }
    
  ];

 export const chartData = [
  { name: 'Front-End', value: 55 },
  { name: 'Back-End', value: 10 },
  { name: 'Кофе ☕️', value: 35 }
];

export  const COLORS = ['#A3CEF1', '#C1E1C1', '#FFE5B4'];

export const categories = [
    { id: "all", label: "Все" },
    { id: "dashboard", label: "Дашборды" },
    { id: "landing", label: "Сайт-лендинги" },
    { id: "saas", label: "SaaS" },
    { id: "mobile", label: "Мобильные" }
  ];

export const projects = [
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
export const testimonials = [
  { name: 'Иван Иванов', text: 'Отличная работа, всё было сделано вовремя!' },
  { name: 'Мария Петрова', text: 'Профессионализм и креативность на высоте.' }
];  