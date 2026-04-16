'use client';

export default function BoldSeriesSection() {
  return (
    <section className="bold-series-section" style={{
      width: '100%',
      background: 'linear-gradient(135deg, #ff8c00, #e65c00)',
      overflow: 'hidden',
    }}>
      <div className="bold-series-inner" style={{ display: 'flex', alignItems: 'stretch' }}>
        {/* Left image */}
        <div className="bold-series-img" style={{ flex: 1, background: '#f0a020', lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/models/shutterstock_2235368873.jpg"
            alt="Model with bold warm hair color"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Center image */}
        <div className="bold-series-img" style={{ flex: 1, background: '#f0a020', lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/models/shutterstock_2235368911.jpg"
            alt="Model showcasing vibrant orange hair color"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Text */}
        <div className="bold-series-text" style={{
          flex: 0.8, flexShrink: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '60px',
        }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, letterSpacing: '4px',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)',
            margin: '0 0 20px',
          }}>
            BOLD SERIES
          </p>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.0,
            color: '#ffffff', margin: 0, whiteSpace: 'pre-line',
          }}>
            {'Fire in\nEvery Strand.'}
          </h2>
          <p style={{
            fontSize: '18px', color: 'rgba(255,255,255,0.85)',
            maxWidth: '300px', marginTop: '16px', lineHeight: 1.5,
          }}>
            Some colors don&apos;t just turn heads — they stop time.
          </p>
        </div>
      </div>

      <style>{`
        .bold-series-inner { flex-direction: row; }
        .bold-series-img { display: block; }
        @media (max-width: 768px) {
          .bold-series-inner {
            flex-direction: column !important;
          }
          .bold-series-text {
            padding: 40px 24px !important;
            flex: unset !important;
          }
        }
      `}</style>
    </section>
  );
}
