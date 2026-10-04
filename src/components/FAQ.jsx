import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/config';

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 14, overflow: 'hidden',
      border: `1px solid ${open ? '#2563EB' : '#E5E7EB'}`,
      transition: 'border-color 0.2s ease',
      marginBottom: 8,
    }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: '#101828', lineHeight: 1.4 }}>{q}</span>
        <ChevronDown size={18} color="#6B7280" style={{
          flexShrink: 0, transition: 'transform 0.3s ease',
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
        }} />
      </button>
      <div style={{
        maxHeight: open ? '200px' : '0', overflow: 'hidden',
        transition: 'max-height 0.35s ease',
      }}>
        <p style={{ padding: '0 24px 20px', color: '#6B7280', lineHeight: 1.7, fontSize: 15 }}>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
          <div>
            <span className="section-label">FAQ</span>
            <h2 className="section-title">GOT <span className="accent-blue">QUESTIONS?</span></h2>
            <p style={{ color: '#6B7280', lineHeight: 1.7, marginBottom: 32 }}>
              Everything you need to know about living at Raigad House.
            </p>
            <button className="btn btn-primary"
              onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}>
              Ask Us Anything
            </button>
          </div>
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #faq .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
