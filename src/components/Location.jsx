import { BRAND, NEARBY } from '../data/config';

const NEARBY_ICONS = {
  'Alard College':        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  'Hinjewadi IT Park':    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  'Tata Johnson Metro':   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="M8 19l-2 2"/><path d="M18 21l-2-2"/></svg>,
  ' Mall Of Millennium':  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  'Hospital':             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/><line x1="12" y1="6" x2="12" y2="10"/><line x1="10" y1="8" x2="14" y2="8"/></svg>,
  'Restaurants':          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
};

const NEARBY_COLORS = ['#2563EB', '#FF6B00', '#7C3AED', '#059669', '#DC2626', '#F59E0B'];

export default function Location() {
  return (
    <section id="location" style={{ padding: '72px 0', background: '#F9FAFB' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-label orange">Location</span>
          <h2 className="section-title">LIVE CLOSE TO <span className="accent-orange">EVERYTHING.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>5 minutes from Hinjewadi IT Park &amp; Alard College.</p>
        </div>

        {/* Nearby distance cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12, marginBottom: 36 }}>
          {NEARBY.map((item, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 14, padding: '18px 14px', textAlign: 'center',
              border: `1.5px solid ${NEARBY_COLORS[i % NEARBY_COLORS.length]}18`,
              boxShadow: '0 2px 12px rgba(16,24,40,0.05)',
              transition: 'all 0.22s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 8px 24px ${NEARBY_COLORS[i % NEARBY_COLORS.length]}20`; e.currentTarget.style.borderColor = `${NEARBY_COLORS[i % NEARBY_COLORS.length]}40`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(16,24,40,0.05)'; e.currentTarget.style.borderColor = `${NEARBY_COLORS[i % NEARBY_COLORS.length]}18`; }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12, margin: '0 auto 10px',
                background: `${NEARBY_COLORS[i % NEARBY_COLORS.length]}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: NEARBY_COLORS[i % NEARBY_COLORS.length],
              }}>
                {NEARBY_ICONS[item.label] || <span style={{ fontSize: 20 }}>{item.icon}</span>}
              </div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 800, color: NEARBY_COLORS[i % NEARBY_COLORS.length], lineHeight: 1 }}>
                {item.time}
              </div>
              <div style={{ fontSize: 12, color: '#6B7280', fontWeight: 500, marginTop: 4, lineHeight: 1.3 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Map + address */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'stretch' }} className="loc-grid">
          {/* Map */}
          <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 24px rgba(16,24,40,0.1)', minHeight: 340 }}>
            <iframe
              src={BRAND.mapEmbed}
              width="100%" height="100%"
              style={{ border: 0, display: 'block', minHeight: 340 }}
              allowFullScreen loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Raigad House PG location map"
            />
          </div>

          {/* Address card */}
          <div style={{ background: '#fff', borderRadius: 18, padding: '28px', border: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Address */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FFF3E8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF6B00' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span style={{ fontWeight: 700, fontSize: 15, color: '#101828' }}>Our Address</span>
              </div>
              <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.7 }}>{BRAND.address}</p>
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, href: `tel:${BRAND.phone}`, text: BRAND.phone, color: '#2563EB' },
                { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, href: `tel:${BRAND.phone2}`, text: BRAND.phone2, color: '#2563EB' },
                { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.58 1.38 5.065L2.05 21.95l5.02-1.312A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8.647 7.5c-.2 0-.52.075-.793.375-.27.3-1.04 1.016-1.04 2.475s1.065 2.872 1.213 3.072c.149.2 2.066 3.273 5.08 4.461.71.272 1.263.434 1.694.556.712.202 1.36.173 1.872.105.571-.075 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.273-.198-.572-.347-.298-.15-1.758-.868-2.031-.967-.273-.1-.472-.149-.671.15-.198.298-.77.967-.943 1.166-.174.198-.348.223-.647.074-.298-.149-1.26-.464-2.4-1.48-.887-.79-1.485-1.766-1.659-2.065-.174-.298-.018-.46.13-.608.134-.134.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.613-.917-2.207-.242-.579-.487-.5-.671-.51a12.07 12.07 0 0 0-.572-.01z"/></svg>, href: `https://wa.me/${BRAND.whatsapp}`, text: 'WhatsApp', color: '#25D366' },
                { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, href: `mailto:${BRAND.email}`, text: BRAND.email, color: '#7C3AED' },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#374151', fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = c.color}
                  onMouseLeave={e => e.currentTarget.style.color = '#374151'}
                >
                  <span style={{ color: c.color, display: 'flex', flexShrink: 0 }}>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>

            {/* Directions button */}
            <a href={BRAND.mapLink} target="_blank" rel="noopener noreferrer"
              className="btn btn-orange" style={{ justifyContent: 'center', fontSize: 14, marginTop: 'auto' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .loc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
