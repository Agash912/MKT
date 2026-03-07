import { motion } from 'framer-motion';
import { Bus, Shield, Clock, Headphones, Route, CalendarCheck } from 'lucide-react';

const items = [
  { icon: Bus, title: 'Daily Staff Transport', desc: 'Scheduled pickup and drop — every working day, every shift.' },
  { icon: Route, title: 'Custom Route Planning', desc: 'Routes designed around your workforce and shift timings.' },
  { icon: Shield, title: 'Safety First', desc: 'Inspected vehicles, verified drivers, GPS tracking, full compliance.' },
  { icon: Clock, title: 'Emergency Response', desc: 'Natural calamities, last-minute changes — we respond immediately.' },
  { icon: Headphones, title: '24×7 Operations', desc: 'Round the clock support for route changes or escalations.' },
  { icon: CalendarCheck, title: 'Flexible Contracts', desc: 'Monthly to annual. Scale up or adjust as your needs evolve.' },
];

export default function Services() {
  return (
    <section id="services" className="py-14 lg:py-20 bg-[#0f0f0f] border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-[#C9A800] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">What We Do</p>
          <h2 className="text-[1.65rem] sm:text-[1.9rem] font-extrabold leading-tight">
            End-to-End Transport <span className="text-[#C9A800]">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-lg overflow-hidden">
          {items.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.3, delay: i * 0.03 }}
                className="bg-[#0f0f0f] p-5 hover:bg-[#131313] transition-colors">
                <Icon size={16} className="text-[#C9A800] mb-2.5" strokeWidth={1.8} />
                <h3 className="text-white/85 text-[13px] font-semibold mb-1">{s.title}</h3>
                <p className="text-white/25 text-[11px] leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
