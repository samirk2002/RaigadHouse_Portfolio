import { MapPin, Navigation } from 'lucide-react';
import { BRAND, NEARBY } from '../data/config';

export default function Location() {
  return (
    <section id="location" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label orange">Location</span>
          <h2 className="section-title">LIVE CLOSE TO <span className="accent-orange">EVERYTHING.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Strategically located near colleges, IT parks, and city essentials.</p>
        </div>

        {/* Distance cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 48 }}>
          {NEARBY.map((item, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 16, padding: '20px 16px', textAlign: 'center',
              boxShadow: '0 2px 16px rgba(16,24,40,0.06)', border: '1px solid #F3F4F6',
              transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,24,40,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(16,24,40,0.06)'; }}
            >
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: 700, color: '#FF6B00', marginBottom: 4 }}>
                {item.time}
              </div>
              <div style={{ fontSize: 13, color: '#6B7280', fontWeight: 500 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Map + address */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>
          {/* Map */}
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(16,24,40,0.1)', height: 380 }}>
            <iframe
              src={BRAND.mapEmbed}
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Raigad House PG location map"
            />
          </div>

          {/* Address card */}
          <div style={{ background: '#F9FAFB', borderRadius: 20, padding: '32px', border: '1px solid #E5E7EB' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: '#FF6B0015',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MapPin size={18} color="#FF6B00" />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Our Address</h3>
            </div>
            <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
              {BRAND.address}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              <a href={`tel:${BRAND.phone}`} style={{ color: '#2563EB', fontWeight: 600, fontSize: 15 }}>
                📞 {BRAND.phone}
              </a>
              <a href={`tel:${BRAND.phone2}`} style={{ color: '#2563EB', fontWeight: 600, fontSize: 15 }}>
                📞 {BRAND.phone2}
              </a>
              <a href={`mailto:${BRAND.email}`} style={{ color: '#2563EB', fontWeight: 600, fontSize: 15 }}>
                ✉️ {BRAND.email}
              </a>
            </div>
            <a
              href={BRAND.mapLink}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-orange"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #location .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
