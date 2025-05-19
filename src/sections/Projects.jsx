/* ---------------- sections/Projects.jsx ---------------- */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import { categories, projects, testimonials } from '../utils/utils';



export default function Projects({ onContact }) {
  const [filter, setFilter] = useState('all');
  const filtered = filter==='all'?projects:projects.filter(p=>p.category===filter);
  return (
    <>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Проекты</h2>
      <div className="overflow-auto no-scrollbar flex gap-3 mb-6">{categories.map(c=><button key={c.id} onClick={()=>setFilter(c.id)} className={`px-4 py-1 rounded-full ${filter===c.id?'bg-blue-600 text-white':'bg-white border'}`}>{c.label}</button>)}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{filtered.map(p=>(
        <motion.div key={p.id} whileHover={{y:-6}} className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
          <img src={p.img} alt={p.title} className="h-48 w-full object-cover"/>
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div><h3 className="font-semibold text-slate-800">{p.title}</h3><p className="text-sm text-slate-500 mt-2 mb-4">{p.desc}</p><span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">{p.tech}</span></div>
            <div className="mt-4 flex gap-2"><a href={p.demo} target="_blank" className="underline">Demo</a><a href={p.repo} target="_blank" className="underline">Code</a></div>
          </div>
        </motion.div>
      ))}</div>
      <CTA onContact={onContact} />
      <Testimonials testimonials={testimonials} />

    </>
  );
}