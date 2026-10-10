import { useState } from 'react';
import { FAQS } from '../data/config';

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{
      borderRadius: 12, overflow: 'hidden',
      border: `1.5px solid ${open ? '#2563EB' : '#E5E7EB'}`,
      transition: 'border-color 0.2s',
      marginBottom: 8,
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px', background: open ? 'rgba(37,99,235,0.03)' : '#fff',
          border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12,
          transition: 'background 0.2s',
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#101828', lineHeight: 1.4 }}>{q}</span>
        <span style={{
          flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
          background: open ? '#2563EB' : '#F3F4F6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.25s',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? '#fff' : '#6B7280'} strokeWidth="3" strokeLinecap="round">
            <polyline points={open ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
          </svg>
        </span>
      </button>
      <div style={{ maxHeight: open ? '300px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
        <p style={{ padding: '0 20px 16px', color: '#6B7280', lineHeight: 1.7, fontSize: 14 }}>{a}</p>
      </div>
    </div>
  );
}

const INITIAL_COUNT = 5;

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  const [showAll, setShowAll]  = useState(false);

  const visible = showAll ? FAQS : FAQS.slice(0, INITIAL_COUNT);

  return (
    <section id="faq" style={{ padding: '72px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }} className="faq-grid">
          {/* Left */}
          <div style={{ position: 'sticky', top: 80 }}>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">GOT <span className="accent-blue">QUESTIONS?</span></h2>
            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
              Everything you need to know about living at Raigad House.
            </p>
            <div style={{ background: '#F9FAFB', borderRadius: 14, padding: '20px', border: '1px solid #E5E7EB' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#101828', marginBottom: 12 }}>Still have questions?</div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '11px' }}
                onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}>
                Ask Us Anything
              </button>
              <a href="https://wa.me/917218442254?text=Hi! I have a question about Raigad House."
                target="_blank" rel="noopener noreferrer"
                className="btn" style={{
                  width: '100%', justifyContent: 'center', fontSize: 13, padding: '11px',
                  marginTop: 8, background: '#25D366', color: '#fff',
                }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.504 3.58 1.38 5.065L2.05 21.95l5.02-1.312A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zM8.647 7.5c-.2 0-.52.075-.793.375-.27.3-1.04 1.016-1.04 2.475s1.065 2.872 1.213 3.072c.149.2 2.066 3.273 5.08 4.461.71.272 1.263.434 1.694.556.712.202 1.36.173 1.872.105.571-.075 1.758-.719 2.007-1.413.248-.694.248-1.288.173-1.413-.074-.124-.273-.198-.572-.347-.298-.15-1.758-.868-2.031-.967-.273-.1-.472-.149-.671.15-.198.298-.77.967-.943 1.166-.174.198-.348.223-.647.074-.298-.149-1.26-.464-2.4-1.48-.887-.79-1.485-1.766-1.659-2.065-.174-.298-.018-.46.13-.608.134-.134.298-.348.447-.522.15-.174.2-.298.298-.497.1-.198.05-.372-.025-.521-.074-.15-.67-1.613-.917-2.207-.242-.579-.487-.5-.671-.51a12.07 12.07 0 0 0-.572-.01z"/></svg>
                Chat With Us
              </a>
            </div>
          </div>

          {/* Right */}
          <div>
            {visible.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}

            {!showAll && FAQS.length > INITIAL_COUNT && (
              <button
                onClick={() => setShowAll(true)}
                style={{
                  width: '100%', marginTop: 8, padding: '14px',
                  background: '#F9FAFB', border: '1.5px dashed #D1D5DB',
                  borderRadius: 12, cursor: 'pointer', fontSize: 14, fontWeight: 600,
                  color: '#6B7280', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.color = '#2563EB'; e.currentTarget.style.background = 'rgba(37,99,235,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#D1D5DB'; e.currentTarget.style.color = '#6B7280'; e.currentTarget.style.background = '#F9FAFB'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
                Show {FAQS.length - INITIAL_COUNT} more questions
              </button>
            )}

            {showAll && (
              <button
                onClick={() => { setShowAll(false); setOpenIdx(0); }}
                style={{
                  width: '100%', marginTop: 8, padding: '12px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 13, color: '#9CA3AF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>
                Show less
              </button>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .faq-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
