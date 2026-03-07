import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5' : ''
        }`}
      >
        <div className="max-w-[1100px] mx-auto flex items-center justify-between h-14 px-5">
          <a href="#home" onClick={(e) => { e.preventDefault(); go('#home'); }}>
            <img src="/assets/logo-mark.png" alt="MKT" className="h-11 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="text-white/40 text-[13px] font-medium hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919380000001" className="text-white/40 hover:text-white text-[13px] font-medium flex items-center gap-1.5 transition-colors">
              <Phone size={12} /> Call
            </a>
            <a href="#quote" onClick={(e) => { e.preventDefault(); go('#quote'); }}
              className="bg-[#C9A800] text-black text-[12px] font-semibold px-4 py-1.5 rounded hover:bg-[#d4b320] transition-colors">
              Get Quote
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/60">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-5 pt-14">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-5 text-white/60"><X size={20} /></button>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => { e.preventDefault(); go(l.href); }}
                className="text-white/70 text-lg font-medium hover:text-[#C9A800] transition-colors">{l.label}</a>
            ))}
            <a href="#quote" onClick={(e) => { e.preventDefault(); go('#quote'); }}
              className="mt-3 bg-[#C9A800] text-black px-6 py-2.5 rounded text-sm font-semibold">Get Quote</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
