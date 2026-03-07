import { motion } from 'framer-motion';

const items = [
  { title: 'Safe & Responsible', desc: 'Every vehicle, every driver, every route is obsessively maintained.' },
  { title: 'Customer First', desc: 'Fully aligned to your unique schedules and operational needs.' },
  { title: 'In It Together', desc: 'Rain or shine, disruption or disaster, we do not stop. We show up.' },
  { title: 'Always Efficient', desc: 'Smarter routes, better processes, affordable and reliable service.' },
  { title: '24×7 Support', desc: 'Any day, any time. One call to our operations team.' },
  { title: '33+ Years of Trust', desc: 'Three decades of reputation earned on the road.' },
];

export default function Promise() {
  return (
    <section id="promise" className="py-14 lg:py-20 bg-[#0f0f0f] border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#C9A800] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">Our Promise</p>
            <h2 className="text-[1.65rem] sm:text-[1.9rem] font-extrabold leading-tight mb-3">
              What We Stand For.<span className="text-[#C9A800]"> Every Day.</span>
            </h2>
            <p className="text-white/30 text-[13px] leading-relaxed">
              These are not slogans. They are commitments we have kept through every challenge
              and milestone for over three decades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="grid grid-cols-2 gap-px bg-white/[0.04] rounded-lg overflow-hidden"
          >
            {items.map((p) => (
              <div key={p.title} className="bg-[#0f0f0f] p-4 hover:bg-[#131313] transition-colors">
                <h3 className="text-white/85 text-[13px] font-semibold mb-1">{p.title}</h3>
                <p className="text-white/25 text-[11px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
