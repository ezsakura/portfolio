/* ---------------- sections/Skills.jsx ---------------- */
import React from 'react';
import ContactForm from '../components/ContactForm'
import InfoBLock from '../components/InfoBLock';
export default function Skills() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold ">Контакты</h1>
      </div>
      <div className="max-w-4xl w-full mx-auto space-y-6 md:space-y-0 md:flex md:items-start md:items-center">
      <ContactForm/>
      <InfoBLock/>
      </div>
    </>
  );
}