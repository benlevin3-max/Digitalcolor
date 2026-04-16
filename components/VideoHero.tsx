'use client';

import { useRef, useEffect } from 'react';

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '70vh' }}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/app-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/38" />

      {/* Centered serif headline */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h2
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(32px, 5.5vw, 76px)',
            fontWeight: 400,
            color: '#FFFFFF',
            letterSpacing: '0.04em',
            textAlign: 'center',
            textShadow: '0 2px 24px rgba(0,0,0,0.35)',
            lineHeight: 1.15,
          }}
        >
          THE FUTURE OF HAIR COLOR
        </h2>
      </div>
    </section>
  );
}
