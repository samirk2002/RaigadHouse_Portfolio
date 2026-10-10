import { useState } from 'react';
import { BRAND } from '../data/config';
import LegalModal from './LegalModal';

const LEGAL = ['Privacy Policy ', 'Terms & Conditions ', 'Refund Policy'];

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/raigad_house_pg_?stkn=MThsY3ljb3l0aWthYQ==',
    hoverColor: '#E1306C',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/61591959403354/',
    hoverColor: '#1877F2',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [legalPage, setLegalPage] = useState(null);
  const go = (id) => document.querySelector(`#${id.toLowerCase().replace(/ /g, '')}`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#0D1117', color: '#fff' }}>
      <div className="container" style={{ padding: '32px 24px 24px' }}>

        {/* Single row: logo | links | contact | socials */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap', paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Logo + tagline */}
          <div style={{ minWidth: 160, flex: '0 0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <img src="/images/logo_png.png" alt="Raigad House" style={{ height: 32, width: 32, objectFit: 'contain', borderRadius: 6 }} loading="lazy" />
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 16 }}>
                Raigad<span style={{ color: '#2563EB' }}>House</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 12, lineHeight: 1.5, maxWidth: 160 }}>
              Co-ed PG · Hinjewadi, Pune
            </p>
          </div>

          {/* Quick nav */}
          <div style={{ flex: '1 1 120px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 10 }}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {['Rooms', 'Amenities', 'Gallery', 'Location', 'FAQ'].map(l => (
                <button key={l} onClick={() => go(l)} style={{
                  background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
                  fontSize: 13, cursor: 'pointer', padding: 0, textAlign: 'left',
                  transition: 'color 0.15s', minHeight: 'auto',
                }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{l}</button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ flex: '1 1 180px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 10 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={`tel:${BRAND.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)', fontSize: 13, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {BRAND.phone}
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)', fontSize: 13, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#25D366'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.58 1.38 5.065L2.05 21.95l5.02-1.312A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8.647 7.5c-.2 0-.52.075-.793.375-.27.3-1.04 1.016-1.04 2.475s1.065 2.872 1.213 3.072c.149.2 2.066 3.273 5.08 4.461.71.272 1.263.434 1.694.556.712.202 1.36.173 1.872.105.571-.075 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.273-.198-.572-.347-.298-.15-1.758-.868-2.031-.967-.273-.1-.472-.149-.671.15-.198.298-.77.967-.943 1.166-.174.198-.348.223-.647.074-.298-.149-1.26-.464-2.4-1.48-.887-.79-1.485-1.766-1.659-2.065-.174-.298-.018-.46.13-.608.134-.134.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.613-.917-2.207-.242-.579-.487-.5-.671-.51a12.07 12.07 0 0 0-.572-.01z"/></svg>
                WhatsApp
              </a>
              <a href={`mailto:${BRAND.email}`} style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.5)', fontSize: 13, transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {BRAND.email}
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7, color: 'rgba(255,255,255,0.38)', fontSize: 12 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style={{ lineHeight: 1.5 }}>Near Alard College, Hinjewadi Phase 1, Pune 411057</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: 10 }}>Follow</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.55)', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.hoverColor; e.currentTarget.style.borderColor = s.hoverColor + '60'; e.currentTarget.style.background = s.hoverColor + '18'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, paddingTop: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: 12 }}>
            © {new Date().getFullYear()} Raigad House. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {LEGAL.map(p => (
              <button key={p} onClick={() => setLegalPage(p)} style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.28)',
                fontSize: 12, cursor: 'pointer', padding: 0, transition: 'color 0.15s', minHeight: 'auto',
              }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.28)'}
              >{p}</button>
            ))}
          </div>
        </div>
      </div>

      {legalPage && <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />}
    </footer>
  );
}
