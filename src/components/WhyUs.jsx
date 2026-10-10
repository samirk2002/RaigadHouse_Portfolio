const FEATURES = [
  {
    title: 'Co-ed PG',
    desc: 'Open for both boys and girls with separate floors and shared common areas.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/>
      </svg>
    ),
  },
  {
    title: 'Fast Wi-Fi',
    desc: 'Free high-speed Wi-Fi available 24/7 in every room.',
    color: '#2563EB',
    bg: '#EFF6FF',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <circle cx="12" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Chill Zones',
    desc: 'Dedicated lounge and recreation areas to relax and meet people.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    title: 'Safe & Secure',
    desc: '24/7 security guards, CCTV surveillance and smart door access.',
    color: '#059669',
    bg: '#ECFDF5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: 'Housekeeping',
    desc: 'Regular cleaning and maintenance so you never have to worry.',
    color: '#2563EB',
    bg: '#EFF6FF',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: 'Food Options',
    desc: 'Optional meal plans with fresh, hygienic home-style food daily.',
    color: '#FF6B00',
    bg: '#FFF7ED',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        <line x1="6" y1="1" x2="6" y2="4"/>
        <line x1="10" y1="1" x2="10" y2="4"/>
        <line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    title: 'Power Backup',
    desc: 'Uninterrupted power supply so you stay connected round the clock.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Recreation',
    desc: 'Gaming consoles, smart TV lounge and entertainment spaces.',
    color: '#059669',
    bg: '#ECFDF5',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <path d="M12 12h.01"/><path d="M7 12h.01"/>
        <path d="M17 10v4"/><path d="M15 12h4"/>
      </svg>
    ),
  },
];

function FeatureCard({ icon, title, desc, color, bg }) {
  return (
    <div
      style={{
        background: '#fff', borderRadius: 18, padding: '24px 22px',
        border: '1.5px solid #F3F4F6',
        boxShadow: '0 2px 12px rgba(16,24,40,0.05)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        display: 'flex', flexDirection: 'column', gap: 14,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = `0 16px 40px ${color}18`;
        e.currentTarget.style.borderColor = `${color}35`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(16,24,40,0.05)';
        e.currentTarget.style.borderColor = '#F3F4F6';
      }}
    >
      {/* Icon box */}
      <div style={{
        width: 52, height: 52, borderRadius: 15,
        background: bg, color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#101828', marginBottom: 6 }}>{title}</h3>
        <p style={{ fontSize: 13.5, color: '#6B7280', lineHeight: 1.65 }}>{desc}</p>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="section grey-bg">
      <div className="container">

        {/* Co-ed banner */}
        <div style={{
          background: 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
          border: '1.5px solid #C7D2FE', borderRadius: 16,
          padding: '14px 24px', marginBottom: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 28, flexWrap: 'wrap',
        }}>
          {[
            { icon: '♂️', text: 'Boys Accommodation', color: '#2563EB' },
            { icon: '♀️', text: 'Girls Accommodation', color: '#7C3AED' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, text: 'Separate Floors', color: '#059669' },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, text: 'Shared Common Areas', color: '#FF6B00' },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: item.color, display: 'flex' }}>{item.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="section-label">Why Raigad House</span>
          <h2 className="section-title">A <span className="accent-blue">Home</span> You'll Love to Stay In</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Everything you need to live, work, relax and connect — for boys and girls both.</p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 18 }}>
          {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
        </div>
      </div>
    </section>
  );
}
