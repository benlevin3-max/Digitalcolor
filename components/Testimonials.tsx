'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/context';

const stylistImages = [
  '/images/stylist-1.jpg',
  '/images/stylist-2.jpg',
  '/images/stylist-3.jpg',
  '/images/stylist-4.jpg',
  '/images/stylist-5.jpg',
  '/images/stylist-6.jpg',
  '/images/stylist-7.jpg',
];

const allImages = [...stylistImages, ...stylistImages];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="testimonials" style={{ background: '#ffffff', paddingTop: '80px', paddingBottom: '80px', overflow: 'hidden' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}
      >
        <p className="eyebrow mb-4">{t.testimonials.badge}</p>
        <h2 className="headline-lg mb-5">{t.testimonials.title}</h2>
      </motion.div>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            animation: 'stylistScroll 32s linear infinite',
            willChange: 'transform',
          }}
        >
          {allImages.map((src, i) => (
            <div
              key={i}
              className="stylist-card"
              style={{
                flexShrink: 0,
                width: '220px',
                height: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                marginRight: '12px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Professional hair stylist"
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
      </div>

      <style>{`
        @keyframes stylistScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .stylist-card { width: 160px !important; height: 220px !important; }
        }
      `}</style>
    </section>
  );
}
