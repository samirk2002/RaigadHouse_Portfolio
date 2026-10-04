import { BRAND } from '../data/config';

const LINKS = {
  'Quick Links': ['Home', 'Rooms', 'Amenities', 'Gallery', 'Location'],
  'Support': ['FAQ', 'Reviews', 'Contact Us', 'Book a Visit'],
  'Legal': ['Privacy Policy', 'Terms & Conditions', 'Refund Policy'],
};

const SOCIALS = [
  { label: 'Instagram', icon: '📸', href: 'https://www.instagram.com/raigad_house_pg_?stkn=MThsY3ljb3l0aWthYQ==' },
  { label: 'Facebook', icon: '👥', href: 'https://www.facebook.com/61591959403354/' },
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
                style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#25D366'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}>
                💬 WhatsApp
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
                fontSize: 16, transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
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
