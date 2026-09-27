import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-6 pb-4" id="hero">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-6">

<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-200/60 shadow-sm text-xs font-semibold tracking-wider uppercase text-brand-600">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            HELLO, I'M
          </div>

<div className="space-y-2">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Mohammed Abdulah
            </h1>
<p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-brand-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent tracking-tight">
              Computer Science Student &amp; Aspiring Software Developer
            </p>
</div>

<p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            I craft clean, high-performance software and scalable web platforms. Driven by algorithms, modern system architecture, and an obsession with intuitive digital user experiences.
          </p>

<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center gap-2.5 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3.5 rounded-full text-sm font-semibold shadow-pill hover:shadow-lg transition-all duration-200 group" href="#projects">
<span>View My Projects</span>
<svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
<path d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2.5 bg-white/90 hover:bg-white text-slate-800 border border-slate-200 px-6 py-3.5 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all duration-200" href="#contact">
<span>Download Resume</span>
<svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
<path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>

<div className="pt-6 border-t border-slate-200/60">
<p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Campus Affiliations &amp; Community</p>
<div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium text-xs sm:text-sm">
<span className="inline-flex items-center gap-1.5 hover:text-slate-700 transition">
<svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 8l-8-4 8-4 8 4-8 4zm0 4l-10-5v6l10 5 10-5v-6l-10 5z"></path></svg>
                ACM Chapter Leader
              </span>
<span className="inline-flex items-center gap-1.5 hover:text-slate-700 transition">
<svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path></svg>
                GitHub Campus Expert
              </span>
<span className="inline-flex items-center gap-1.5 hover:text-slate-700 transition">
<svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"></path></svg>
                GDSC Lead Developer
              </span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative flex justify-center">

<div className="relative w-full max-w-[370px] aspect-[4/5] rounded-[2.5rem] p-3.5 glass-panel shadow-glass-lg border border-white flex flex-col justify-end overflow-hidden">

<div className="absolute inset-2 rounded-[2rem] bg-gradient-to-b from-purple-100/70 via-indigo-50/50 to-brand-100/80 -z-10 overflow-hidden">
<div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-300/40 rounded-full blur-2xl"></div>
<div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-200/50 rounded-full blur-2xl"></div>
</div>

<div className="relative w-full h-full flex flex-col items-center justify-center pt-8">

<div className="relative flex flex-col items-center">

<div className="w-52 h-52 rounded-full bg-gradient-to-tr from-brand-300 to-sky-200 absolute blur-xl opacity-60"></div>

<div className="relative w-44 h-44 rounded-full bg-gradient-to-b from-slate-800 to-slate-950 p-1.5 shadow-2xl flex items-center justify-center">
<div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 flex flex-col items-center justify-center overflow-hidden border border-white/20">
<svg className="w-24 h-24 text-brand-300 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<div className="mt-4 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-brand-100 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
<span className="text-xs font-semibold text-slate-800">Junior at TopTech Univ</span>
</div>
</div>
</div>

<div className="absolute top-5 right-5 glass-chip px-3.5 py-2.5 rounded-2xl shadow-glass border border-white flex items-center gap-2.5 animate-bounce" >
<div className="w-8 h-8 rounded-xl bg-brand-500/10 text-brand-600 flex items-center justify-center font-bold text-sm">
                ★
              </div>
<div className="text-left">
<div className="text-xs font-extrabold text-slate-900">3.92 GPA</div>
<div className="text-[10px] text-slate-500 font-medium">Dean's Honor List</div>
</div>
</div>

<div className="glass-chip px-4 py-3 rounded-2xl shadow-glass border border-white flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">GitHub Activity</p>
<p className="text-xs font-bold text-slate-900">500+ Commits / 2024</p>
</div>
</div>

<svg className="w-16 h-7 text-brand-500" fill="none" viewBox="0 0 64 24">
<path d="M2 18 L14 12 L26 16 L38 6 L50 10 L62 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>

<div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/80 shadow-md flex items-center justify-center text-brand-500 text-xs font-black">
              ✦
            </div>
</div>
</div>
</div>
</section>
  );
}
