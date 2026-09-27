import React from 'react';

export default function Education() {
  return (
    <section className="space-y-8" id="education">

<div>
<p className="text-xs uppercase tracking-wider text-brand-600 font-bold mb-2">BACKGROUND &amp; TIMELINE</p>
<h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Education &amp; Experience
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div className="glass-panel p-8 rounded-3xl shadow-glass border border-white space-y-6">
<div className="flex items-center gap-3 pb-3 border-b border-slate-100">
<div className="w-9 h-9 rounded-xl bg-brand-100/70 text-brand-600 flex items-center justify-center font-bold">
              🎓
            </div>
<div>
<h3 className="font-bold text-slate-900 text-lg">Academic Journey</h3>
<p className="text-xs text-slate-500">Degree &amp; Relevant Coursework</p>
</div>
</div>
<div className="space-y-5">
<div className="relative pl-6 border-l-2 border-brand-200 space-y-1">
<span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 border-white"></span>
<span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">2022 — 2026 (Expected)</span>
<h4 className="font-bold text-slate-900 text-base">Bachelor of Science in Computer Science</h4>
<p className="text-slate-600 text-sm font-medium">State University of Technology • Honors College</p>
<p className="text-slate-500 text-xs pt-1">
<span className="font-semibold text-slate-700">Cumulative GPA:</span> 3.92 / 4.00 (Dean's List for 4 Consecutive Semesters)
              </p>
</div>

<div className="pt-2">
<p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">Key Coursework Completed</p>
<div className="flex flex-wrap gap-2 text-xs">
<span className="px-3 py-1 bg-white/90 rounded-full border border-slate-200/70 text-slate-700">Data Structures &amp; Algorithms</span>
<span className="px-3 py-1 bg-white/90 rounded-full border border-slate-200/70 text-slate-700">Operating Systems</span>
<span className="px-3 py-1 bg-white/90 rounded-full border border-slate-200/70 text-slate-700">Database Systems</span>
<span className="px-3 py-1 bg-white/90 rounded-full border border-slate-200/70 text-slate-700">Computer Networks</span>
<span className="px-3 py-1 bg-white/90 rounded-full border border-slate-200/70 text-slate-700">Software Engineering Principles</span>
<span className="px-3 py-1 bg-white/90 rounded-full border border-slate-200/70 text-slate-700">Machine Learning Intro</span>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl shadow-glass border border-white space-y-6" id="experience">
<div className="flex items-center gap-3 pb-3 border-b border-slate-100">
<div className="w-9 h-9 rounded-xl bg-sky-100/70 text-sky-600 flex items-center justify-center font-bold">
              💼
            </div>
<div>
<h3 className="font-bold text-slate-900 text-lg">Where I've Gained Experience</h3>
<p className="text-xs text-slate-500">Internships &amp; Campus Leadership</p>
</div>
</div>
<div className="space-y-6">

<div className="relative pl-6 border-l-2 border-brand-200 space-y-1">
<span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-brand-500 border-2 border-white"></span>
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-brand-600">Summer 2024</span>
<span className="text-[11px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">Internship</span>
</div>
<h4 className="font-bold text-slate-900 text-sm sm:text-base">Software Engineering Intern</h4>
<p className="text-slate-600 text-xs sm:text-sm font-medium">CloudScale Solutions Inc.</p>
<p className="text-slate-500 text-xs leading-relaxed pt-1">
                Refactored microservice telemetry ingestion with FastAPI and Redis, cutting p99 data processing latency by 28%. Wrote automated unit and integration tests.
              </p>
</div>

<div className="relative pl-6 border-l-2 border-slate-200 space-y-1">
<span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></span>
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-slate-500">Jan 2024 — Present</span>
<span className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full">Academic</span>
</div>
<h4 className="font-bold text-slate-900 text-sm sm:text-base">Undergraduate Teaching Assistant</h4>
<p className="text-slate-600 text-xs sm:text-sm font-medium">Computer Science Dept. — CS201 (Data Structures)</p>
<p className="text-slate-500 text-xs leading-relaxed pt-1">
                Hold bi-weekly office hours for 85+ students, assist with Java debugging, and grade assignments covering binary trees, graphs, and dynamic programming.
              </p>
</div>
</div>
</div>
</div>
</section>
  );
}
