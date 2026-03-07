import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / (duration * 1000), 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Hero() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center bg-[#0a0a0a]">
      <div className="relative z-10 max-w-[1100px] mx-auto w-full px-5 text-center py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C9A800] text-[11px] font-semibold tracking-[0.25em] uppercase mb-5"
        >
          Staff Transportation · Since 1992
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] tracking-tight mb-5"
        >
          Daily Commuter for Employees<br />
          <span className="text-[#C9A800]">Reliable. Safe. Consistent.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-white/35 text-[15px] leading-relaxed max-w-lg mx-auto mb-7"
        >
          <span className="text-white/70 font-semibold">Mekala Transports</span> operates daily staff transportation services for factories, IT parks, and
          corporations across six districts, with 33+ years of reliability built into every route.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-14"
        >
          <button onClick={() => go('#quote')}
            className="inline-flex items-center gap-1.5 bg-[#C9A800] text-black px-5 py-2.5 rounded text-[13px] font-semibold hover:bg-[#d4b320] transition-colors">
            Request a Quote <ArrowRight size={14} />
          </button>
          <button onClick={() => go('#about')}
            className="text-white/40 border border-white/10 px-5 py-2.5 rounded text-[13px] font-medium hover:text-white hover:border-white/20 transition-all">
            Our Story
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-8 sm:gap-10 border border-white/[0.06] rounded-lg px-7 py-4"
        >
          {[
            { v: 15000, s: '+', l: 'KM Daily' },
            { v: 3500, s: '+', l: 'Commuters' },
            { v: 33, s: '+', l: 'Years' },
            { v: 6, s: '', l: 'Districts' },
          ].map((s, i) => (
            <div key={s.l} className={`text-center ${i > 0 ? 'border-l border-white/[0.06] pl-8 sm:pl-10' : ''}`}>
              <div className="text-[#C9A800] text-xl sm:text-2xl font-bold tracking-tight leading-none">
                <CountUp end={s.v} suffix={s.s} />
              </div>
              <div className="text-white/25 text-[10px] font-medium mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
