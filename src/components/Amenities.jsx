import { useState } from 'react';
import { AMENITIES } from '../data/config';

const ICONS = {
  // Room
  'Bed & Mattress':       <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>,
  'Wardrobe':             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/><circle cx="7" cy="12" r="1"/><circle cx="17" cy="12" r="1"/></svg>,
  'Study Table & Chair':  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18"/><path d="M3 9V5h18v4"/><path d="M7 9v10"/><path d="M17 9v10"/><path d="M5 19h6"/><path d="M13 19h6"/></svg>,
  'Attached Bathroom':    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" y1="5" x2="8" y2="7"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
  // Tech
  'Free Wi-Fi':           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>,
  'Smart TV':             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  'Charging Points':      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/><line x1="23" y1="13" x2="23" y2="11"/><polyline points="11 6 7 12 13 12 9 18"/></svg>,
  'Smart Access':         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>,
  // Safety
  'CCTV Surveillance':    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  '24/7 Security':        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  'Fire Safety':          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  'Emergency Support':    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
};

const CAT_META = {
  Room:   { color: '#2563EB', bg: '#EFF6FF', label: '🛏️ Room',    desc: 'Comfort in every corner' },
  Tech:   { color: '#7C3AED', bg: '#F5F3FF', label: '⚡ Tech',    desc: 'Stay connected always' },
  Safety: { color: '#059669', bg: '#ECFDF5', label: '🛡️ Safety', desc: 'Your peace of mind' },
};

export default function AmenitiesSection() {
  const [active, setActive] = useState('Room');
  const categories = Object.keys(AMENITIES);
  const meta = CAT_META[active] || { color: '#2563EB', bg: '#EFF6FF', desc: '' };

  return (
    <section id="amenities" style={{ padding: '72px 0', background: '#F9FAFB' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="section-label purple">Amenities</span>
          <h2 className="section-title">WHAT WE <span className="accent-blue">OFFER.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>All the essentials and more, built into your stay.</p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 36 }}>
          {categories.map(cat => {
            const m = CAT_META[cat] || { color: '#2563EB', bg: '#EFF6FF' };
            const isActive = active === cat;
            return (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: '10px 22px', borderRadius: 50, fontSize: 14, fontWeight: 700,
                border: `2px solid ${isActive ? m.color : '#E5E7EB'}`,
                background: isActive ? m.color : '#fff',
                color: isActive ? '#fff' : '#6B7280',
                cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: 7,
              }}>
                {m.label || cat}
              </button>
            );
          })}
        </div>

        {/* Category description */}
        <p style={{ textAlign: 'center', color: meta.color, fontWeight: 600, fontSize: 14, marginBottom: 28, letterSpacing: '0.02em' }}>
          {meta.desc}
        </p>

        {/* Amenity cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 14, maxWidth: 900, margin: '0 auto',
        }}>
          {AMENITIES[active].map((item, i) => (
            <div key={item.label} style={{
              background: '#fff', borderRadius: 16, padding: '22px 20px',
              display: 'flex', flexDirection: 'column', gap: 14,
              border: `1.5px solid ${meta.bg}`,
              boxShadow: '0 2px 12px rgba(16,24,40,0.05)',
              transition: 'all 0.22s ease',
              animationDelay: `${i * 40}ms`,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${meta.color}18`;
                e.currentTarget.style.borderColor = `${meta.color}40`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(16,24,40,0.05)';
                e.currentTarget.style.borderColor = meta.bg;
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: meta.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: meta.color,
              }}>
                {ICONS[item.label] || <span style={{ fontSize: 22 }}>{item.icon}</span>}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#101828', marginBottom: 3 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500 }}>Included</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div style={{
          marginTop: 40, display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap',
          background: '#fff', borderRadius: 14, border: '1px solid #E5E7EB',
          overflow: 'hidden', maxWidth: 700, margin: '40px auto 0',
        }}>
          {[
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>, text: '15+ Amenities' },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: '24/7 Available' },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: 'All Inclusive' },
          ].map((b, i) => (
            <div key={b.text} style={{
              flex: 1, minWidth: 140, padding: '14px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              borderRight: i < 2 ? '1px solid #E5E7EB' : 'none',
              fontSize: 13, fontWeight: 600, color: '#374151',
            }}>
              {b.icon} {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
