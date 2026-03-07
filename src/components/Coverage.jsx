import { motion } from 'framer-motion';

const districts = ['Kanchipuram', 'Chennai', 'Thiruvallur', 'Ranipet', 'Vellore', 'Chengalpattu'];

export default function Coverage() {
  return (
    <section id="coverage" className="py-14 lg:py-20 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#C9A800] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">Coverage</p>
            <h2 className="text-[1.65rem] sm:text-[1.9rem] font-extrabold leading-tight mb-3">
              Six Districts Today.<span className="text-[#C9A800]"> More Tomorrow.</span>
            </h2>
            <p className="text-white/30 text-[13px] leading-relaxed mb-3">
              Our network covers the major industrial and IT corridors of Tamil Nadu — and we're
              actively expanding into new districts.
            </p>
            <p className="text-white/30 text-[13px] leading-relaxed">
              Operate outside our current coverage? Reach out — we're likely already planning to be there.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="border border-white/[0.06] rounded-lg overflow-hidden"
          >
            {districts.map((d, i) => (
              <div key={d} className={`flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors ${i < districts.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A800]" />
                  <span className="text-white/70 text-[13px] font-medium">{d}</span>
                </div>
                {d === 'Kanchipuram' && (
                  <span className="text-[9px] font-bold text-[#C9A800] tracking-[0.1em] uppercase bg-[#C9A800]/10 px-2 py-0.5 rounded">HQ</span>
                )}
              </div>
            ))}
            <div className="px-5 py-2.5 bg-white/[0.015] border-t border-white/[0.04]">
              <p className="text-white/15 text-[10px] italic">+ Expanding across Tamil Nadu</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
