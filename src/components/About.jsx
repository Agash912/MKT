import { motion } from 'framer-motion';

const milestones = [
  { year: '1992', text: 'Founded by Mr. V. Uthayasuriyan as a single auto-rickshaw service in Sriperumbudur.' },
  { year: 'Late 90s', text: 'First corporate contract, a 12-seater for daily staff pickup at a rubber factory in SIPCOT.' },
  { year: '2005-15', text: 'Fleet expanded to multiple vehicle types as customer trust grew and Sriperumbudur industrialized rapidly.' },
  { year: '2015-Present', text: 'Under Ms. Ilavarasi Uthayasuriyan, operations were modernized and coverage expanded to six districts.' },
];

export default function About() {
  return (
    <section id="about" className="py-14 lg:py-20 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#C9A800] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">Our Story</p>
            <h2 className="text-[1.65rem] sm:text-[1.9rem] font-extrabold leading-tight mb-3">
              33 Years on the Road.<span className="text-[#C9A800]"> Still Driving.</span>
            </h2>
            <p className="text-white/30 text-[13px] leading-relaxed mb-3">
              What started as a one-man auto service is now a fleet operation covering 15,000+ KM
              every day. The values have not changed: hard work, showing up on time, and never letting a customer down.
            </p>
            <p className="text-white/30 text-[13px] leading-relaxed">
              Through industrial booms, economic shifts, and natural calamities, Mekala Transports
              has never missed a day. That consistency is why companies trust us with their people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="border border-white/[0.06] rounded-lg overflow-hidden"
          >
            {milestones.map((m, i) => (
              <div key={m.year} className={`flex gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors ${i < milestones.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>
                <span className="text-[#C9A800] text-[11px] font-bold tracking-wide whitespace-nowrap w-18 shrink-0 pt-0.5">{m.year}</span>
                <p className="text-white/40 text-[12px] leading-relaxed">{m.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
