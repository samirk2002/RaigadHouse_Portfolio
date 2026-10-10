import { Check, ArrowRight } from 'lucide-react';
import { ROOMS } from '../data/config';

function RoomCard({ room, onSelect }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 20, overflow: 'hidden',
      boxShadow: room.popular ? `0 8px 40px ${room.color}25` : '0 4px 20px rgba(16,24,40,0.08)',
      border: room.popular ? `2px solid ${room.color}` : '2px solid transparent',
      transition: 'all 0.3s ease', position: 'relative',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {room.popular && (
        <div style={{
          position: 'absolute', top: 16, right: 16, zIndex: 2,
          background: room.color, color: '#fff', borderRadius: 50,
          padding: '4px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>Popular</div>
      )}

      {/* Image */}
      <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
        <img src={room.image} alt={`Raigad House ${room.type} room`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          loading="lazy"
          decoding="async"
          width={400}
          height={200}
        />
        <div style={{
          position: 'absolute', bottom: 12, left: 12,
          background: 'rgba(16,24,40,0.7)', backdropFilter: 'blur(8px)',
          color: '#fff', borderRadius: 8, padding: '4px 10px',
          fontSize: 12, fontWeight: 600,
        }}>
          {room.type} Room
        </div>
      </div>

      <div style={{ padding: '24px' }}>
        {/* Step label */}
        <div style={{ fontSize: 11, fontWeight: 700, color: room.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
          {room.type === 'Single' ? '01' : room.type === 'Double' ? '02' : '03'} / {room.type.toUpperCase()}
        </div>

        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{room.type}</h3>
        <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 20 }}>{room.tagline}</p>

        {/* Features */}
        <ul style={{ listStyle: 'none', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {room.features.map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151' }}>
              <Check size={14} color={room.color} strokeWidth={3} />
              {f}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div style={{
          background: `${room.color}08`, borderRadius: 12, padding: '16px',
          marginBottom: 20, border: `1px solid ${room.color}15`,
        }}>
          <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500, marginBottom: 4 }}>Starting from</div>
          <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 700, color: room.color }}>
            {room.price}<span style={{ fontSize: 14, color: '#9CA3AF', fontWeight: 400 }}>/month</span>
          </div>
          <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 4 }}>Deposit: {room.deposit}</div>
        </div>

        <button
          className="btn"
          onClick={() => onSelect(room)}
          style={{
            width: '100%', justifyContent: 'center',
            background: room.popular ? room.color : 'transparent',
            color: room.popular ? '#fff' : room.color,
            border: `2px solid ${room.color}`,
            borderRadius: 12, padding: '14px',
          }}
        >
          Explore Room <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function Rooms({ onRoomSelect }) {
  return (
    <section id="rooms" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label orange">Our Rooms </span>
          <h2 className="section-title">PICK YOUR <span className="accent-orange">GAME PLAN.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Book Your Room &amp; Enjoy the Comfort.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {ROOMS.map(room => <RoomCard key={room.id} room={room} onSelect={onRoomSelect} />)}
        </div>
      </div>
    </section>
  );
}
