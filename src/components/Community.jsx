const COMMUNITY_IMAGES = [
  { src: '/images/community1.jpeg', alt: 'Residents hanging out at Raigad House' },
  { src: '/images/community2.jpeg', alt: 'Community event at Raigad House' },
  { src: '/images/community3.jpeg', alt: 'Friends at Raigad House common area' },
  { src: '/images/community4.jpeg', alt: 'Raigad House residents working together' },
  { src: '/images/community5.jpeg', alt: 'Raigad House community celebration' },
];

export default function Community() {
  return (
    <section id="community" style={{ padding: '96px 0', background: '#101828', overflow: 'hidden' }}>
      <div className="container">
        <div className="community-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: 12, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#A3E635',
              background: 'rgba(163,230,53,0.1)', padding: '6px 14px', borderRadius: 50,
              marginBottom: 16,
            }}>Community</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, color: '#fff', marginBottom: 20, lineHeight: 1.1 }}>
              MEET YOUR <span style={{ color: '#FF6B00' }}>SQUAD.</span>
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', marginBottom: 32, lineHeight: 1.7 }}>
              Meet people. Make friends. Build memories.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
              {[
                ['🎮', 'Gaming nights & tournaments'],
                ['🏃', 'Morning runs & fitness challenges'],
                ['🍕', 'Community dinners & celebrations'],
                ['📚', 'Study groups & skill sharing'],
              ].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>{text}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-orange"
              onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}>
              Join the Community
            </button>
          </div>

          {/* Right — photo grid */}
          <div className="community-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {COMMUNITY_IMAGES.map((img, i) => (
              <div key={i} className={i === 0 ? 'community-img-wide' : ''} style={{
                borderRadius: 16, overflow: 'hidden',
                gridColumn: i === 0 ? 'span 2' : 'span 1',
                height: i === 0 ? 220 : 160,
              }}>
                <img src={img.src} alt={img.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .community-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .community-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .community-grid > div {
            grid-column: span 1 !important;
            height: 140px !important;
          }
          .community-grid > div.community-img-wide {
            grid-column: span 2 !important;
            height: 200px !important;
          }
        }
        @media (max-width: 480px) {
          .community-grid {
            grid-template-columns: 1fr !important;
          }
          .community-grid > div,
          .community-grid > div.community-img-wide {
            grid-column: span 1 !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
