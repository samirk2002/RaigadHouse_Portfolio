import { BRAND } from '../data/config';

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I'm interested in a room at Raigad House.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed', bottom: 32, right: 24, zIndex: 998,
        background: '#25D366', color: '#fff', borderRadius: 50,
        padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
        fontSize: 14, fontWeight: 700, textDecoration: 'none',
        transition: 'all 0.25s ease',
        animation: 'float 3s ease-in-out infinite',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.5)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.4)'; }}
      className="desktop-whatsapp"
    >
      <span style={{ fontSize: 20 }}>💬</span>
      WhatsApp Us
      <style>{`
        @media (max-width: 900px) { .desktop-whatsapp { display: none !important; } }
      `}</style>
    </a>
  );
}
