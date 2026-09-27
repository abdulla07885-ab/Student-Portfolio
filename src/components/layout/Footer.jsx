import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/40 backdrop-blur-md py-8 px-4 text-center text-xs text-slate-500">
<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 font-medium">
<span className="w-2 h-2 rounded-full bg-brand-500"></span>
<span>© 2025 Mohammed Abdulah. Built with Tailwind CSS &amp; Passion.</span>
</div>
<p className="text-slate-400">
        Designed with clarity, softness, and curiosity.
      </p>
</div>
</footer>
  );
}
