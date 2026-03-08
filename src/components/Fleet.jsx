import { motion } from 'framer-motion';

const fleet = [4, 12, 14, 15, 16, 20, 24, 32, 50];

export default function Fleet() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="fleet" className="py-14 lg:py-20 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#C9A800] text-[13px] font-semibold tracking-[0.25em] uppercase mb-3">Our Fleet</p>
            <h2 className="text-[1.8rem] sm:text-[2.1rem] font-extrabold leading-tight mb-3">
              Any size. <span className="text-[#C9A800]"> AC & Non-AC.</span>
            </h2>
            <p className="text-white/65 text-[15px] leading-relaxed mb-3">
              Every organization has different needs. We work with you to provide the fleet service
              that best fits your routes, schedules, and workforce movement.
            </p>
            <p className="text-white/65 text-[15px] leading-relaxed mb-4">
              All vehicles are GPS-tracked, regularly serviced, and driven by verified professionals.
            </p>
            <button onClick={() => go('#quote')}
              className="text-[#C9A800] text-[14px] font-semibold hover:underline underline-offset-4">
              Get a custom quote →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <div className="grid grid-cols-3 gap-px bg-white/[0.04] rounded-lg overflow-hidden">
              {fleet.map((s) => (
                <div key={s} className="bg-[#0a0a0a] hover:bg-[#111] transition-colors px-4 py-4 text-center">
                  <span className="text-2xl font-extrabold text-[#C9A800] leading-none">{s}</span>
                  <span className="text-white/55 text-[12px] font-medium block mt-1">
                    {s === 4 ? 'Seater Car' : 'Seater'}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-3 text-[12px] text-white/55">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full border border-[#C9A800]/40 bg-[#C9A800]/20" /> AC</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full border border-white/15 bg-white/5" /> Non-AC</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
