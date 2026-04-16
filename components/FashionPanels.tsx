'use client';

// SECTION — ORANGE background, BLONDE/warm girls
// Images: shutterstock_1957607380.jpg + shutterstock_1957607569.jpg

export default function FashionPanels() {
  return (
    <>
      {/* ── SECTION: ORANGE ── */}
      <section
        className="fashion-section"
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #ff8c42 0%, #e8460a 100%)',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {/* Blonde outdoor sun — shutterstock_1957607380 */}
        <div className="fashion-img" style={{ flex: 1, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/models/shutterstock_1957607380.jpg"
            alt="Model with warm blonde hair color in natural sunlight"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
        </div>

        {/* Blonde with hat — shutterstock_1957607569 */}
        <div className="fashion-img" style={{ flex: 1, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/models/shutterstock_1957607569.jpg"
            alt="Model with blonde hair wearing hat"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
        </div>

        {/* Text — right */}
        <div className="fashion-text" style={{
          width: '30%', flexShrink: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '60px',
        }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, letterSpacing: '4px',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)',
            margin: '0 0 20px',
          }}>
            WARM TONES
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 700, lineHeight: 1.0,
            color: '#ffffff', margin: 0, whiteSpace: 'pre-line',
          }}>
            {'Your Color.\nYour Rules.'}
          </h2>
          <p style={{
            fontSize: '18px', color: 'rgba(255,255,255,0.85)',
            maxWidth: '320px', marginTop: '16px', lineHeight: 1.5,
          }}>
            1,000+ shades. Zero compromises.
          </p>
        </div>
      </section>

      <style>{`
        .fashion-section { flex-direction: row; min-height: 50vh; }
        @media (max-width: 768px) {
          .fashion-section { flex-direction: column !important; }
          .fashion-img { flex: unset !important; height: 45vw; }
          .fashion-text { width: 100% !important; padding: 32px 24px !important; }
        }
      `}</style>
    </>
  );
}
