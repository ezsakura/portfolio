/* ---------------- components/CTA.jsx ---------------- */
import React from 'react';

export default function CTA({ onContact }) {
  return (
    <div className="text-center py-12 px-6 bg-slate-50 rounded-3xl shadow-inner">
      <h3 className="text-2xl font-semibold text-slate-800 mb-4">Готовы работать вместе?</h3>
      <p className="text-slate-600 mb-6 max-w-xl mx-auto">
        Свяжитесь со мной любым удобным способом или через форму ниже – обсудим детали за виртуальным кофе ☕️.
      </p>
      <button onClick={onContact} className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Связаться
      </button>
      
    </div>
  );
}