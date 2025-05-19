/* ---------------- sections/Skills.jsx ---------------- */
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../utils/utils';


export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-bold">Скиллы</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{skills.map((s, i) => (
        <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
          <h4 className="text-lg font-medium text-slate-800 mb-2">{s.name}</h4>
          <div className="w-full bg-slate-100 rounded-full h-2"><div style={{width:`${s.level}%`}} className="h-2 rounded-full bg-blue-600"/></div>
          <p className="text-xs text-slate-500 mt-2">{s.level}% уверенности</p>
          <p className="text-sm text-slate-600 mt-1">Опыт: {s.years} лет</p>
          <p className="text-sm italic mt-1 text-slate-600">{s.desc}</p>
        </motion.div>
      ))}</div>
    </div>
  );
}