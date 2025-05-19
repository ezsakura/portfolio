/* ---------------- sections/Certs.jsx ---------------- */
import React from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../utils/utils';




export default function Certs() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Сертификаты</h2>
      {certificates.map((c,i)=>(
        <motion.div key={i} className="bg-pink-50 p-6 rounded-2xl shadow">
          <h4 className="text-lg font-medium text-slate-800">{c.title}</h4>
          <p className="text-sm text-slate-500">{c.issuer}, {c.year}</p>
          <a href={c.link} target="_blank" className="underline mt-2 inline-block">Смотреть сертификат ↗</a>
        </motion.div>
      ))}
    </div>
  );
}