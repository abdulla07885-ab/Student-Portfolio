import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
<div aria-hidden="true" className="fixed top-12 left-1/4 w-96 h-96 bg-purple-200/35 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div aria-hidden="true" className="fixed top-96 right-10 w-[30rem] h-[30rem] bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div aria-hidden="true" className="fixed bottom-20 left-10 w-[28rem] h-[28rem] bg-violet-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-12 pb-24 space-y-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
