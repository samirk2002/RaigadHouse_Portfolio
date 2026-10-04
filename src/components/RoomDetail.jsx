import { X, Check, ArrowRight } from 'lucide-react';

export default function RoomDetail({ room, onClose, onEnquire }) {
  if (!room) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(16,24,40,0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24,
    }} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${room.type} room details`}>
      <div style={{
        background: '#fff', borderRadius: 24, maxWidth: 680, width: '100%',
        maxHeight: '90vh', overflow: 'auto',
        boxShadow: '0 24px 80px rgba(16,24,40,0.2)',
      }} onClick={e => e.stopPropagation()}>
        {/* Image */}
        <div style={{ position: 'relative', height: 280 }}>
          <img src={room.image} alt={`${room.type} room at Raigad House`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px 24px 0 0' }} />
          <button onClick={onClose} style={{
            position: 'absolute', top: 16, right: 16,
            background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%',
            width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: room.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                Raigad House {room.type}
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>{room.type} Room</h2>
              <p style={{ color: '#6B7280', marginBottom: 24 }}>{room.tagline}</p>

              {/* Details grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
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
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#101828' }}>{v}</div>
                  </div>
                ))}
              </div>

              <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>What's Included</h4>
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

            {/* Pricing card */}
            <div style={{
              background: `linear-gradient(135deg, ${room.color}, ${room.color}cc)`,
              borderRadius: 16, padding: '24px', color: '#fff', minWidth: 180, textAlign: 'center',
            }}>
              <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 8, fontWeight: 500 }}>STARTING FROM</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 700, lineHeight: 1 }}>{room.price}</div>
              <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 20 }}>/month</div>
              <button className="btn btn-white" style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '12px' }}
                onClick={onEnquire}>
                Check Availability
              </button>
              <button className="btn" style={{
                width: '100%', justifyContent: 'center', fontSize: 14, padding: '12px',
                marginTop: 8, background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)',
              }} onClick={onEnquire}>
                Book a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
