import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const FLOAT_CARDS = [
  { icon: '💰', value: '₹6,999', label: 'Starting/mo', color: '#2563EB', delay: '0s' },
  { icon: '🔒', value: '24/7', label: 'Security', color: '#FF6B00', delay: '0.5s' },
  { icon: '📶', value: '400 Mbps', label: 'Wi-Fi Speed', color: '#7C3AED', delay: '1s' },
  { icon: '📍', value: '5 min', label: 'From Metro', color: '#65a30d', delay: '1.5s' },
];

const STEPS = ['01 / FIND YOUR SPACE', '02 / PICK YOUR ROOM', '03 / JOIN THE COMMUNITY'];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Use requestAnimationFrame to avoid layout shifts on first paint
    requestAnimationFrame(() => {
      const items = el.querySelectorAll('[data-animate]');
      items.forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
        setTimeout(() => {
          item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 80 + i * 100);
      });
    });
  }, []);

  return (
    <section id="home" ref={heroRef} style={{
      minHeight: '100vh', paddingTop: 68, background: '#fff',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background shapes */}
      <div style={{
        position: 'absolute', top: -100, right: -100, width: 600, height: 600,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -50, left: -50, width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Diagonal accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '45%', height: '100%',
        background: 'linear-gradient(135deg, #F5F7FA 0%, #EEF2FF 100%)',
        clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
        alignItems: 'center', minHeight: 'calc(100vh - 68px)', padding: '48px 24px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Left content */}
        <div>
          {/* Step labels */}
          <div data-animate style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {STEPS.map((s, i) => (
              <span key={i} style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                color: i === 0 ? '#2563EB' : '#9CA3AF',
                textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {i > 0 && <span style={{ width: 20, height: 1, background: '#D1D5DB', display: 'inline-block' }} />}
                {s}
              </span>
            ))}
          </div>

          <h1 data-animate style={{ fontSize: 'clamp(44px, 7vw, 80px)', lineHeight: 1.05, marginBottom: 24, letterSpacing: '-0.03em' }}>
            LIVE <span style={{ color: '#2563EB' }}>BIG.</span><br />
            LIVE YOUR<br />
            <span style={{
              background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>WAY.</span>
          </h1>

          <p data-animate style={{ fontSize: 18, color: '#6B7280', marginBottom: 20, maxWidth: 440, lineHeight: 1.7 }}>
            Modern PG living built for students and young professionals. Your room, your squad, your city.
          </p>
          {/* Co-ed trust strip */}
          <div data-animate style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
            {[
              { icon: '&#9794;&#65039;', label: 'Boys Welcome', color: '#2563EB' },
              { icon: '&#9792;&#65039;', label: 'Girls Welcome', color: '#7C3AED' },
              { icon: '&#128274;', label: 'Safe & Secure', color: '#059669' },
            ].map(b => (
              <div key={b.label} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: b.color + '10', border: `1px solid ${b.color}25`,
                borderRadius: 50, padding: '6px 14px',
                fontSize: 13, fontWeight: 600, color: b.color,
              }}>
                <span dangerouslySetInnerHTML={{ __html: b.icon }} />
                {b.label}
              </div>
            ))}
          </div>

          <div data-animate style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
            <button className="btn btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}
              onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}>
              Check Availability <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline" style={{ fontSize: 16, padding: '16px 32px' }}
              onClick={() => document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Rooms
            </button>
        </div>

          {/* Stats row */}
          <div data-animate style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[['200+', 'Happy Residents'], ['2', 'Properties'], ['4.9★', 'Rating']].map(([val, lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 700, color: '#101828' }}>{val}</div>
                <div style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image + floating cards */}
        <div style={{ position: 'relative' }} data-animate>
          <div style={{
            borderRadius: 24, overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(16,24,40,0.15)',
            aspectRatio: '4/5', maxHeight: 560,
          }}>
            <img
              src="/images/master_bedroom.jpeg"
              alt="Modern Raigad House room — bright, furnished, comfortable"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="eager"
              fetchPriority="high"
              width={560}
              height={700}
            />
          </div>

          {/* Floating cards */}
          {FLOAT_CARDS.map((c, i) => (
            <div key={i} style={{
              position: 'absolute',
              ...(i === 0 ? { top: '10%', left: '-60px' } :
                i === 1 ? { top: '35%', right: '-50px' } :
                i === 2 ? { bottom: '30%', left: '-50px' } :
                { bottom: '10%', right: '-40px' }),
              background: '#fff', borderRadius: 14, padding: '12px 16px',
              boxShadow: '0 8px 32px rgba(16,24,40,0.14)',
              display: 'flex', alignItems: 'center', gap: 10,
              animation: `float 3s ease-in-out ${c.delay} infinite`,
              minWidth: 140,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${c.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 16, color: c.color }}>{c.value}</div>
                <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500 }}>{c.label}</div>
              </div>
            </div>
          ))}

          {/* Co-ed badge */}
          <div style={{
            position: 'absolute', top: -16, right: 24,
            background: 'linear-gradient(135deg, #7C3AED, #2563EB)',
            color: '#fff', borderRadius: 50, padding: '8px 16px',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', boxShadow: '0 4px 16px rgba(124,58,237,0.4)',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            &#9794;&#65039;&#9792;&#65039; Co-ed PG
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        color: '#9CA3AF', fontSize: 12, fontWeight: 500,
        animation: 'float 2s ease-in-out infinite',
      }}>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #home > .container {
            grid-template-columns: 1fr !important;
            padding-top: 32px !important;
            padding-bottom: 80px !important;
          }
          #home > .container > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
