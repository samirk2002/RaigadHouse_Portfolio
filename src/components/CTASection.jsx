import { ArrowRight, Phone } from 'lucide-react';
import { BRAND } from '../data/config';

export default function CTASection() {
  return (
    <section style={{
      padding: '72px 0', position: 'relative', overflow: 'hidden',
      background: '#0F172A',
    }}>
      {/* Warm glow blobs */}
      <div style={{
        position: 'absolute', top: -120, right: -80, width: 480, height: 480,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -100, left: -60, width: 360, height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,107,0,0.15)', border: '1px solid rgba(255,107,0,0.3)',
          borderRadius: 50, padding: '6px 18px',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#FF6B00',
          textTransform: 'uppercase', marginBottom: 28,
        }}>
          🔥 Limited Beds Available
        </div>

        <h2 style={{
          fontSize: 'clamp(34px, 6vw, 62px)', fontWeight: 800, color: '#fff',
          marginBottom: 16, lineHeight: 1.1, letterSpacing: '-0.02em',
        }}>
          READY FOR YOUR<br />
          <span style={{ color: '#FF6B00' }}>NEXT CHAPTER?</span>
        </h2>

        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', marginBottom: 44, maxWidth: 480, margin: '0 auto 44px' }}>
          Your room is waiting. Join 200+ students &amp; professionals who call Raigad House home.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
          <button
            className="btn btn-orange"
            style={{ fontSize: 15, padding: '15px 34px', boxShadow: '0 8px 28px rgba(255,107,0,0.35)' }}
            onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}
          >
            CHECK AVAILABILITY <ArrowRight size={17} />
          </button>
          <a
            href={`tel:${BRAND.phone}`}
            className="btn"
            style={{
              fontSize: 15, padding: '15px 34px',
              background: 'rgba(255,255,255,0.08)', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.2)',
            }}
          >
            <Phone size={16} /> CALL US NOW
          </a>
        </div>

        {/* Trust badges */}
        <div style={{
          display: 'inline-flex', gap: 0, flexWrap: 'wrap', justifyContent: 'center',
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14, overflow: 'hidden',
        }}>
          {[' No Brokerage', ' Instant Confirmation', ' Flexible Stay', ' 24/7 Support'].map((b, i) => (
            <div key={b} style={{
              padding: '14px 24px', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.75)',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
