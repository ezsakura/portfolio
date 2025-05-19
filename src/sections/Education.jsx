/* ---------------- sections/Education.jsx ---------------- */
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../utils/utils';


                  export default function Education() {
                    return (
                      <div className="space-y-8">
                  <section>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-8">Образование</h3>
                    <div className="relative ml-4 border-l-2 border-slate-200 pl-6 space-y-10">
                      {education.map((e, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="relative"
                        >
                          <span className="absolute -left-[17px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600"></span>
                          <h4 className="text-lg font-medium text-slate-800">{e.period} — {e.institution}</h4>
                          <p className="text-slate-600 text-sm mt-1 max-w-xl">{e.degree}</p>
                          <ul className="list-disc list-inside text-slate-600 mt-2">{e.courses.map((c,j)=><li key={j}>{c}</li>)}</ul>
                          <p className="text-slate-600 text-sm mt-1 max-w-xl">{e.details}</p>
                        </motion.div>
                      ))}
                    </div>
                  </section>
            </div>
  );
}
