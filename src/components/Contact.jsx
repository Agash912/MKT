import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-14 lg:py-20 border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#C9A800] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">Contact</p>
          <h2 className="text-[1.65rem] sm:text-[1.9rem] font-extrabold leading-tight mb-6">
            Always<span className="text-[#C9A800]"> Reachable.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - details */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="border border-white/[0.06] rounded-lg overflow-hidden">
              {[
                { icon: Phone, text: '+91 93800 00001  ·  +91 99423 33333', href: 'tel:+919380000001' },
                { icon: Mail, text: 'mekalatransports@gmail.com', href: 'mailto:mekalatransports@gmail.com' },
                { icon: Clock, text: 'Mon–Sat: 8AM–7PM  ·  Operations: 24×7' },
                { icon: MapPin, text: 'No. 1A, Bypass Road, Sriperumbudur, India – 602105'},
              ].map((c, i, arr) => {
                const Icon = c.icon;
                return (
                  <div key={i} className={`grid grid-cols-[14px,1fr] gap-3 px-4 py-3 hover:bg-white/[0.02] transition-colors ${i < arr.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>
                    <Icon size={13} className="text-[#C9A800] mt-0.5" />
                    <div className="leading-relaxed">
                      {c.href ? (
                        <a href={c.href} className="text-white/60 text-[12px] font-medium hover:text-[#C9A800] transition-colors">{c.text}</a>
                      ) : (
                        <p className="text-white/60 text-[12px] font-medium">{c.text}</p>
                      )}
                      {c.sub && <p className="text-white/25 text-[11px] mt-0.5">{c.sub}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - map */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <div className="rounded-lg overflow-hidden border border-white/[0.06] h-64">
              <iframe title="Location" src="https://maps.google.com/maps?q=Sriperumbudur,+Tamil+Nadu+602105&z=13&output=embed"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
