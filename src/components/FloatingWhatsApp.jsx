import { BRAND } from '../data/config';

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.58 1.38 5.065L2.05 21.95l5.02-1.312A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8.647 7.5c-.2 0-.52.075-.793.375-.27.3-1.04 1.016-1.04 2.475s1.065 2.872 1.213 3.072c.149.2 2.066 3.273 5.08 4.461.71.272 1.263.434 1.694.556.712.202 1.36.173 1.872.105.571-.075 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.273-.198-.572-.347-.298-.15-1.758-.868-2.031-.967-.273-.1-.472-.149-.671.15-.198.298-.77.967-.943 1.166-.174.198-.348.223-.647.074-.298-.149-1.26-.464-2.4-1.48-.887-.79-1.485-1.766-1.659-2.065-.174-.298-.018-.46.13-.608.134-.134.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.613-.917-2.207-.242-.579-.487-.5-.671-.51a12.07 12.07 0 0 0-.572-.01z"/>
  </svg>
);

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
      <span style={{ fontSize: 20, display: 'flex' }}><WhatsAppIcon size={22} /></span>
      Chat With Us
      <style>{`
        @media (max-width: 900px) { .desktop-whatsapp { display: none !important; } }
      `}</style>
    </a>
  );
}
