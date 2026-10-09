const ITEMS = ['LIVE', 'MOVE', 'CONNECT', 'REPEAT', 'LIVE', 'MOVE', 'CONNECT', 'REPEAT'];

export default function Marquee() {
  // Triple the items so -33.333% always lands on an identical copy
  const tripled = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marquee-wrapper" role="presentation" aria-hidden="true">
      <div className="marquee-track">
        {tripled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
