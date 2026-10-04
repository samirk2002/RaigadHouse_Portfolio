import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../data/config';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(16,24,40,0.08)' : 'none',
        }}
        role="navigation" aria-label="Main navigation"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <a href="#home" onClick={() => handleNav('#home')} style={{ display: 'flex', alignItems: 'center', gap: 10 }} aria-label="Raigad House Home">
            <img src="/images/logo_png.png" alt="Raigad House Logo" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 8 }} />
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20, color: '#101828', letterSpacing: '-0.03em' }}>
              Raigad<span style={{ color: '#2563EB' }}>House</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 4, listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  style={{
                    background: 'none', border: 'none', padding: '8px 12px',
                    fontSize: 14, fontWeight: 500, color: '#374151', cursor: 'pointer',
                    borderRadius: 8, transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.color = '#2563EB'; e.target.style.background = 'rgba(37,99,235,0.06)'; }}
                  onMouseLeave={e => { e.target.style.color = '#374151'; e.target.style.background = 'none'; }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button
              className="btn btn-primary desktop-nav"
              onClick={() => handleNav('#enquiry')}
              style={{ padding: '10px 20px', fontSize: 14 }}
            >
              Check Availability
            </button>
            <button
              className="mobile-only"
              onClick={() => setOpen(!open)}
              style={{ background: 'none', border: 'none', padding: 8, color: '#101828' }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: '#fff', borderTop: '1px solid #E5E7EB',
            padding: '16px 24px 24px',
          }}>
            {NAV_LINKS.map(l => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '12px 0', background: 'none', border: 'none',
                  fontSize: 16, fontWeight: 500, color: '#374151',
                  borderBottom: '1px solid #F3F4F6', cursor: 'pointer',
                }}
              >
                {l.label}
              </button>
            ))}
            <button
              className="btn btn-primary"
              onClick={() => handleNav('#enquiry')}
              style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
            >
              Check Availability
            </button>
          </div>
        )}
      </nav>

      {/* Mobile sticky bottom bar */}
      <div className="mobile-sticky-bar" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 999,
        background: '#fff', borderTop: '1px solid #E5E7EB',
        display: 'flex', padding: '10px 16px', gap: 8,
        boxShadow: '0 -4px 20px rgba(16,24,40,0.1)',
      }}>
        <a href={`tel:${BRAND.phone}`} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center', padding: '12px 8px', fontSize: 13 }}>
          📞 {BRAND.phone}
        </a>
        <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer"
          className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '12px 8px', fontSize: 13, background: '#25D366' }}>
          💬 WhatsApp
        </a>
        <button onClick={() => handleNav('#enquiry')} className="btn btn-orange" style={{ flex: 1, justifyContent: 'center', padding: '12px 8px', fontSize: 13 }}>
          Enquire
        </button>
      </div>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-only { display: none !important; }
        .mobile-sticky-bar { display: none !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-only { display: flex !important; }
          .mobile-sticky-bar { display: flex !important; }
        }
      `}</style>
    </>
  );
}
