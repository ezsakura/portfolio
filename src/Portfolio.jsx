// src/Portfolio.jsx
import React, { useState } from "react";
import AsideNav from "./components/AsideNav";
import SectionWrapper from "./components/SectionWrapper";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certs from "./sections/Certs";
import Contact from "./sections/Contact";

const pages = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  education: Education,
  certs: Certs,
  contact: Contact,
};

export default function Portfolio() {
  const [page, setPage] = useState("home");
  const ActivePage = pages[page] || (() => null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-blue-50 text-slate-800">
      <AsideNav current={page} onChange={setPage} />
      <main className="flex-1 m-4 p-10 bg-white rounded-3xl shadow-inner overflow-y-auto">
        <SectionWrapper>
          <ActivePage onContact={() => setPage("contact")} />
        </SectionWrapper>
      </main>
    </div>
  );
}