export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#fff', padding: '24px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: -120, right: -120, width: 500, height: 500,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80, width: 400, height: 400,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 560 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 40 }}>
          <img src="/images/logo_png.png" alt="Raigad House Logo" style={{ height: 44, width: 44, objectFit: 'contain', borderRadius: 8 }} />
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, color: '#101828' }}>
            Raigad<span style={{ color: '#2563EB' }}>House</span>
          </span>
        </div>

        {/* 404 number */}
        <div style={{
          fontFamily: 'Space Grotesk', fontWeight: 800,
          fontSize: 'clamp(100px, 20vw, 160px)', lineHeight: 1,
          background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: 8, letterSpacing: '-0.04em',
        }}>
          404
        </div>

        <h1 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 700, color: '#101828', marginBottom: 12 }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.7, marginBottom: 40 }}>
          Looks like this room doesn't exist. The page you're looking for may have been moved or removed.
        </p>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <a href="/" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
            🏠 Back to Home
          </a>
          <a
            href="/#enquiry"
            className="btn btn-outline"
            style={{ fontSize: 15, padding: '14px 28px' }}
          >
            Check Availability
          </a>
        </div>

        {/* Quick links */}
        <div style={{
          background: '#F5F7FA', borderRadius: 16, padding: '24px 28px',
          border: '1px solid #E5E7EB',
        }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Quick Links
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'Rooms', href: '/#rooms' },
              { label: 'Amenities', href: '/#amenities' },
              { label: 'Gallery', href: '/#gallery' },
              { label: 'Location', href: '/#location' },
              { label: 'FAQ', href: '/#faq' },
            ].map(l => (
              <a key={l.label} href={l.href} style={{
                padding: '8px 18px', borderRadius: 50, fontSize: 13, fontWeight: 600,
                background: '#fff', border: '1.5px solid #E5E7EB', color: '#374151',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.color = '#2563EB'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.color = '#374151'; }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact strip */}
        <div style={{ marginTop: 32, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+917218442254" style={{ color: '#6B7280', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            📞 +91 72184 42254
          </a>
          <a href="mailto:raigadhouse@gmail.com" style={{ color: '#6B7280', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            ✉️ raigadhouse@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
