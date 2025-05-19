import React from 'react';

export default function Testimonials({ testimonials }) {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-slate-800">Отзывы</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map(({ name, text }, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              alt={name}
              className="rounded-full w-16 h-16 object-cover"
            />
            <div>
              <p className="font-medium text-slate-800">{name}</p>
              <p className="text-slate-600 text-sm mt-1">“{text}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}