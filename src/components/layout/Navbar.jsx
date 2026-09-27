import React from 'react';

export default function Navbar() {
  return (
    <nav aria-label="Main Navigation" className="sticky top-5 z-50 px-4 max-w-6xl mx-auto">
<div className="glass-panel rounded-full px-4 py-2.5 shadow-glass flex items-center justify-between border border-white/80">

<a className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-full" href="#hero">
<div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-200">MA</div>
<div className="flex flex-col text-left">
<span className="font-bold text-slate-900 leading-tight text-sm tracking-tight group-hover:text-brand-600 transition-colors">Mohammed Abdulah</span>
<span className="text-[11px] text-slate-500 font-medium">CS Student &amp; Dev</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600">
<a className="px-3.5 py-1.5 rounded-full hover:text-slate-900 hover:bg-white/70 transition" href="#about">About</a>
<a className="px-3.5 py-1.5 rounded-full hover:text-slate-900 hover:bg-white/70 transition" href="#skills">Skills</a>
<a className="px-3.5 py-1.5 rounded-full hover:text-slate-900 hover:bg-white/70 transition" href="#projects">Projects</a>
<a className="px-3.5 py-1.5 rounded-full hover:text-slate-900 hover:bg-white/70 transition" href="#education">Education</a>
<a className="px-3.5 py-1.5 rounded-full hover:text-slate-900 hover:bg-white/70 transition" href="#experience">Experience</a>
<a className="px-3.5 py-1.5 rounded-full hover:text-slate-900 hover:bg-white/70 transition" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 group" href="#contact">
<span>Let's Connect</span>
<svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
<path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</div>
</nav>
  );
}
