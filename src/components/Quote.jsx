import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail } from 'lucide-react';

const fleetOpts = ['4 Seater', '12 Seater', '14–16 Seater', '20–24 Seater', '32 Seater', '50 Seater', 'Multiple / Custom'];
const inp = 'w-full bg-white/[0.04] border border-white/[0.06] rounded px-3 py-2 text-white text-[12px] placeholder-white/15 focus:outline-none focus:border-[#C9A800]/40 transition-colors';
const lbl = 'text-white/30 text-[10px] font-semibold uppercase tracking-[0.1em] block mb-1';

export default function Quote() {
  const [f, setF] = useState({ name: '', company: '', phone: '', email: '', fleet: '', msg: '' });
  const [done, setDone] = useState(false);
  const upd = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subj = encodeURIComponent(`Transport Quote - ${f.company || f.name}`);
    const body = encodeURIComponent(
      `Name: ${f.name}\nCompany: ${f.company}\nPhone: ${f.phone}\nEmail: ${f.email}\nFleet: ${f.fleet}\n\n${f.msg}`
    );
    window.location.href = `mailto:mekalatransports@gmail.com?subject=${subj}&body=${body}`;
    setDone(true);
  };

  return (
    <section id="quote" className="py-14 lg:py-20 bg-[#0f0f0f] border-t border-white/[0.04]">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#C9A800] text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">Get a Quote</p>
            <h2 className="text-[1.65rem] sm:text-[1.9rem] font-extrabold leading-tight mb-3">
              Let's<span className="text-[#C9A800]"> Talk.</span>
            </h2>
            <p className="text-white/30 text-[13px] leading-relaxed mb-6">
              Share your requirements and we will respond within 24 hours with a tailored proposal.
            </p>

            <div className="flex flex-col gap-1.5 text-[12px]">
              <a href="tel:+919380000001" className="text-white/30 hover:text-[#C9A800] flex items-center gap-1.5 transition-colors"><Phone size={11} /> +91 93800 00001</a>
              <a href="tel:+919942333333" className="text-white/30 hover:text-[#C9A800] flex items-center gap-1.5 transition-colors"><Phone size={11} /> +91 99423 33333</a>
              <a href="mailto:mekalatransports@gmail.com" className="text-white/30 hover:text-[#C9A800] flex items-center gap-1.5 transition-colors"><Mail size={11} /> mekalatransports@gmail.com</a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            {done ? (
              <div className="border border-[#C9A800]/15 rounded-lg p-6 text-center">
                <CheckCircle size={24} className="text-[#C9A800] mx-auto mb-2" />
                <p className="text-white/80 text-sm font-semibold mb-1">Request Sent</p>
                <p className="text-white/30 text-[11px]">
                  Otherwise, mail <a href="mailto:mekalatransports@gmail.com" className="text-[#C9A800]">mekalatransports@gmail.com</a>
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="border border-white/[0.06] rounded-lg p-5 space-y-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <div><label className={lbl}>Name *</label><input type="text" name="name" required value={f.name} onChange={upd} placeholder="Full name" className={inp} /></div>
                  <div><label className={lbl}>Company *</label><input type="text" name="company" required value={f.company} onChange={upd} placeholder="Company" className={inp} /></div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div><label className={lbl}>Phone *</label><input type="tel" name="phone" required value={f.phone} onChange={upd} placeholder="+91 XXXXX XXXXX" className={inp} /></div>
                  <div><label className={lbl}>Email</label><input type="email" name="email" value={f.email} onChange={upd} placeholder="you@company.com" className={inp} /></div>
                </div>
                <div><label className={lbl}>Fleet</label><select name="fleet" value={f.fleet} onChange={upd} className={inp + ' appearance-none'}><option value="" className="bg-[#111]">Select</option>{fleetOpts.map(o=><option key={o} value={o} className="bg-[#111]">{o}</option>)}</select></div>
                <div><label className={lbl}>Additional Details</label><textarea name="msg" rows={2} value={f.msg} onChange={upd} placeholder="Number of employees, routes, AC preference..." className={inp + ' resize-none'} /></div>
                <button type="submit" className="w-full flex items-center justify-center gap-1.5 bg-[#C9A800] text-black font-semibold py-2.5 rounded text-[12px] hover:bg-[#d4b320] transition-colors">
                  Send Request <Send size={12} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
