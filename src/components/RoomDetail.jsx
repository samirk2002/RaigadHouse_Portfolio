import { X, Check, ArrowRight } from 'lucide-react';

export default function RoomDetail({ room, onClose, onEnquire }) {
  if (!room) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(16,24,40,0.65)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${room.type} room details`}
    >
      <div
        style={{
          background: '#fff', borderRadius: 20, width: '100%', maxWidth: 680,
          maxHeight: '92vh', overflowY: 'auto',
          boxShadow: '0 24px 80px rgba(16,24,40,0.22)',
          margin: 'auto',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: 220 }}>
          <img
            src={room.image}
            alt={`${room.type} room at Raigad House`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px 20px 0 0', display: 'block' }}
            loading="eager"
            decoding="async"
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(to top, rgba(16,24,40,0.45) 0%, transparent 60%)',
          }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 12, right: 12,
              background: 'rgba(255,255,255,0.92)', border: 'none', borderRadius: '50%',
              width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
          {/* Room label on image */}
          <div style={{
            position: 'absolute', bottom: 14, left: 16,
            color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '0.06em',
          }}>
            {room.type.toUpperCase()} ROOM
          </div>
        </div>

        <div style={{ padding: '24px' }}>
          {/* Title row */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: room.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
              Raigad House · {room.type}
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 5vw, 28px)', fontWeight: 700, marginBottom: 4 }}>{room.type} Room</h2>
            <p style={{ color: '#6B7280', fontSize: 14 }}>{room.tagline}</p>
          </div>

          {/* Pricing card — full width on mobile */}
          <div style={{
            background: `linear-gradient(135deg, ${room.color}, ${room.color}cc)`,
            borderRadius: 14, padding: '20px', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16, marginBottom: 24,
          }}>
            <div>
              <div style={{ fontSize: 11, opacity: 0.8, fontWeight: 500, marginBottom: 4 }}>STARTING FROM</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, lineHeight: 1 }}>{room.price}</div>
              <div style={{ fontSize: 13, opacity: 0.75 }}>/month</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 140 }}>
              <button
                className="btn btn-white"
                style={{ justifyContent: 'center', fontSize: 14, padding: '11px 20px', width: '100%' }}
                onClick={onEnquire}
              >
                Check Availability
              </button>
              <button
                className="btn"
                style={{
                  justifyContent: 'center', fontSize: 14, padding: '11px 20px', width: '100%',
                  background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)',
                }}
                onClick={onEnquire}
              >
                Book a Visit
              </button>
            </div>
          </div>

          {/* Details grid — 2 cols on desktop, 1 col on mobile */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10, marginBottom: 24 }}>
            {[
              ['Monthly Rent', room.price],
              ['Security Deposit', room.deposit],
              ['Maintenance', 'Included'],
              ['Electricity', 'Actual usage'],
              ['Food', 'Optional add-on'],
              ['Availability', 'Available Now'],
            ].map(([k, v]) => (
              <div key={k} style={{ background: '#F9FAFB', borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500, marginBottom: 4 }}>{k}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#101828' }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>What's Included</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {room.features.map(f => (
              <span key={f} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: `${room.color}10`, color: room.color,
                borderRadius: 50, padding: '6px 12px', fontSize: 13, fontWeight: 500,
              }}>
                <Check size={12} strokeWidth={3} /> {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          [role="dialog"] > div { border-radius: 16px !important; }
        }
      `}</style>
    </div>
  );
}
