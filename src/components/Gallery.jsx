import { useState, useEffect, useCallback } from 'react';

const ALL_ITEMS = [
  { src: '/images/Building-1.jpeg',      cat: 'Exterior',  alt: 'Raigad House Front',    label: 'Grand Entrance'  },
  { src: '/images/building.png',         cat: 'Exterior',  alt: 'Raigad House Building', label: 'Your New Home'   },
  { src: '/images/master_bedroom.jpeg',  cat: 'Rooms',     alt: 'Master Bedroom',        label: 'Private Space'   },
  { src: '/images/bedroom.jpeg',         cat: 'Rooms',     alt: 'Standard Bedroom',      label: 'Clean & Cozy'    },
  { src: '/images/gallery_bedroom.jpeg', cat: 'Rooms',     alt: 'Gallery Bedroom',       label: 'Fully Furnished' },
  { src: '/images/study.png',            cat: 'Study',     alt: 'Study Area',            label: 'Focus Zone'      },
  { src: '/images/cafeteria.png',        cat: 'Dining',    alt: 'Cafeteria',             label: 'Eat Together'    },
  { src: '/images/smarttv.png',          cat: 'Amenities', alt: 'Smart TV Lounge',       label: 'Chill Zone'      },
  { src: '/images/lift.png',             cat: 'Amenities', alt: 'Lift / Elevator',       label: 'Easy Access'     },
  { src: '/images/washing_machine.jpeg', cat: 'Amenities', alt: 'Washing Machine',       label: 'Laundry Ready'   },
  { src: '/images/garden.jpeg',          cat: 'Outdoor',   alt: 'Garden',                label: 'Breathe Fresh'   },
  { src: '/images/community1.jpeg',      cat: 'Community', alt: 'Community Vibes',       label: 'Your Squad'      },
  { src: '/images/community2.jpeg',      cat: 'Community', alt: 'Social Life',           label: 'Good Times'      },
  { src: '/images/community3.jpeg',      cat: 'Community', alt: 'Events',                label: 'Always On'       },
  { src: '/images/community4.jpeg',      cat: 'Community', alt: 'Collab',                label: 'Work Together'   },
  { src: '/images/community5.jpeg',      cat: 'Community', alt: 'Celebrations',          label: 'Celebrate Life'  },
];

const CATS = ['All', 'Rooms', 'Exterior', 'Amenities', 'Community', 'Dining', 'Study', 'Outdoor'];
const CAT_COLORS = {
  All: '#FF6B00', Exterior: '#059669', Rooms: '#2563EB',
  Amenities: '#7C3AED', Dining: '#FF6B00', Study: '#0891B2',
  Outdoor: '#059669', Community: '#FF6B00',
};

/* ── Lightbox ─────────────────────────────────────────────── */
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 4000,
      background: 'rgba(4,6,12,0.97)', backdropFilter: 'blur(14px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }} role="dialog" aria-modal="true">
      <button onClick={onClose} aria-label="Close" style={{
        position: 'absolute', top: 18, right: 18,
        width: 40, height: 40, borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.2)',
        background: 'rgba(255,255,255,0.08)', color: '#fff',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div onClick={e => e.stopPropagation()} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <img src={item.src} alt={item.alt} style={{
          maxWidth: '88vw', maxHeight: '78vh', borderRadius: 16,
          objectFit: 'contain', boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
        }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            background: (CAT_COLORS[item.cat] || '#2563EB') + '30',
            color: CAT_COLORS[item.cat] || '#2563EB',
            borderRadius: 50, padding: '3px 14px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
          }}>{item.cat}</span>
          <span style={{ color: '#fff', fontWeight: 600, fontSize: 15 }}>{item.label}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────────── */
export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All');
  const [centerIdx, setCenterIdx] = useState(0);
  const [lightItem, setLightItem] = useState(null);

  const items = activeCat === 'All' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === activeCat);

  // Reset when category changes
  useEffect(() => { setCenterIdx(0); }, [activeCat]);

  const prev = useCallback(() => setCenterIdx(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setCenterIdx(i => Math.min(items.length - 1, i + 1)), [items.length]);

  // Keyboard nav
  useEffect(() => {
    const fn = (e) => {
      if (lightItem) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [prev, next, lightItem]);

  // Touch swipe
  let touchStartX = 0;
  const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) { dx > 0 ? next() : prev(); }
  };

  const canPrev = centerIdx > 0;
  const canNext = centerIdx < items.length - 1;

  // The 3 visible slots: left, center, right
  const leftItem   = items[centerIdx - 1] ?? null;
  const centerItem = items[centerIdx];
  const rightItem  = items[centerIdx + 1] ?? null;

  const NavBtn = ({ onClick, disabled, children, side }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={side === 'prev' ? 'Previous photo' : 'Next photo'}
      style={{
        position: 'absolute',
        [side === 'prev' ? 'left' : 'right']: 0,
        top: '50%', transform: 'translateY(-50%)',
        zIndex: 10,
        width: 48, height: 48, borderRadius: '50%',
        border: `1.5px solid ${disabled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.25)'}`,
        background: disabled ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(8px)',
        color: disabled ? 'rgba(255,255,255,0.2)' : '#fff',
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { if (!disabled) { e.currentTarget.style.background = 'rgba(255,107,0,0.85)'; e.currentTarget.style.borderColor = '#FF6B00'; } }}
      onMouseLeave={e => { e.currentTarget.style.background = disabled ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = disabled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.25)'; }}
    >
      {children}
    </button>
  );

  return (
    <section id="gallery" style={{ padding: '72px 0', background: '#0F172A', overflow: 'hidden' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
          <div>
            <span style={{
              display: 'inline-flex', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#A3E635',
              background: 'rgba(163,230,53,0.1)', padding: '5px 14px', borderRadius: 50, marginBottom: 12,
            }}>Gallery</span>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 0, letterSpacing: '-0.02em' }}>
              LIFE AT <span style={{ color: '#FF6B00' }}>RAIGAD HOUSE.</span>
            </h2>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, fontWeight: 500 }}>
            {centerIdx + 1} <span style={{ color: 'rgba(255,255,255,0.18)' }}>/</span> {items.length}
          </span>
        </div>

        {/* Category pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              padding: '6px 16px', borderRadius: 50, fontSize: 12, fontWeight: 700,
              border: `1.5px solid ${activeCat === cat ? CAT_COLORS[cat] : 'rgba(255,255,255,0.1)'}`,
              background: activeCat === cat ? CAT_COLORS[cat] : 'rgba(255,255,255,0.04)',
              color: activeCat === cat ? '#fff' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer', transition: 'all 0.18s',
            }}>{cat}</button>
          ))}
        </div>

        {/* 3-card stage */}
        <div
          style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 8 }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <NavBtn onClick={prev} disabled={!canPrev} side="prev">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </NavBtn>

          {/* Left side card */}
          <div style={{
            flex: '0 0 22%', borderRadius: 16, overflow: 'hidden',
            opacity: leftItem ? 0.38 : 0,
            transform: leftItem ? 'scale(0.88)' : 'scale(0.8)',
            transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
            cursor: leftItem ? 'pointer' : 'default',
            pointerEvents: leftItem ? 'auto' : 'none',
            filter: 'blur(1.5px)',
          }} onClick={() => leftItem && prev()}>
            {leftItem && (
              <img src={leftItem.src} alt={leftItem.alt} loading="lazy" decoding="async"
                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }} />
            )}
          </div>

          {/* Center card — FOCUSED */}
          <div style={{
            flex: '0 0 52%', borderRadius: 20, overflow: 'hidden',
            opacity: 1, transform: 'scale(1)',
            transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            position: 'relative', cursor: 'pointer',
            zIndex: 2,
          }} onClick={() => setLightItem(centerItem)}>
            <img src={centerItem.src} alt={centerItem.alt}
              loading="eager" decoding="async"
              style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />

            {/* Gradient */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(4,6,12,0.85) 0%, rgba(4,6,12,0.05) 55%, transparent 100%)',
            }} />

            {/* Category badge */}
            <div style={{
              position: 'absolute', top: 16, left: 16,
              background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', borderRadius: 50,
              padding: '4px 13px', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>{centerItem.cat}</div>

            {/* Expand icon */}
            <div style={{
              position: 'absolute', top: 16, right: 16,
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.13)', backdropFilter: 'blur(6px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
                <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
              </svg>
            </div>

            {/* Label */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px' }}>
              <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 20, color: '#fff', marginBottom: 4 }}>
                {centerItem.label}
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{centerItem.alt}</p>
            </div>
          </div>

          {/* Right side card */}
          <div style={{
            flex: '0 0 22%', borderRadius: 16, overflow: 'hidden',
            opacity: rightItem ? 0.38 : 0,
            transform: rightItem ? 'scale(0.88)' : 'scale(0.8)',
            transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
            cursor: rightItem ? 'pointer' : 'default',
            pointerEvents: rightItem ? 'auto' : 'none',
            filter: 'blur(1.5px)',
          }} onClick={() => rightItem && next()}>
            {rightItem && (
              <img src={rightItem.src} alt={rightItem.alt} loading="lazy" decoding="async"
                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }} />
            )}
          </div>

          <NavBtn onClick={next} disabled={!canNext} side="next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </NavBtn>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
          <button
            onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '11px 28px', borderRadius: 50, fontSize: 14, fontWeight: 700,
              background: '#FF6B00', color: '#fff', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s',
              boxShadow: '0 6px 20px rgba(255,107,0,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e55f00'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FF6B00'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Visit to See in Person
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      {lightItem && <Lightbox item={lightItem} onClose={() => setLightItem(null)} />}

      <style>{`
        @media (max-width: 640px) {
          #gallery .container > div:nth-child(3) > div:first-of-type,
          #gallery .container > div:nth-child(3) > div:last-of-type { display: none !important; }
          #gallery .container > div:nth-child(3) > div:nth-child(3) { flex: 0 0 100% !important; }
        }
      `}</style>
    </section>
  );
}
