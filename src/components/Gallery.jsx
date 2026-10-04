import { useState, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

const GALLERY_ITEMS = [
  { src: '/images/building.png',         cat: 'Exterior',  alt: 'Raigad House Building',  label: 'Your New Home' },
  { src: '/images/master_bedroom.jpeg',  cat: 'Rooms',     alt: 'Master Bedroom',         label: 'Your Private Space' },
  { src: '/images/bedroom.jpeg',         cat: 'Rooms',     alt: 'Standard Bedroom',       label: 'Clean & Cozy' },
  { src: '/images/gallery_bedroom.jpeg', cat: 'Rooms',     alt: 'Gallery Bedroom',        label: 'Fully Furnished' },
  { src: '/images/washroom.jpeg',        cat: 'Rooms',     alt: 'Washroom',               label: 'Spotless Clean' },
  { src: '/images/study.jpeg',           cat: 'Study',     alt: 'Study Area',             label: 'Focus Zone' },
  { src: '/images/cafeteria.jpeg',       cat: 'Dining',    alt: 'Cafeteria',              label: 'Eat Together' },
  { src: '/images/smarttv.jpeg',         cat: 'Amenities', alt: 'Smart TV Lounge',        label: 'Chill Zone' },
  { src: '/images/lift.jpeg',            cat: 'Amenities', alt: 'Lift / Elevator',        label: 'Easy Access' },
  { src: '/images/washing_machine.jpeg', cat: 'Amenities', alt: 'Washing Machine',        label: 'Laundry Ready' },
  { src: '/images/garden.jpeg',          cat: 'Outdoor',   alt: 'Garden',                 label: 'Breathe Fresh' },
  { src: '/images/community1.jpeg',      cat: 'Community', alt: 'Community Vibes',        label: 'Your Squad' },
  { src: '/images/community2.jpeg',      cat: 'Community', alt: 'Social Life',            label: 'Good Times' },
  { src: '/images/community3.jpeg',      cat: 'Community', alt: 'Events',                 label: 'Always On' },
  { src: '/images/community4.jpeg',      cat: 'Community', alt: 'Collab',                 label: 'Work Together' },
  { src: '/images/community5.jpeg',      cat: 'Community', alt: 'Celebrations',           label: 'Celebrate Life' },
];

const CATS = ['All', 'Exterior', 'Rooms', 'Amenities', 'Dining', 'Study', 'Outdoor', 'Community'];

const CAT_COLORS = {
  All: '#101828', Exterior: '#059669', Rooms: '#2563EB',
  Amenities: '#7C3AED', Dining: '#FF6B00', Study: '#2563EB',
  Outdoor: '#059669', Community: '#FF6B00',
};

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const scrollRef = useRef(null);

  const items = activeCat === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === activeCat);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
  };

  return (
    <section id="gallery" style={{ padding: '96px 0', background: '#fff', overflow: 'hidden' }}>

      {/* Header */}
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
          <div>
            <span className="section-label">Gallery</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              LIFE AT <span className="accent-blue">Raigad House.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            {['\u2190', '\u2192'].map((arrow, i) => (
              <button key={i} onClick={() => scroll(i === 0 ? -1 : 1)}
                aria-label={i === 0 ? 'Scroll left' : 'Scroll right'}
                style={{
                  width: 48, height: 48, borderRadius: '50%', border: '2px solid #E5E7EB',
                  background: '#fff', fontSize: 18, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#101828'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#101828'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#101828'; e.currentTarget.style.borderColor = '#E5E7EB'; }}
              >{arrow}</button>
            ))}
          </div>
        </div>

        {/* Category pills */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {CATS.map(cat => (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              padding: '8px 20px', borderRadius: 50, fontSize: 13, fontWeight: 600,
              border: `2px solid ${activeCat === cat ? CAT_COLORS[cat] : '#E5E7EB'}`,
              background: activeCat === cat ? CAT_COLORS[cat] : '#fff',
              color: activeCat === cat ? '#fff' : '#6B7280',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex', gap: 16,
          overflowX: 'auto', overflowY: 'visible',
          scrollSnapType: 'x mandatory',
          paddingLeft: 'max(24px, calc((100vw - 1200px) / 2))',
          paddingRight: 'max(24px, calc((100vw - 1200px) / 2))',
          paddingBottom: 8,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {items.map((item, i) => {
          const isHovered = hoveredIdx === i;

          return (
            <div
              key={`${activeCat}-${i}`}
              onClick={() => setLightbox(item)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                flexShrink: 0,
                scrollSnapAlign: 'start',
                width: 260,
                height: 340,
                borderRadius: 20,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
                transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: isHovered ? '0 24px 48px rgba(16,24,40,0.22)' : '0 4px 20px rgba(16,24,40,0.08)',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.5s ease',
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                }}
              />

              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,14,23,0.82) 0%, rgba(10,14,23,0.1) 55%, transparent 100%)',
              }} />

              <div style={{
                position: 'absolute', top: 14, left: 14,
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff', borderRadius: 50,
                padding: '4px 12px', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>
                {item.cat}
              </div>

              <div style={{
                position: 'absolute', top: 14, right: 14,
                width: 32, height: 32, borderRadius: '50%', background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'scale(1)' : 'scale(0.6)',
                transition: 'all 0.3s ease',
              }}>
                <ArrowUpRight size={16} color="#101828" />
              </div>

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px' }}>
                <p style={{
                  fontFamily: 'Space Grotesk', fontWeight: 700,
                  fontSize: 18, color: '#fff', lineHeight: 1.2, marginBottom: 4,
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontSize: 12, color: 'rgba(255,255,255,0.6)',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'all 0.3s ease 0.05s',
                }}>
                  {item.alt}
                </p>
              </div>
            </div>
          );
        })}

        {/* End CTA card */}
        <div
          onClick={() => setActiveCat('All')}
          style={{
            flexShrink: 0, scrollSnapAlign: 'start',
            width: 200, height: 320, borderRadius: 20,
            background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12,
            cursor: 'pointer', transition: 'transform 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ fontSize: 36 }}>&#128247;</div>
          <p style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 16, color: '#fff', textAlign: 'center', padding: '0 20px', lineHeight: 1.3 }}>
            See All Photos
          </p>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ArrowUpRight size={18} color="#fff" />
          </div>
        </div>
      </div>

      <style>{`#gallery div::-webkit-scrollbar { display: none; }`}</style>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 3000,
            background: 'rgba(5,8,15,0.95)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24, backdropFilter: 'blur(12px)',
          }}
          onClick={() => setLightbox(null)}
          role="dialog" aria-modal="true" aria-label="Image lightbox"
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: 20, right: 20,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%', width: 44, height: 44,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
            aria-label="Close"
          >
            <X size={18} color="#fff" />
          </button>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
            onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src} alt={lightbox.alt}
              style={{
                maxWidth: '88vw', maxHeight: '78vh',
                borderRadius: 20, objectFit: 'contain',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                background: CAT_COLORS[lightbox.cat] + '22',
                color: CAT_COLORS[lightbox.cat],
                borderRadius: 50, padding: '4px 14px',
                fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{lightbox.cat}</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{lightbox.alt}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
