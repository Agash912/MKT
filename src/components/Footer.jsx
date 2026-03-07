import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const go = (h) => document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/[0.06] bg-[#060606]">
      <div className="max-w-[1100px] mx-auto px-5 py-10">
        <div className="grid grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <img src="/assets/logo-mark.png" alt="MKT" className="h-12 w-auto mb-3" />
            <p className="text-white/30 text-[13px] leading-relaxed mb-4">
              Tamil Nadu's trusted staff transportation partner since 1992.
              Operating across six districts with 15,000+ KM daily coverage.
            </p>
            <div className="flex flex-col gap-1.5">
              <a href="tel:+919380000001" className="text-white/40 hover:text-[#C9A800] text-[13px] flex items-center gap-2 transition-colors"><Phone size={12} /> +91 93800 00001</a>
              <a href="tel:+919942333333" className="text-white/40 hover:text-[#C9A800] text-[13px] flex items-center gap-2 transition-colors"><Phone size={12} /> +91 99423 33333</a>
              <a href="mailto:mekalatransports@gmail.com" className="text-white/40 hover:text-[#C9A800] text-[13px] flex items-center gap-2 transition-colors"><Mail size={12} /> mekalatransports@gmail.com</a>
              <span className="text-white/25 text-[13px] flex items-center gap-2 mt-1"><MapPin size={12} /> Sriperumbudur – 602105, Tamil Nadu</span>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="border border-white/[0.06] rounded-lg overflow-hidden">
              {[
                { label: 'Navigate', items: [
                  { text: 'About', href: '#about' },
                  { text: 'Services', href: '#services' },
                  { text: 'Fleet', href: '#fleet' },
                  { text: 'Coverage', href: '#coverage' },
                  { text: 'Contact', href: '#contact' },
                ]},
                { label: 'Quick Actions', items: [
                  { text: 'Get a Quote', href: '#quote', gold: true },
                  { text: 'Call Us', href: 'tel:+919380000001' },
                  { text: 'Email Us', href: 'mailto:mekalatransports@gmail.com' },
                ]},
                { label: 'Offices', items: [
                  { text: 'No. 1A, Bypass Road, Sriperumbudur – 602105' },
                  { text: 'No. 11, Bharathi St, Kothanda Nadar Nagar, Sriperumbudur – 602105' },
                ]},
              ].map((section, si, arr) => (
                <div key={section.label} className={`px-4 py-3 ${si < arr.length - 1 ? 'border-b border-white/[0.04]' : ''}`}>
                  <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.12em] mb-1.5">{section.label}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {section.items.map((item) => (
                      item.href ? (
                        <a key={item.text} href={item.href}
                          onClick={item.href.startsWith('#') ? (e) => { e.preventDefault(); go(item.href); } : undefined}
                          className={`text-[12px] transition-colors ${item.gold ? 'text-[#C9A800] font-medium' : 'text-white/35 hover:text-[#C9A800]'}`}>
                          {item.text}
                        </a>
                      ) : (
                        <span key={item.text} className="text-white/25 text-[12px]">{item.text}</span>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <p className="text-white/20 text-[11px]">© {new Date().getFullYear()} Mekala Transports · Established 1992</p>
          <button onClick={() => go('#home')} className="text-white/20 hover:text-[#C9A800] transition-colors"><ArrowUp size={14} /></button>
        </div>
      </div>
    </footer>
  );
}
