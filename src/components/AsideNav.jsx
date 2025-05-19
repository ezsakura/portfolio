/* ---------------- components/AsideNav.jsx ---------------- */
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, BadgeCheck, Code2, Mail, BookOpen, Activity } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Главная', icon: Home },
  { id: 'about', label: 'Обо мне', icon: User },
  { id: 'skills', label: 'Скиллы', icon: BadgeCheck },
  { id: 'projects', label: 'Проекты', icon: Code2 },
  { id: 'education', label: 'Образование', icon: BookOpen },
  { id: 'certs', label: 'Сертификаты', icon: BadgeCheck },
  { id: 'contact', label: 'Контакты', icon: Mail },
];

export default function AsideNav({ current, onChange }) {
  return (
    <aside className="z-50 flex justify-around overflow-auto flex-col w-full md:w-64 h-auto md:h-screen sticky top-0 p-4 m-0 md:m-4 bg-white rounded-none md:rounded-3xl shadow-inner">
      {/* Логотип для десктопа */}
      <div className="hidden md:flex items-center justify-center mb-6 w-full">
        <Activity size={28} className="text-blue-600" />
        <span className="ml-2 text-2xl font-bold text-slate-800">
          Abobus<span className="text-blue-400">Dev</span>
        </span>
      </div>

      <nav className="flex justify-center flex-row md:flex-col gap-2 overflow-x-auto w-full no-scrollbar">
        {navItems.map(({ id, label, icon: Icon }) => (
          <motion.button
            key={id}
            onClick={() => onChange(id)}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
              current === id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-blue-100 text-slate-800 hover:bg-blue-200'
            }`}
          >
            <Icon icon={Icon} size={20} />
            <span className="hidden md:inline">{label}</span>
          </motion.button>
        ))}
      </nav>
    </aside>
  );
}