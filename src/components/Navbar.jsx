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

        {/* Mobile full menu */}
        <div style={{
          background: '#fff',
          borderTop: '1px solid #F3F4F6',
          maxHeight: open ? 600 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
        }} className="mob-menu-panel">
          <div style={{ padding: '12px 20px 20px' }}>
            {/* Nav links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 16 }}>
              {[{ label: 'Home', href: '#home', icon: '🏠' }, ...DESKTOP_LINKS.map(l => ({
                ...l,
                label: l.label.charAt(0) + l.label.slice(1).toLowerCase(),
                icon: l.href === '#rooms' ? '🛏️' : l.href === '#amenities' ? '✨' : l.href === '#gallery' ? '🖼️' : l.href === '#location' ? '📍' : l.href === '#reviews' ? '⭐' : '❓'
              }))].map(l => (
                <button key={l.href} onClick={() => go(l.href)} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: activeHref === l.href ? 'rgba(37,99,235,0.07)' : 'transparent',
                  border: 'none', borderRadius: 10, padding: '12px 14px',
                  fontSize: 15, fontWeight: activeHref === l.href ? 700 : 500,
                  color: activeHref === l.href ? '#2563EB' : '#374151',
                  cursor: 'pointer', textAlign: 'left', width: '100%',
                  borderLeft: activeHref === l.href ? '3px solid #2563EB' : '3px solid transparent',
                  transition: 'all 0.15s',
                }}>
                  <span style={{ fontSize: 18, width: 24, textAlign: 'center' }}>{l.icon}</span>
                  {l.label}
                  {activeHref === l.href && (
                    <span style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: '#2563EB' }} />
                  )}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: '#F3F4F6', marginBottom: 16 }} />

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button className="btn btn-primary" onClick={() => go('#enquiry')}
                style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: 15 }}>
                🏠 Check Availability
              </button>
              <a href="https://wa.me/917218442254" target="_blank" rel="noopener noreferrer"
                className="btn" onClick={() => setOpen(false)}
                style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: 15, background: '#25D366', color: '#fff', borderRadius: 50 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.58 1.38 5.065L2.05 21.95l5.02-1.312A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8.647 7.5c-.2 0-.52.075-.793.375-.27.3-1.04 1.016-1.04 2.475s1.065 2.872 1.213 3.072c.149.2 2.066 3.273 5.08 4.461.71.272 1.263.434 1.694.556.712.202 1.36.173 1.872.105.571-.075 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.273-.198-.572-.347-.298-.15-1.758-.868-2.031-.967-.273-.1-.472-.149-.671.15-.198.298-.77.967-.943 1.166-.174.198-.348.223-.647.074-.298-.149-1.26-.464-2.4-1.48-.887-.79-1.485-1.766-1.659-2.065-.174-.298-.018-.46.13-.608.134-.134.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.613-.917-2.207-.242-.579-.487-.5-.671-.51a12.07 12.07 0 0 0-.572-.01z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
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
        .mob-menu-panel { display: none !important; }
        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .mob-menu-btn { display: flex !important; }
          .mob-menu-panel { display: block !important; }
        }
      `}</style>
    </>
  );
}
