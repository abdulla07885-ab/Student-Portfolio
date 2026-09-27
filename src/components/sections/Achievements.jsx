import React from 'react';

export default function Achievements() {
  return (
    <section className="space-y-6" id="achievements">
<div>
<p className="text-xs uppercase tracking-wider text-brand-600 font-bold mb-2">HONORS &amp; RECOGNITION</p>
<h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Milestones &amp; Certifications
        </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="glass-panel p-5 rounded-2xl shadow-glass border border-white hover:-translate-y-1 transition duration-200">
<div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold mb-3">
            🥇
          </div>
<h3 className="font-bold text-slate-900 text-sm">1st Place — HackState 2023</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Built an AI accessibility audio-reader for visually impaired students in 36 hours.</p>
</div>

<div className="glass-panel p-5 rounded-2xl shadow-glass border border-white hover:-translate-y-1 transition duration-200">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center font-bold mb-3">
            ☁️
          </div>
<h3 className="font-bold text-slate-900 text-sm">AWS Certified Cloud Practitioner</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Validated fundamental understanding of AWS architecture, security, and cloud economics.</p>
</div>

<div className="glass-panel p-5 rounded-2xl shadow-glass border border-white hover:-translate-y-1 transition duration-200">
<div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-3">
            📜
          </div>
<h3 className="font-bold text-slate-900 text-sm">President's Academic Honors</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Awarded to top 3% percentile students in the College of Engineering for sustained high GPA.</p>
</div>

<div className="glass-panel p-5 rounded-2xl shadow-glass border border-white hover:-translate-y-1 transition duration-200">
<div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-3">
            🌱
          </div>
<h3 className="font-bold text-slate-900 text-sm">Open Source Contributor</h3>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">Merged pull requests in widely used developer tooling repositories including docs and bug fixes.</p>
</div>
</div>
</section>
  );
}
