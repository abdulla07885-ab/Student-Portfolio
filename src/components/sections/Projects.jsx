import React from 'react';

export default function Projects() {
  return (
    <section className="space-y-8" id="projects">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-wider text-brand-600 font-bold mb-2">FEATURED PROJECTS</p>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Things I've Built
          </h2>
</div>
<a className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 glass-chip px-4 py-2 rounded-full shadow-sm hover:shadow transition" href="https://github.com" rel="noopener noreferrer" target="_blank">
<span>View All on GitHub</span>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-3xl p-5 shadow-glass border border-white flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
<div>

<div className="w-full aspect-[16/10] rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-purple-900 p-4 relative overflow-hidden flex flex-col justify-between shadow-inner">
<div className="flex items-center justify-between text-[11px] text-white/70 font-mono">
<span className="inline-flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span> sorting_visualizer.tsx
                </span>
<span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">O(N log N)</span>
</div>

<div className="flex items-end justify-between gap-1.5 h-20 px-2 pt-4">
<div className="w-full bg-brand-400/80 rounded-t h-[35%]"></div>
<div className="w-full bg-brand-300 rounded-t h-[65%]"></div>
<div className="w-full bg-sky-300 rounded-t h-[90%]"></div>
<div className="w-full bg-brand-500 rounded-t h-[45%]"></div>
<div className="w-full bg-emerald-400 rounded-t h-[100%]"></div>
<div className="w-full bg-indigo-300 rounded-t h-[75%]"></div>
<div className="w-full bg-brand-300 rounded-t h-[55%]"></div>
</div>
<div className="text-[10px] text-white/50 text-right font-mono">60 FPS Simulation</div>
</div>

<div className="mt-5 space-y-2">
<div className="flex items-center justify-between">
<h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">Algoverse</h3>
<span className="text-xs text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded-full">Interactive App</span>
</div>
<p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                An interactive algorithm and data structure visualization playground with step-by-step memory frame execution and time complexity benchmarks.
              </p>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex flex-wrap gap-1.5">
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">React</span>
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">TypeScript</span>
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Canvas API</span>
</div>
<div className="flex items-center gap-2">
<a className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-white transition" href="#projects" title="View Source">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="p-2 rounded-full text-slate-500 hover:text-brand-600 hover:bg-white transition" href="#projects" title="Launch Demo">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-5 shadow-glass border border-white flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
<div>

<div className="w-full aspect-[16/10] rounded-2xl bg-gradient-to-tr from-slate-900 via-sky-950 to-indigo-900 p-4 relative overflow-hidden flex flex-col justify-between shadow-inner">
<div className="flex items-center justify-between text-[11px] text-white/70">
<span className="inline-flex items-center gap-1.5 font-mono">
<span className="w-2 h-2 rounded-full bg-sky-400"></span> ws://pulsedesk/sync
                </span>
<span className="bg-sky-500/20 text-sky-200 text-[10px] px-2 py-0.5 rounded font-mono">&lt; 15ms Latency</span>
</div>

<div className="relative h-20 w-full flex items-center justify-center">
<div className="absolute left-6 top-2 glass-chip px-2 py-1 rounded-md text-[10px] text-slate-800 shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Mohammed A.
                </div>
<div className="absolute right-8 bottom-3 glass-chip px-2 py-1 rounded-md text-[10px] text-slate-800 shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Sarah K.
                </div>
<div className="w-3/4 h-8 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm flex items-center px-3 text-[11px] text-white/80 font-mono">
                  Markdown block synchronized
                </div>
</div>
<div className="text-[10px] text-white/50 text-right font-mono">Redis Pub/Sub Connected</div>
</div>

<div className="mt-5 space-y-2">
<div className="flex items-center justify-between">
<h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">PulseDesk</h3>
<span className="text-xs text-sky-600 font-semibold bg-sky-50 px-2 py-0.5 rounded-full">Realtime Web</span>
</div>
<p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Lightweight collaborative note-taking and canvas workspace supporting multiplayer editing with WebSockets and CRDT consistency resolution.
              </p>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex flex-wrap gap-1.5">
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Next.js</span>
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Redis</span>
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Socket.io</span>
</div>
<div className="flex items-center gap-2">
<a className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-white transition" href="#projects" title="View Source">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="p-2 rounded-full text-slate-500 hover:text-brand-600 hover:bg-white transition" href="#projects" title="Launch Demo">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-5 shadow-glass border border-white flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
<div>

<div className="w-full aspect-[16/10] rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-900 to-emerald-950 p-4 relative overflow-hidden flex flex-col justify-between shadow-inner">
<div className="flex items-center justify-between text-[11px] text-white/70 font-mono">
<span className="inline-flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-purple-400"></span> docker-compose.prod
                </span>
<span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded">Healthy (99.8%)</span>
</div>

<div className="grid grid-cols-2 gap-2 my-auto">
<div className="bg-white/10 p-2 rounded-lg border border-white/10 text-center">
<p className="text-[9px] text-slate-300 uppercase">Avg API Latency</p>
<p className="text-sm font-bold text-white font-mono">42ms</p>
</div>
<div className="bg-white/10 p-2 rounded-lg border border-white/10 text-center">
<p className="text-[9px] text-slate-300 uppercase">Container Mem</p>
<p className="text-sm font-bold text-emerald-300 font-mono">214 MB</p>
</div>
</div>
<div className="text-[10px] text-white/50 text-right font-mono">FastAPI + Prometheus</div>
</div>

<div className="mt-5 space-y-2">
<div className="flex items-center justify-between">
<h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">DevMetrics</h3>
<span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">DevOps &amp; Cloud</span>
</div>
<p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Server telemetry and continuous integration analytics engine aggregating Git commits, container health, and endpoint performance metrics.
              </p>
</div>
</div>

<div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
<div className="flex flex-wrap gap-1.5">
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">FastAPI</span>
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">Docker</span>
<span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">PostgreSQL</span>
</div>
<div className="flex items-center gap-2">
<a className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-white transition" href="#projects" title="View Source">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="p-2 rounded-full text-slate-500 hover:text-brand-600 hover:bg-white transition" href="#projects" title="Launch Demo">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>
  );
}
