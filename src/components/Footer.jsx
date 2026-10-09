import { BRAND } from '../data/config';

const LINKS = {
  'Quick Links': ['Home', 'Rooms', 'Amenities', 'Gallery', 'Location'],
  'Support': ['FAQ', 'Reviews', 'Contact Us', 'Book a Visit'],
  'Legal': ['Privacy Policy', 'Terms & Conditions', 'Refund Policy'],
};

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/raigad_house_pg_?stkn=MThsY3ljb3l0aWthYQ==',
    hoverBg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="none"/>
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/61591959403354/',
    hoverBg: '#1877F2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (id) => document.querySelector(`#${id.toLowerCase().replace(/ /g, '')}`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#0D1117', color: '#fff', paddingBottom: 80 }}>
      {/* Top */}
      <div className="container" style={{ padding: '64px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/images/logo_png.png" alt="Raigad House Logo" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 8 }} />
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20 }}>
                Raigad<span style={{ color: '#2563EB' }}>House</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 20, maxWidth: 260 }}>
              {BRAND.tagline}<br />Co-ed PG for boys &amp; girls. Modern living for the next generation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href={`tel:${BRAND.phone}`} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                📞 {BRAND.phone}
              </a>
              <a href={`tel:${BRAND.phone2}`} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                📞 {BRAND.phone2}
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6 }}
                onMouseEnter={e => e.currentTarget.style.color = '#25D366'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.58 1.38 5.065L2.05 21.95l5.02-1.312A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8.647 7.5c-.2 0-.52.075-.793.375-.27.3-1.04 1.016-1.04 2.475s1.065 2.872 1.213 3.072c.149.2 2.066 3.273 5.08 4.461.71.272 1.263.434 1.694.556.712.202 1.36.173 1.872.105.571-.075 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.273-.198-.572-.347-.298-.15-1.758-.868-2.031-.967-.273-.1-.472-.149-.671.15-.198.298-.77.967-.943 1.166-.174.198-.348.223-.647.074-.298-.149-1.26-.464-2.4-1.48-.887-.79-1.485-1.766-1.659-2.065-.174-.298-.018-.46.13-.608.134-.134.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.613-.917-2.207-.242-.579-.487-.5-.671-.51a12.07 12.07 0 0 0-.572-.01z"/></svg>
                WhatsApp
              </a>
              <a href={`mailto:${BRAND.email}`} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                ✉️ {BRAND.email}
              </a>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>📍 {BRAND.address}</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link}>
                    <button onClick={() => scrollTo(link)} style={{
                      background: 'none', border: 'none', color: 'rgba(255,255,255,0.6)',
                      fontSize: 14, cursor: 'pointer', padding: 0, transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
            © {new Date().getFullYear()} Raigad House. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = s.hoverBg; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
