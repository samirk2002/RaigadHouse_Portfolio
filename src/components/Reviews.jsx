import { REVIEWS } from '../data/config';

const AVATAR_COLORS = ['#2563EB', '#FF6B00', '#7C3AED', '#059669'];

// Proper SVG logos
const GoogleLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const InstagramLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig1" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig1)"/>
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="#fff" strokeWidth="1.8"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="#fff"/>
  </svg>
);

const FacebookLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1877F2"/>
    <path d="M16 8h-2a1 1 0 0 0-1 1v2h3l-.5 3H13v7h-3v-7H8v-3h2V9a4 4 0 0 1 4-4h2v3z" fill="#fff"/>
  </svg>
);

const NoBrokerLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#FF6B00"/>
    <path d="M5 17V8l4 5V8h2v9h-2L5 12v5H5zm8-9h4a3 3 0 0 1 0 6h-2v3h-2V8zm2 2v2h2a1 1 0 0 0 0-2h-2z" fill="#fff"/>
  </svg>
);

const PLATFORMS = [
  { name: 'Google',   rating: '4.9', reviews: '120+', logo: <GoogleLogo size={28} /> },
  { name: 'Facebook', rating: '4.8', reviews: '80+',  logo: <FacebookLogo size={28} /> },
  { name: 'NoBroker', rating: '4.7', reviews: '60+',  logo: <NoBrokerLogo size={28} /> },
];

// Tags relevant to PG living per review
const REVIEW_TAGS = [
  ['Clean Rooms', 'Good Food', 'Great Location'],
  ['Homely Feel', 'Hygienic Food', 'Supportive Staff'],
  ['Peaceful Stay', 'Well Maintained', 'Cooperative Mgmt'],
  ['Fast Wi-Fi', 'Safe & Secure', 'Community Vibe'],
  ['Friendly Staff', 'Comfortable Rooms', 'Recommended'],
];

function Stars({ count, size = 16 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#F59E0B' : '#E5E7EB', fontSize: size }}>&#9733;</span>
      ))}
    </div>
  );
}

function ReviewCard({ r, i }) {
  const tags = REVIEW_TAGS[i % REVIEW_TAGS.length];
  return (
    <div style={{
      background: '#fff', borderRadius: 20, padding: '28px',
      boxShadow: '0 2px 20px rgba(16,24,40,0.07)',
      border: '1px solid #F0F0F0',
      display: 'flex', flexDirection: 'column', gap: 0,
      transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(16,24,40,0.13)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 20px rgba(16,24,40,0.07)'; }}
    >
      {/* Accent top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: `linear-gradient(90deg, ${AVATAR_COLORS[i % AVATAR_COLORS.length]}, ${AVATAR_COLORS[(i + 1) % AVATAR_COLORS.length]})`,
        borderRadius: '20px 20px 0 0',
      }} />

      {/* Top row — avatar + name + verified */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, marginTop: 8 }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
          background: `linear-gradient(135deg, ${AVATAR_COLORS[i % AVATAR_COLORS.length]}, ${AVATAR_COLORS[(i + 1) % AVATAR_COLORS.length]})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: 16,
          boxShadow: `0 4px 12px ${AVATAR_COLORS[i % AVATAR_COLORS.length]}40`,
        }}>
          {r.avatar}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, fontSize: 15, color: '#101828' }}>{r.name}</span>
            <span style={{
              background: '#EEF9F0', color: '#059669', borderRadius: 50,
              padding: '2px 8px', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: 3,
            }}>
              &#10003; Verified Resident
            </span>
          </div>
          <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>{r.role}</div>
        </div>
        {/* Google SVG logo */}
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: '#F8F9FA', border: '1px solid #E5E7EB',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <GoogleLogo size={18} />
        </div>
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <Stars count={r.rating} size={15} />
        <span style={{ fontSize: 11, color: '#C4C4C4' }}>Google Review</span>
      </div>

      {/* Review text */}
      <p style={{
        color: '#4B5563', lineHeight: 1.75, fontSize: 14,
        flex: 1, position: 'relative', paddingLeft: 16,
        borderLeft: `3px solid ${AVATAR_COLORS[i % AVATAR_COLORS.length]}30`,
      }}>
        {r.text}
      </p>

      {/* Relevant tags */}
      <div style={{ marginTop: 18, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            background: '#F5F7FA', color: '#6B7280', borderRadius: 50,
            padding: '3px 10px', fontSize: 11, fontWeight: 500,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Reviews</span>
          <h2 className="section-title">
            REAL PEOPLE.<br />
            <span className="accent-blue">REAL EXPERIENCES.</span>
          </h2>
          <p className="section-sub" style={{ margin: '12px auto 0' }}>
            Hear from students and professionals who call Raigad House home.
          </p>
        </div>

        {/* Big rating hero */}
        <div style={{
          background: 'linear-gradient(135deg, #101828 0%, #1e3a5f 100%)',
          borderRadius: 24, padding: '48px 40px', marginBottom: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 32, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255,255,255,0.02) 30px, rgba(255,255,255,0.02) 60px)',
          }} />

          {/* Overall score */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: 80, fontWeight: 800, color: '#fff', lineHeight: 1 }}>4.9</div>
            <Stars count={5} size={22} />
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 8 }}>Overall Rating</p>
          </div>

          <div style={{ width: 1, height: 80, background: 'rgba(255,255,255,0.1)' }} className="desktop-nav" />

          {/* Platform ratings with SVG logos */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            {PLATFORMS.map(p => (
              <div key={p.name} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>{p.logo}</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: 700, color: '#fff' }}>{p.rating}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{p.name} · {p.reviews}</div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 1 }}>
            {['200+ Happy Residents', '3+ Years of Trust', '98% Would Recommend'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#A3E635', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#101828' }}>&#10003;</div>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 48 }}>
          {REVIEWS.map((r, i) => <ReviewCard key={i} r={r} i={i} />)}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center', background: '#F5F7FA', borderRadius: 20,
          padding: '40px 24px', border: '1px solid #E5E7EB',
        }}>
          <p style={{ fontSize: 16, color: '#374151', fontWeight: 500, marginBottom: 24 }}>
            Loved your stay? Share your experience at Raigad House!
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary" style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <GoogleLogo size={18} /> Write a Google Review
            </a>
            <button className="btn btn-outline" style={{ fontSize: 14 }}
              onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}>
              Book a Visit First
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
