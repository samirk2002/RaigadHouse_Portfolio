import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND } from '../data/config';

const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.58 1.38 5.065L2.05 21.95l5.02-1.312A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8.647 7.5c-.2 0-.52.075-.793.375-.27.3-1.04 1.016-1.04 2.475s1.065 2.872 1.213 3.072c.149.2 2.066 3.273 5.08 4.461.71.272 1.263.434 1.694.556.712.202 1.36.173 1.872.105.571-.075 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.273-.198-.572-.347-.298-.15-1.758-.868-2.031-.967-.273-.1-.472-.149-.671.15-.198.298-.77.967-.943 1.166-.174.198-.348.223-.647.074-.298-.149-1.26-.464-2.4-1.48-.887-.79-1.485-1.766-1.659-2.065-.174-.298-.018-.46.13-.608.134-.134.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.613-.917-2.207-.242-.579-.487-.5-.671-.51a12.07 12.07 0 0 0-.572-.01z"/>
  </svg>
);

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
          className="btn btn-primary" style={{ flex: 1, justifyContent: 'center', padding: '12px 8px', fontSize: 13, background: '#25D366', gap: 6 }}>
          <WhatsAppIcon size={16} /> WhatsApp
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
