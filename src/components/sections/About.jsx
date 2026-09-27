import React from 'react';

export default function About() {
  return (
    <section className="space-y-8" id="about">

<div>
<p className="text-xs uppercase tracking-wider text-brand-600 font-bold mb-2">ABOUT ME</p>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Building with Logic, Designing with Purpose
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl shadow-glass space-y-5 border border-white">
<p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            I am a third-year Computer Science student passionate about full-stack engineering, distributed systems, and modern developer tooling. I believe that elegant code and thoughtful UI design are not mutually exclusive—they reinforce each other to create transformative tools.
          </p>
<p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            When I am not optimizing SQL queries or refactoring React components, I am actively mentoring junior peers as an Undergraduate Teaching Assistant, competing in national hackathons, or contributing to open-source developer tooling.
          </p>
<div className="pt-4 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Fast Learner
            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Systems Thinker
            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Open-Source Enthusiast
            </span>
</div>
</div>

<div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">

<div className="glass-panel p-5 rounded-2xl shadow-glass flex items-center gap-4 hover:-translate-y-1 transition duration-200 border border-white">
<div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xl">
              💻
            </div>
<div>
<p className="text-2xl font-extrabold text-slate-900">12+</p>
<p className="text-xs text-slate-500 font-medium">Shipped Applications</p>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl shadow-glass flex items-center gap-4 hover:-translate-y-1 transition duration-200 border border-white">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xl">
              ⚡
            </div>
<div>
<p className="text-2xl font-extrabold text-slate-900">15+</p>
<p className="text-xs text-slate-500 font-medium">Core Tech &amp; Frameworks</p>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl shadow-glass flex items-center gap-4 hover:-translate-y-1 transition duration-200 border border-white">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl">
              🏆
            </div>
<div>
<p className="text-2xl font-extrabold text-slate-900">5+</p>
<p className="text-xs text-slate-500 font-medium">Hackathons &amp; Academic Honors</p>
</div>
</div>
</div>
</div>
</section>
  );
}
