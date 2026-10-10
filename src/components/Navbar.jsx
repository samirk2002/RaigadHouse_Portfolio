import { useState, useEffect, useCallback } from 'react';

const DESKTOP_LINKS = [
  { label: 'ROOMS',     href: '#rooms' },
  { label: 'AMENITIES', href: '#amenities' },
  { label: 'GALLERY',   href: '#gallery' },
  { label: 'LOCATION',  href: '#location' },
  { label: 'REVIEWS',   href: '#reviews' },
  { label: 'FAQ',       href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop]   = useState(false);
  const [activeHref, setActive] = useState('#home');
  const [hovered, setHovered]   = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = [...DESKTOP_LINKS, { href: '#home' }, { href: '#enquiry' }]
      .map(l => document.querySelector(l.href)).filter(Boolean);
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); }),
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = useCallback((href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          boxShadow: scrolled ? '0 2px 16px rgba(16,24,40,0.07)' : 'none',
        }}
        role="navigation" aria-label="Main navigation"
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <a href="#home" onClick={e => { e.preventDefault(); go('#home'); }} style={{ display: 'flex', alignItems: 'center', gap: 9 }} aria-label="Raigad House Home">
            <img src="/images/logo_png.png" alt="Raigad House" style={{ height: 38, width: 38, objectFit: 'contain', borderRadius: 8 }} loading="eager" />
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 19, color: '#101828', letterSpacing: '-0.03em' }}>
              Raigad<span style={{ color: '#2563EB' }}>House</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: 2, listStyle: 'none', alignItems: 'center' }} className="desk-nav">
            {DESKTOP_LINKS.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  aria-current={activeHref === l.href ? 'page' : undefined}
                  style={{
                    background: activeHref === l.href ? 'rgba(37,99,235,0.08)' : 'none',
                    border: 'none', padding: '7px 11px', borderRadius: 8,
                    fontSize: 13, fontWeight: activeHref === l.href ? 700 : 500,
                    color: activeHref === l.href ? '#2563EB' : '#374151',
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#2563EB'; e.currentTarget.style.background = 'rgba(37,99,235,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = activeHref === l.href ? '#2563EB' : '#374151'; e.currentTarget.style.background = activeHref === l.href ? 'rgba(37,99,235,0.08)' : 'none'; }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button className="btn btn-primary desk-nav" onClick={() => go('#enquiry')} style={{ padding: '9px 18px', fontSize: 13 }}>
            Check Availability
          </button>

          {/* Mobile: CTA + hamburger */}
          <div className="mob-menu-btn" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              className="btn btn-primary"
              onClick={() => go('#enquiry')}
              style={{ padding: '7px 14px', fontSize: 12, minHeight: 36, borderRadius: 50 }}
            >
              Check Availability
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              style={{ background: 'none', border: '1.5px solid #E5E7EB', borderRadius: 8, padding: '6px 8px', color: '#101828', display: 'flex', alignItems: 'center', minHeight: 36 }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <div style={{ background: '#fff', borderTop: '1px solid #F3F4F6', padding: '8px 16px 12px' }} className="mob-menu-btn">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
              {[{ label: 'HOME', href: '#home' }, ...DESKTOP_LINKS].map(l => (
                <button key={l.href} onClick={() => go(l.href)} style={{
                  background: activeHref === l.href ? 'rgba(37,99,235,0.08)' : '#F9FAFB',
                  border: 'none', borderRadius: 8, padding: '10px 12px',
                  fontSize: 12, fontWeight: 600,
                  color: activeHref === l.href ? '#2563EB' : '#374151',
                  cursor: 'pointer', textAlign: 'left', minHeight: 40,
                }}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={scrollTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed', bottom: 24, right: 20, zIndex: 998,
            width: 40, height: 40, borderRadius: '50%',
            background: '#101828', color: '#fff', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(16,24,40,0.25)',
            cursor: 'pointer',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2563EB'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#101828'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      )}

      <style>{`
        .desk-nav { display: flex !important; }
        .mob-menu-btn { display: none !important; }
        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .mob-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
