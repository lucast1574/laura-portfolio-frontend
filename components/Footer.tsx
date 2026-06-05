'use client';
import { ArrowUp } from 'lucide-react';
import type { Dict } from '@/lib/locale';

export default function Footer({ dict }: { dict: Dict }) {
  return (
    <footer className="relative z-10 px-5 sm:px-6 py-10 sm:py-12 border-t border-pink-200/5 mt-16 sm:mt-24 safe-x">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-rose-200/40">
        <div className="font-mono text-center sm:text-left">{dict.rights} · {new Date().getFullYear()}</div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-2 hover:text-pink-300 transition"
        >
          <ArrowUp size={14} /> {dict.backToTop}
        </button>
      </div>
    </footer>
  );
}
