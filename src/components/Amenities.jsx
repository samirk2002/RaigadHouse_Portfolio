import { useState } from 'react';
import { AMENITIES } from '../data/config';

const CATEGORY_COLORS = {
  Room: '#2563EB',
  Fitness: '#FF6B00',
  Tech: '#7C3AED',
  Safety: '#059669',
  Lifestyle: '#A3E635',
};

export default function AmenitiesSection() {
  const [active, setActive] = useState('Room');
  const categories = Object.keys(AMENITIES);

  return (
    <section id="amenities" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label purple">Amenities</span>
          <h2 className="section-title">EVERYTHING <span className="accent-blue">INCLUDED.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>All the essentials and more, built into your stay.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '10px 20px', borderRadius: 50, fontSize: 14, fontWeight: 600,
              border: `2px solid ${active === cat ? CATEGORY_COLORS[cat] : '#E5E7EB'}`,
              background: active === cat ? CATEGORY_COLORS[cat] : '#fff',
              color: active === cat ? '#fff' : '#374151',
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 16, maxWidth: 800, margin: '0 auto',
        }}>
          {AMENITIES[active].map(item => (
            <div key={item.label} style={{
              background: '#F9FAFB', borderRadius: 14, padding: '20px',
              display: 'flex', alignItems: 'center', gap: 14,
              border: `1px solid ${CATEGORY_COLORS[active]}20`,
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = `${CATEGORY_COLORS[active]}08`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F9FAFB'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#101828' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
