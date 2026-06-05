'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { gql, LOGIN_MUTATION } from '@/lib/gql';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [u, setU] = useState('');
  const [p, setP] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      const r: any = await gql().request(LOGIN_MUTATION, { username: u, password: p });
      if (r?.login?.token) {
        document.cookie = `pf_token=${r.login.token}; path=/; max-age=${7 * 24 * 60 * 60}; samesite=lax`;
        router.push('/admin');
      } else {
        setErr('Invalid credentials');
      }
    } catch {
      setErr('Invalid credentials');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative z-10 min-h-[100svh] flex items-center justify-center px-5 sm:px-6 safe-x">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={submit}
        className="relative w-full max-w-sm glass rounded-2xl p-6 sm:p-8 space-y-5"
      >
        <div className="flex items-center justify-center mb-2">
          <div className="p-3 rounded-full bg-pink-500/20 text-pink-200 animate-glow-pulse">
            <Sparkles size={24} />
          </div>
        </div>
        <h1 className="text-center text-lg sm:text-xl font-bold text-gradient font-display">Control Panel</h1>

        <div>
          <label htmlFor="u" className="text-xs font-mono text-rose-200/60 tracking-widest">USER</label>
          <input
            id="u"
            value={u}
            onChange={(e) => setU(e.target.value)}
            className="mt-1 w-full bg-black/30 border border-pink-200/10 rounded-lg px-3 py-2.5 outline-none focus:border-pink-400 text-base"
            autoFocus
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
          />
        </div>
        <div>
          <label htmlFor="p" className="text-xs font-mono text-rose-200/60 tracking-widest">PASSWORD</label>
          <input
            id="p"
            type="password"
            value={p}
            onChange={(e) => setP(e.target.value)}
            className="mt-1 w-full bg-black/30 border border-pink-200/10 rounded-lg px-3 py-2.5 outline-none focus:border-pink-400 text-base"
            autoComplete="current-password"
          />
        </div>
        {err && <div className="text-sm text-rose-400" role="alert">{err}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-pink-500 hover:bg-pink-400 active:bg-pink-600 transition font-semibold text-pink-950 disabled:opacity-50 text-base"
        >
          {loading ? 'Loading…' : 'ENTER ✨'}
        </button>
      </motion.form>
    </main>
  );
}
