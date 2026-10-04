import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section style={{
      padding: '96px 0', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 50%, #7C3AED 100%)',
    }}>
      {/* Diagonal pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 60px)',
      }} />
      {/* Blobs */}
      <div style={{
        position: 'absolute', top: -80, right: -80, width: 400, height: 400,
        borderRadius: '50%', background: 'rgba(255,107,0,0.15)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -60, left: -60, width: 300, height: 300,
        borderRadius: '50%', background: 'rgba(163,230,53,0.1)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,255,255,0.15)', borderRadius: 50, padding: '6px 16px',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#fff',
          textTransform: 'uppercase', marginBottom: 24,
        }}>
          🔥 Limited Beds Available
        </div>

        <h2 style={{
          fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: '#fff',
          marginBottom: 16, lineHeight: 1.1,
        }}>
          READY FOR YOUR<br />
          <span style={{ color: '#FF6B00' }}>NEXT CHAPTER?</span>
        </h2>

        <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.8)', marginBottom: 40 }}>
          Your room is waiting.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-white" style={{ fontSize: 16, padding: '16px 36px' }}
            onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}>
            CHECK AVAILABILITY <ArrowRight size={18} />
          </button>
          <button className="btn" style={{
            fontSize: 16, padding: '16px 36px',
            background: 'rgba(255,255,255,0.15)', color: '#fff',
            border: '2px solid rgba(255,255,255,0.4)',
          }}
            onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}>
            BOOK A VISIT
          </button>
        </div>

        {/* Trust badges */}
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
          {['✅ No Brokerage', '✅ Instant Confirmation', '✅ Flexible Stay', '✅ 24/7 Support'].map(b => (
            <span key={b} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 500 }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
