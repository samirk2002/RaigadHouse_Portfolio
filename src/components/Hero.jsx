import { ArrowRight } from 'lucide-react';

const FLOAT_CARDS = [
  { icon: '💰', value: '₹6,999', label: 'Starting/mo', color: '#2563EB', delay: '0s' },
  { icon: '🔒', value: '24/7', label: 'Security', color: '#FF6B00', delay: '0.5s' },
  { icon: '🛜', value: 'FREE', label: ' Wi-Fi', color: '#7C3AED', delay: '1s' },
  { icon: '📍', value: '5 min', label: 'From IT Park', color: '#059669', delay: '1.5s' },
];

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', paddingTop: 68, background: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle background accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '45%', height: '100%',
        background: 'linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%)',
        clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 500, height: 500,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
        alignItems: 'center', minHeight: 'calc(100vh - 68px)', padding: '48px 24px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Left */}
        <div>
          <div data-animate style={{ marginBottom: 20 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(37,99,235,0.08)', color: '#2563EB',
              borderRadius: 50, padding: '6px 14px',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              🏠 PG in Hinjewadi, Pune
            </span>
          </div>

          {/* Headline — clear, keyword-rich, professional */}
          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            lineHeight: 1.08, marginBottom: 20, letterSpacing: '-0.03em',
          }}>
            Premium PG<br />
            <span style={{ color: '#2563EB' }}>Near Hinjewadi</span><br />
            <span style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>IT Park, Pune</span>
          </h1>

          <p style={{ fontSize: 17, color: '#6B7280', marginBottom: 24, maxWidth: 420, lineHeight: 1.75 }}>
            Fully furnished co-ed PG for students &amp; working professionals. Meals, Wi-Fi, housekeeping &amp; 24/7 security — all included.
          </p>

          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {[
              { label: '♂️ Boys Welcome', color: '#2563EB' },
              { label: '♀️ Girls Welcome', color: '#7C3AED' },
              { label: '🔒 Safe & Secure', color: '#059669' },
            ].map(b => (
              <span key={b.label} style={{
                background: b.color + '0F', border: `1px solid ${b.color}22`,
                borderRadius: 50, padding: '5px 13px',
                fontSize: 13, fontWeight: 600, color: b.color,
              }}>
                {b.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
            <button
              className="btn btn-primary"
              style={{ fontSize: 15, padding: '14px 28px' }}
              onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Check Availability <ArrowRight size={17} />
            </button>
            <button
              className="btn btn-outline"
              style={{ fontSize: 15, padding: '14px 28px' }}
              onClick={() => document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Rooms
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
            {[
              ['200+', 'Happy Residents'],
              ['4.9★', 'Google Rating'],
              ['3+', 'Years of Trust'],
            ].map(([val, lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 26, fontWeight: 800, color: '#101828' }}>{val}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500, marginTop: 2 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image + floating cards */}
        <div style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 20, overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(16,24,40,0.14)',
            aspectRatio: '4/5', maxHeight: 560,
          }}>
            <img
              src="/images/cafeteria.png"
              alt="Furnished room at Raigad House PG Hinjewadi Pune"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={560}
              height={700}
            />
          </div>

          {/* Co-ed badge */}
          <div style={{
            position: 'absolute', top: -14, right: 20,
            background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
            color: '#fff', borderRadius: 50, padding: '7px 14px',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', boxShadow: '0 4px 16px rgba(124,58,237,0.35)',
          }}>
            ♂️♀️ Co-Ed PG
          </div>

          {/* Floating info cards */}
          {FLOAT_CARDS.map((c, i) => (
            <div key={i} style={{
              position: 'absolute',
              ...(i === 0 ? { top: '10%', left: '-52px' } :
                i === 1 ? { top: '36%', right: '-44px' } :
                i === 2 ? { bottom: '28%', left: '-52px' } :
                { bottom: '8%', right: '-44px' }),
              background: '#fff', borderRadius: 12, padding: '10px 14px',
              boxShadow: '0 6px 24px rgba(16,24,40,0.12)',
              display: 'flex', alignItems: 'center', gap: 10,
              animation: `float 3s ease-in-out ${c.delay} infinite`,
              minWidth: 130,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: `${c.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 15, color: c.color }}>{c.value}</div>
                <div style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 500 }}>{c.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home > .container {
            grid-template-columns: 1fr !important;
            padding-top: 28px !important;
            padding-bottom: 32px !important;
            gap: 28px !important;
          }
          #home > .container > div:last-child {
            display: block !important;
            margin: 0 -8px;
          }
          #home > .container > div:last-child > div:first-child {
            aspect-ratio: 16/9 !important;
            max-height: 220px !important;
            border-radius: 14px !important;
          }
          #home > .container > div:last-child > div:not(:first-child) { display: none !important; }
        }
      `}</style>
    </section>
  );
}
