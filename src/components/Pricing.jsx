import { PRICING_COMPARE } from '../data/config';

const PLAN_COLORS = ['#2563EB', '#FF6B00', '#7C3AED'];
const PLANS = ['Single', 'Double', 'Triple'];

export default function Pricing() {
  return (
    <section className="section grey-bg">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-label">Pricing</span>
          <h2 className="section-title">TRANSPARENT <span className="accent-blue">PRICING.</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>No hidden charges. What you see is what you pay.</p>
        </div>

        <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(16,24,40,0.08)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#101828' }}>
            <div style={{ padding: '20px 24px', color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: 600 }}>Feature</div>
            {PLANS.map((plan, i) => (
              <div key={plan} style={{ padding: '20px 16px', textAlign: 'center' }}>
                <div style={{
                  display: 'inline-block', background: PLAN_COLORS[i],
                  color: '#fff', borderRadius: 8, padding: '6px 16px',
                  fontSize: 14, fontWeight: 700,
                }}>{plan}</div>
              </div>
            ))}
          </div>

          {/* Rows */}
          {PRICING_COMPARE.map((row, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
              background: i % 2 === 0 ? '#fff' : '#F9FAFB',
              borderBottom: '1px solid #F3F4F6',
            }}>
              <div style={{ padding: '16px 24px', fontSize: 14, fontWeight: 500, color: '#374151' }}>{row.feature}</div>
              {[row.single, row.double, row.triple].map((val, j) => (
                <div key={j} style={{ padding: '16px', textAlign: 'center', fontSize: 14, fontWeight: 600, color: '#101828' }}>
                  {val}
                </div>
              ))}
            </div>
          ))}

          {/* CTA row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '20px 0', background: '#F9FAFB' }}>
            <div style={{ padding: '0 24px', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 14, color: '#6B7280' }}>Ready to move in?</span>
            </div>
            {PLANS.map((plan, i) => (
              <div key={plan} style={{ padding: '0 16px', textAlign: 'center' }}>
                <button
                  className="btn"
                  onClick={() => document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: PLAN_COLORS[i], color: '#fff',
                    padding: '10px 16px', fontSize: 13, borderRadius: 10, width: '100%', justifyContent: 'center',
                  }}
                >
                  Book {plan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          #pricing-table { overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
