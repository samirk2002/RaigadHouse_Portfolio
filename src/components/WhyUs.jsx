import { useEffect, useRef } from 'react';

const FEATURES = [
  { icon: '&#9794;&#9792;', title: 'Co-ed PG', desc: 'Open for both boys and girls. Separate floors with shared common areas.', color: '#7C3AED' },
  { icon: '&#9889;', title: 'Fast Wi-Fi', desc: 'Stay connected with 400 Mbps high-speed internet.', color: '#2563EB' },
  { icon: '&#128715;', title: 'Chill Zones', desc: 'Relax, meet people and hang out in style.', color: '#7C3AED' },
  { icon: '&#128274;', title: 'Safe & Secure', desc: '24/7 security, CCTV and smart access for all residents.', color: '#059669' },
  { icon: '&#129529;', title: 'Housekeeping', desc: 'Clean spaces without the hassle.', color: '#2563EB' },
  { icon: '&#127857;', title: 'Food Options', desc: 'Convenient meal plans available.', color: '#FF6B00' },
  { icon: '&#128267;', title: 'Power Backup', desc: 'Stay connected when the power goes out.', color: '#7C3AED' },
  { icon: '&#127918;', title: 'Recreation', desc: 'Gaming and entertainment areas.', color: '#059669' },
];

function FeatureCard({ icon, title, desc, color, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, index * 80);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div ref={ref} style={{
      opacity: 0, transform: 'translateY(24px)', transition: 'all 0.5s ease',
      background: '#fff', borderRadius: 16, padding: '28px 24px',
      boxShadow: '0 2px 16px rgba(16,24,40,0.06)',
      border: '1px solid #F3F4F6',
      transition: 'all 0.5s ease',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(16,24,40,0.12)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(16,24,40,0.06)'; }}
    >
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: `${color}12`, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: 24, marginBottom: 16,
        border: `1px solid ${color}20`,
      }} dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: '#101828' }}>{title}</h3>
      <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="section grey-bg">
      <div className="container">
        {/* Co-ed highlight banner */}
        <div style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
          border: '1px solid #C7D2FE', borderRadius: 16,
          padding: '16px 24px', marginBottom: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 32, flexWrap: 'wrap',
        }}>
          {[
            { emoji: '&#9794;&#65039;', text: 'Boys Accommodation', color: '#2563EB' },
            { emoji: '&#9792;&#65039;', text: 'Girls Accommodation', color: '#7C3AED' },
            { emoji: '&#127968;', text: 'Separate Floors', color: '#059669' },
            { emoji: '&#128101;', text: 'Shared Common Areas', color: '#FF6B00' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 20 }} dangerouslySetInnerHTML={{ __html: item.emoji }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: item.color }}>{item.text}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Why Raigad House</span>
          <h2 className="section-title">MORE THAN JUST A <span className="accent-blue">PG.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Everything you need to live, work, relax and connect — for boys and girls both.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} index={i} />)}
        </div>
      </div>
    </section>
  );
}
