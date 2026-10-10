import { REVIEWS } from '../data/config';

const AVATAR_BG = ['#2563EB', '#FF6B00', '#7C3AED', '#059669', '#0891B2', '#DC2626'];

const GoogleIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function Stars({ count = 5, size = 13 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < count ? '#F59E0B' : '#E5E7EB'} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r, i }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 300,
      background: '#fff',
      borderRadius: 16,
      padding: '20px',
      border: '1px solid #E5E7EB',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      boxShadow: '0 2px 12px rgba(16,24,40,0.06)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
          background: AVATAR_BG[i % AVATAR_BG.length],
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: 13,
          fontFamily: 'Space Grotesk, sans-serif',
        }}>
          {r.avatar}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, fontSize: 13, color: '#101828' }}>{r.name}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#059669', background: '#ECFDF5', borderRadius: 50, padding: '1px 6px' }}>✓ Verified</span>
          </div>
          <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 1 }}>{r.role} · {r.date}</div>
        </div>
        <a href={r.sourceUrl} target="_blank" rel="noopener noreferrer" title="View on Google"
          style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: 7, background: '#F8F9FA', border: '1px solid #E5E7EB' }}>
          <GoogleIcon size={14} />
        </a>
      </div>

      <Stars count={r.rating} />

      <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7, margin: 0, display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        "{r.text}"
      </p>
    </div>
  );
}

/* Duplicate reviews for seamless loop */
const ROW1 = [...REVIEWS, ...REVIEWS];
const ROW2 = [...REVIEWS].reverse().concat([...REVIEWS].reverse());

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '72px 0', background: '#F9FAFB', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 40 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="section-label">Reviews</span>
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              Trusted by <span className="accent-blue">200+ Residents</span>
            </h2>
            <p style={{ color: '#6B7280', fontSize: 15, maxWidth: 440 }}>
              Real reviews from students &amp; professionals living at Raigad House.
            </p>
          </div>

          {/* Rating hero — enlarged */}
          <div style={{
            background: '#fff', borderRadius: 20,
            padding: '28px 36px',
            border: '1.5px solid #E5E7EB',
            boxShadow: '0 8px 32px rgba(16,24,40,0.08)',
            display: 'flex', alignItems: 'center', gap: 28, flexShrink: 0,
          }}>
            {/* Score block */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 64, fontWeight: 800, color: '#101828', lineHeight: 1, letterSpacing: '-0.03em' }}>4.9</div>
              <div style={{ marginTop: 6, marginBottom: 6 }}><Stars count={5} size={18} /></div>
              <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>120+ Google reviews</div>
            </div>

            <div style={{ width: 1, height: 72, background: '#E5E7EB', flexShrink: 0 }} />

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#F8F9FA', border: '1px solid #E5E7EB', borderRadius: 12, padding: '10px 18px' }}>
                <GoogleIcon size={22} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#101828' }}>Google Maps</div>
                  <div style={{ fontSize: 11, color: '#9CA3AF' }}>Verified reviews</div>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/hPBXEzpQ7JFG3DME6" target="_blank" rel="noopener noreferrer"
                className="btn btn-primary" style={{ fontSize: 14, padding: '11px 20px', gap: 8, justifyContent: 'center' }}>
                <GoogleIcon size={15} /> Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee row 1 — left ── */}
      <div style={{ overflow: 'hidden', marginBottom: 14 }}>
        <div className="rev-marquee rev-left" style={{ display: 'flex', gap: 14, width: 'max-content' }}>
          {ROW1.map((r, i) => <ReviewCard key={i} r={r} i={i % REVIEWS.length} />)}
        </div>
      </div>


      {/* Trust strip */}
      <div className="container" style={{ marginTop: 36 }}>
        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap',
          background: '#fff', borderRadius: 14, border: '1px solid #E5E7EB', overflow: 'hidden',
        }}>
          {[
            { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>, text: '4.9 Avg Rating' },
            { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, text: '200+ Residents' },
            { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>, text: '98% Recommend' },
            { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, text: '3+ Years of Trust' },
          ].map((b, i, arr) => (
            <div key={b.text} style={{
              flex: 1, minWidth: 130, padding: '14px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              borderRight: i < arr.length - 1 ? '1px solid #E5E7EB' : 'none',
              fontSize: 13, fontWeight: 600, color: '#374151',
            }}>
              {b.icon} {b.text}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes rev-scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes rev-scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .rev-left  { animation: rev-scroll-left  32s linear infinite; }
        .rev-right { animation: rev-scroll-right 28s linear infinite; }
        .rev-left:hover, .rev-right:hover { animation-play-state: paused; }
        @media (max-width: 640px) {
          #reviews .container > div:first-child { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
