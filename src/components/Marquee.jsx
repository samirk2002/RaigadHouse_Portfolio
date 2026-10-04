const ITEMS = ['LIVE', 'MOVE', 'CONNECT', 'REPEAT', 'LIVE', 'MOVE', 'CONNECT', 'REPEAT'];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrapper" role="presentation" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
