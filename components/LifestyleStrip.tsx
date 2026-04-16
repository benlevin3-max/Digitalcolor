'use client';

const stripImages = [
  '/images/models/shutterstock_1679909419.jpg',
  '/images/models/shutterstock_1957607380.jpg',
  '/images/models/shutterstock_1957607569.jpg',
  '/images/models/shutterstock_2004352688.jpg',
  '/images/models/shutterstock_2072086160.jpg',
  '/images/models/shutterstock_2235368873.jpg',
  '/images/models/shutterstock_2235368911.jpg',
  '/images/models/shutterstock_2449262437.jpg',
  '/images/models/shutterstock_2500604319.jpg',
];

// Duplicate for seamless infinite loop (translateX -50% = one full set)
const allImages = [...stripImages, ...stripImages];

export default function LifestyleStrip() {
  return (
    <section className="w-full overflow-hidden" style={{ height: '55vh' }}>
      <div
        className="lifestyle-track"
        style={{
          display: 'flex',
          height: '100%',
          gap: 0,
          animation: 'lifestyleScroll 28s linear infinite',
          willChange: 'transform',
        }}
      >
        {allImages.map((src, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              height: '100%',
              aspectRatio: '2 / 3',
              overflow: 'hidden',
              lineHeight: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="Hair color inspiration"
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes lifestyleScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lifestyle-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
