'use client';

export default function CinematicBanner() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="https://pnsc72ixyytk3mqf.public.blob.vercel-storage.com/shutterstock_1093732031.mov" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />

      {/* Centered text */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '20px',
          }}
        >
          CRAFTED FOR PROFESSIONALS
        </p>
        <h2
          style={{
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 300,
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: '#FFFFFF',
            letterSpacing: '-0.5px',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Where Art Meets Precision.
        </h2>
      </div>
    </section>
  );
}
