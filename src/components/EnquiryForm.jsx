import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, ArrowLeft, Check, Loader } from 'lucide-react';
import { BRAND } from '../data/config';

// ============================================================
// EMAILJS CONFIGURATION
// 1. Sign up free at https://emailjs.com
// 2. Add Email Service → connect raigadhouse@gmail.com
// 3. Create Email Template (use variable names below)
// 4. Replace the three values below with your actual IDs
// ============================================================
const EMAILJS_SERVICE_ID  = 'service_wi613zs';
const EMAILJS_TEMPLATE_ID = 'template_0xsau3n';
const EMAILJS_PUBLIC_KEY  = '01Fy6ZoH4nmJxZLb0';

// Template variables sent to EmailJS — map these in your template:
// {{from_name}}  {{from_email}}  {{phone}}  {{whatsapp}}
// {{gender}}     {{age}}         {{occupation}}  {{college_company}}
// {{room_type}}  {{budget}}      {{ac}}     {{food}}
// {{move_in}}    {{stay}}        {{location}} {{source}}  {{message}}
// {{enquiry_date}}  {{to_email}}

// Sanitize input — strip HTML tags and trim
const sanitize = (val) => String(val).replace(/<[^>]*>/g, '').trim();

// Rate limit — max 3 submissions per 10 minutes per session
const RATE_KEY = 'rh_submissions';
const isRateLimited = () => {
  try {
    const data = JSON.parse(sessionStorage.getItem(RATE_KEY) || '{"count":0,"ts":0}');
    if (Date.now() - data.ts > 10 * 60 * 1000) return false;
    return data.count >= 3;
  } catch { return false; }
};
const recordSubmission = () => {
  try {
    const data = JSON.parse(sessionStorage.getItem(RATE_KEY) || '{"count":0,"ts":0}');
    const ts = Date.now() - data.ts > 10 * 60 * 1000 ? Date.now() : data.ts;
    sessionStorage.setItem(RATE_KEY, JSON.stringify({ count: (Date.now() - data.ts > 10 * 60 * 1000 ? 1 : data.count + 1), ts }));
  } catch {}
};

const INITIAL = {
  name: '', phone: '', whatsapp: '', email: '',
  gender: '', age: '', occupationType: '',
  collegeOrCompany: '', roomPreference: '', budget: '',
  acRequired: '', foodRequired: '', moveInDate: '',
  stayDuration: '', currentLocation: '', source: '', message: '',
  consent: false,
  honeypot: '', // spam trap — must stay empty
};

const STEPS = [
  { num: '01', label: 'YOU',  title: 'ABOUT YOU',  sub: "Let's start with the basics." },
  { num: '02', label: 'ROOM', title: 'YOUR SPACE', sub: 'Tell us what you need.' },
  { num: '03', label: 'MOVE', title: 'MOVE-IN',    sub: 'Almost there!' },
];

function Field({ label, required, children, error }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>
        {label}{required && <span style={{ color: '#EF4444' }}> *</span>}
      </label>
      {children}
      {error && <span style={{ fontSize: 12, color: '#EF4444' }}>{error}</span>}
    </div>
  );
}

const inputStyle = (err) => ({
  padding: '12px 14px', borderRadius: 10, fontSize: 15,
  border: `1.5px solid ${err ? '#EF4444' : '#E5E7EB'}`,
  outline: 'none', width: '100%', fontFamily: 'inherit',
  transition: 'border-color 0.2s', background: '#fff',
});
const selectStyle = (err) => ({ ...inputStyle(err), appearance: 'none', cursor: 'pointer' });

export default function EnquiryForm({ defaultRoom }) {
  const [step, setStep]           = useState(0);
  const [data, setData]           = useState({ ...INITIAL, roomPreference: defaultRoom || '' });
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [sendError, setSendError] = useState('');

  const set = (k, v) => setData(d => ({ ...d, [k]: v }));
  const err = (k) => errors[k];

  const validate = () => {
    const e = {};
    if (step === 0) {
      const name = sanitize(data.name);
      if (!name) e.name = 'Name is required';
      else if (name.length < 2) e.name = 'Name must be at least 2 characters';
      else if (name.length > 60) e.name = 'Name is too long';
      else if (!/^[a-zA-Z\s'.'-]+$/.test(name)) e.name = 'Name can only contain letters';

      if (!/^[6-9]\d{9}$/.test(data.phone)) e.phone = 'Enter valid 10-digit Indian mobile number';

      if (data.whatsapp && !/^[6-9]\d{9}$/.test(data.whatsapp)) e.whatsapp = 'Enter valid 10-digit number';

      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) e.email = 'Enter a valid email address';

      if (data.age && (isNaN(data.age) || Number(data.age) < 16 || Number(data.age) > 45))
        e.age = 'Age must be between 16 and 45';

      if (!data.occupationType) e.occupationType = 'Please select one';
    }
    if (step === 1) {
      if (!data.roomPreference) e.roomPreference = 'Please select room type';
      if (!data.budget) e.budget = 'Please select budget';
    }
    if (step === 2) {
      if (!data.moveInDate) e.moveInDate = 'Please select move-in date';
      else {
        const selected = new Date(data.moveInDate);
        const today = new Date(); today.setHours(0,0,0,0);
        const maxDate = new Date(); maxDate.setFullYear(maxDate.getFullYear() + 1);
        if (selected < today) e.moveInDate = 'Move-in date cannot be in the past';
        else if (selected > maxDate) e.moveInDate = 'Move-in date cannot be more than 1 year ahead';
      }
      if (data.message && data.message.length > 500) e.message = 'Message cannot exceed 500 characters';
      if (!data.consent) e.consent = 'Please accept to continue';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate()) setStep(s => s + 1); };
  const back = () => setStep(s => s - 1);

  const submit = async () => {
    if (!validate()) return;
    // Honeypot check — bots fill hidden fields
    if (data.honeypot) return;
    // Rate limit check
    if (isRateLimited()) {
      setSendError('Too many submissions. Please wait 10 minutes before trying again.');
      return;
    }
    setSending(true);
    setSendError('');

    const templateParams = {
      to_email:      BRAND.email,
      from_name:     data.name,
      from_email:    data.email || 'Not provided',
      phone:         data.phone,
      whatsapp:      data.whatsapp || data.phone,
      gender:        data.gender || 'Not specified',
      age:           data.age || 'Not specified',
      occupation:    data.occupationType,
      college_company: data.collegeOrCompany || 'Not specified',
      room_type:     data.roomPreference,
      budget:        data.budget,
      ac:            data.acRequired || 'Not specified',
      food:          data.foodRequired || 'Not specified',
      move_in:       data.moveInDate,
      stay:          data.stayDuration || 'Not specified',
      location:      data.currentLocation || 'Not specified',
      source:        data.source || 'Not specified',
      message:       data.message || 'No message',
      enquiry_date:  new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      recordSubmission();
      setSubmitted(true);
    } catch (error) {
      setSendError('Could not send enquiry. Please call us directly or try again.');
    } finally {
      setSending(false);
    }
  };

  // ── SUCCESS SCREEN ──────────────────────────────────────────
  if (submitted) {
    return (
      <section id="enquiry" className="section diagonal-bg">
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            background: '#fff', borderRadius: 24, padding: '56px 40px',
            maxWidth: 500, margin: '0 auto', boxShadow: '0 24px 64px rgba(16,24,40,0.2)',
          }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%', background: '#DCFCE7',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', fontSize: 36,
            }}>&#127881;</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>You're In!</h2>
            <p style={{ color: '#6B7280', marginBottom: 8, lineHeight: 1.7 }}>
              Thanks, <strong>{data.name}</strong>! We've received your enquiry and our team will contact you shortly on <strong>{data.phone}</strong>.
            </p>
            <p style={{ color: '#9CA3AF', fontSize: 13, marginBottom: 28 }}>
              &#128231; A confirmation has been sent to <strong>{BRAND.email}</strong>
            </p>

            {/* Next steps */}
            <div style={{ background: '#F9FAFB', borderRadius: 14, padding: '20px', marginBottom: 28, textAlign: 'left' }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 12 }}>What happens next?</p>
              {[
                '&#128222; Our team calls you within 2 hours',
                '&#127968; We schedule a free property visit',
                '&#9989; You confirm your room & move in!',
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#2563EB', color: '#fff', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ fontSize: 13, color: '#374151' }} dangerouslySetInnerHTML={{ __html: s }} />
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I just submitted an enquiry for ${data.roomPreference} room at Raigad House.`}
                target="_blank" rel="noopener noreferrer"
                className="btn" style={{ background: '#25D366', color: '#fff', fontSize: 14 }}>
                &#128172; WhatsApp Us
              </a>
              <a href={`tel:${BRAND.phone}`} className="btn btn-outline" style={{ fontSize: 14 }}>
                &#128222; Call Now
              </a>
            </div>
            <button style={{ marginTop: 16, background: 'none', border: 'none', color: '#9CA3AF', fontSize: 13, cursor: 'pointer' }}
              onClick={() => { setSubmitted(false); setStep(0); setData({ ...INITIAL }); }}>
              Submit another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── FORM ────────────────────────────────────────────────────
  return (
    <section id="enquiry" className="section diagonal-bg">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, color: '#fff', marginBottom: 12 }}>
            READY TO <span style={{ color: '#FF6B00' }}>MOVE IN?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17 }}>
            Tell us a little about yourself and we'll help you find your space.
          </p>
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {/* Progress */}
          <div style={{ display: 'flex', marginBottom: 32, background: 'rgba(255,255,255,0.1)', borderRadius: 50, padding: 4 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{
                flex: 1, textAlign: 'center', padding: '10px 8px', borderRadius: 50,
                background: i === step ? '#fff' : 'transparent', transition: 'all 0.3s ease',
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: i === step ? '#2563EB' : i < step ? '#A3E635' : 'rgba(255,255,255,0.5)',
                }}>
                  {i < step ? '&#10003;' : s.num} &mdash; {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div style={{ background: '#fff', borderRadius: 24, padding: '40px', boxShadow: '0 24px 64px rgba(16,24,40,0.2)' }}>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#2563EB', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                Step {STEPS[step].num}
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{STEPS[step].title}</h3>
              <p style={{ color: '#6B7280', fontSize: 14 }}>{STEPS[step].sub}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

              {/* ── STEP 1 ── */}
              {step === 0 && <>
                <Field label="Full Name" required error={err('name')}>
                  <input style={inputStyle(err('name'))} value={data.name} placeholder="Your full name"
                    onChange={e => set('name', e.target.value)}
                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                    onBlur={e => e.target.style.borderColor = err('name') ? '#EF4444' : '#E5E7EB'} />
                </Field>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="Mobile Number" required error={err('phone')}>
                    <input style={inputStyle(err('phone'))} value={data.phone} placeholder="10-digit number"
                      onChange={e => set('phone', e.target.value)} type="tel" maxLength={10}
                      onFocus={e => e.target.style.borderColor = '#2563EB'}
                      onBlur={e => e.target.style.borderColor = err('phone') ? '#EF4444' : '#E5E7EB'} />
                  </Field>
                  <Field label="WhatsApp Number" error={err('whatsapp')}>
                    <input style={inputStyle()} value={data.whatsapp} placeholder="If different"
                      onChange={e => set('whatsapp', e.target.value)} type="tel" maxLength={10}
                      onFocus={e => e.target.style.borderColor = '#2563EB'}
                      onBlur={e => e.target.style.borderColor = '#E5E7EB'} />
                  </Field>
                </div>
                <Field label="Email Address" error={err('email')}>
                  <input style={inputStyle(err('email'))} value={data.email} placeholder="your@email.com"
                    onChange={e => set('email', e.target.value)} type="email"
                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                    onBlur={e => e.target.style.borderColor = err('email') ? '#EF4444' : '#E5E7EB'} />
                </Field>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="Gender">
                    <select style={selectStyle()} value={data.gender} onChange={e => set('gender', e.target.value)}>
                      <option value="">Select</option>
                      <option>Male</option><option>Female</option><option>Other</option>
                    </select>
                  </Field>
                  <Field label="Age">
                    <input style={inputStyle()} value={data.age} placeholder="e.g. 22"
                      onChange={e => set('age', e.target.value)} type="number" min={16} max={40}
                      onFocus={e => e.target.style.borderColor = '#2563EB'}
                      onBlur={e => e.target.style.borderColor = '#E5E7EB'} />
                  </Field>
                </div>
                <Field label="I am a..." required error={err('occupationType')}>
                  <select style={selectStyle(err('occupationType'))} value={data.occupationType} onChange={e => set('occupationType', e.target.value)}>
                    <option value="">Select</option>
                    <option value="Student">Student</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
              </>}

              {/* ── STEP 2 ── */}
              {step === 1 && <>
                <Field label="Preferred Room Type" required error={err('roomPreference')}>
                  <select style={selectStyle(err('roomPreference'))} value={data.roomPreference} onChange={e => set('roomPreference', e.target.value)}>
                    <option value="">Select room type</option>
                    <option value="Single">Single Room</option>
                    <option value="Double">Double Sharing</option>
                    <option value="Triple">Triple Sharing</option>
                  </select>
                </Field>
                <Field label="Monthly Budget" required error={err('budget')}>
                  <select style={selectStyle(err('budget'))} value={data.budget} onChange={e => set('budget', e.target.value)}>
                    <option value="">Select budget range</option>
                    <option value="Under 7000">Under &#8377;7,000</option>
                    <option value="7000-10000">&#8377;7,000 &ndash; &#8377;10,000</option>
                    <option value="10000-15000">&#8377;10,000 &ndash; &#8377;15,000</option>
                    <option value="Above 15000">Above &#8377;15,000</option>
                  </select>
                </Field>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="AC Required?">
                    <select style={selectStyle()} value={data.acRequired} onChange={e => set('acRequired', e.target.value)}>
                      <option value="">Select</option>
                      <option value="Yes">Yes</option><option value="No">No</option><option value="Flexible">Flexible</option>
                    </select>
                  </Field>
                  <Field label="Food Required?">
                    <select style={selectStyle()} value={data.foodRequired} onChange={e => set('foodRequired', e.target.value)}>
                      <option value="">Select</option>
                      <option value="Yes">Yes</option><option value="No">No</option><option value="Flexible">Flexible</option>
                    </select>
                  </Field>
                </div>
                <Field label="Current Location">
                  <input style={inputStyle()} value={data.currentLocation} placeholder="City / Area you're currently in"
                    onChange={e => set('currentLocation', e.target.value)}
                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                    onBlur={e => e.target.style.borderColor = '#E5E7EB'} />
                </Field>
              </>}

              {/* ── STEP 3 ── */}
              {step === 2 && <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="Preferred Move-in Date" required error={err('moveInDate')}>
                    <input style={inputStyle(err('moveInDate'))} value={data.moveInDate}
                      onChange={e => set('moveInDate', e.target.value)} type="date"
                      min={new Date().toISOString().split('T')[0]}
                      onFocus={e => e.target.style.borderColor = '#2563EB'}
                      onBlur={e => e.target.style.borderColor = err('moveInDate') ? '#EF4444' : '#E5E7EB'} />
                  </Field>
                  <Field label="Expected Stay Duration">
                    <select style={selectStyle()} value={data.stayDuration} onChange={e => set('stayDuration', e.target.value)}>
                      <option value="">Select</option>
                      <option value="3 months">3 months</option>
                      <option value="6 months">6 months</option>
                      <option value="1 year">1 year</option>
                      <option value="Long term">Long term</option>
                    </select>
                  </Field>
                </div>
                <Field label="College / Company Name">
                  <input style={inputStyle()} value={data.collegeOrCompany} placeholder="Where do you study/work?"
                    onChange={e => set('collegeOrCompany', e.target.value)}
                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                    onBlur={e => e.target.style.borderColor = '#E5E7EB'} />
                </Field>
                <Field label="How did you hear about us?">
                  <select style={selectStyle()} value={data.source} onChange={e => set('source', e.target.value)}>
                    <option value="">Select</option>
                    <option value="Google">Google Search</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Friend">Friend / Referral</option>
                    <option value="NoBroker">NoBroker / 99acres</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Message (Optional)" error={err('message')}>
                  <textarea style={{ ...inputStyle(err('message')), resize: 'vertical', minHeight: 80 }}
                    value={data.message} placeholder="Any specific requirements or questions? (max 500 chars)"
                    onChange={e => set('message', e.target.value)}
                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                    onBlur={e => e.target.style.borderColor = err('message') ? '#EF4444' : '#E5E7EB'}
                    maxLength={500} />
                  <span style={{ fontSize: 11, color: '#9CA3AF', textAlign: 'right' }}>{data.message.length}/500</span>
                </Field>
                {/* Honeypot — hidden from real users, bots will fill this */}
                <input
                  type="text" value={data.honeypot}
                  onChange={e => set('honeypot', e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1} autoComplete="off"
                  aria-hidden="true"
                />
                <Field error={err('consent')}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer', fontSize: 13, color: '#374151' }}>
                    <input type="checkbox" checked={data.consent} onChange={e => set('consent', e.target.checked)}
                      style={{ marginTop: 2, accentColor: '#2563EB', width: 16, height: 16 }} />
                    I agree to be contacted regarding PG availability and accommodation at Raigad House.
                  </label>
                </Field>

                {/* Email error */}
                {sendError && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 16px', fontSize: 13, color: '#DC2626' }}>
                    &#9888;&#65039; {sendError}
                  </div>
                )}
              </>}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'space-between' }}>
              {step > 0 ? (
                <button className="btn btn-outline" onClick={back} disabled={sending}>
                  <ArrowLeft size={16} /> Back
                </button>
              ) : <div />}
              {step < 2 ? (
                <button className="btn btn-primary" onClick={next} style={{ marginLeft: 'auto' }}>
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <button className="btn btn-orange" onClick={submit} disabled={sending}
                  style={{ marginLeft: 'auto', padding: '14px 32px', opacity: sending ? 0.7 : 1 }}>
                  {sending
                    ? <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                    : <>GET AVAILABILITY <Check size={16} /></>
                  }
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
