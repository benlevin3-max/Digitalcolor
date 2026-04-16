'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/context';

export default function GermanEngineering() {
  const { t } = useLang();

  return (
    <section
      id="engineering"
      className="german-eng-section"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '500px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 16px',
      }}
    >
      {/* Background — two images side by side */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/germany-lab-1.jpg"
            alt="German hair color manufacturing laboratory"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/germany-lab-2.jpg"
            alt="Precision engineering facility for hair color production"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>
      </div>

      {/* Dark overlay for depth */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.38)',
        zIndex: 1,
      }} />

      {/* Glassmorphism overlay card — centered */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="german-eng-card"
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '24px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.08)',
          padding: '48px',
          maxWidth: '640px',
          width: '90%',
          textAlign: 'center',
        }}
      >
        {/* Circular German flag badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '64px', height: '64px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid rgba(0,0,0,0.12)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            flexShrink: 0,
          }}>
            <div style={{ flex: 1, background: '#1a1a1a' }} />
            <div style={{ flex: 1, background: '#DD0000' }} />
            <div style={{ flex: 1, background: '#FFCE00' }} />
          </div>
        </div>

        {/* Badge label */}
        <p style={{
          fontSize: '11px', fontWeight: 600, letterSpacing: '4px',
          textTransform: 'uppercase', color: '#6E6E73',
          marginBottom: '16px',
        }}>
          {t.engineering.badge}
        </p>

        {/* Headline */}
        <h2 style={{
          fontSize: 'clamp(26px, 3.5vw, 36px)',
          fontWeight: 700,
          color: '#1D1D1F',
          lineHeight: 1.15,
          letterSpacing: '-0.5px',
          marginBottom: '16px',
        }}>
          {t.engineering.title}
        </h2>

        {/* Subheadline */}
        <p style={{
          fontSize: '16px',
          color: '#6E6E73',
          lineHeight: 1.6,
          maxWidth: '460px',
          margin: '0 auto 36px',
        }}>
          {t.engineering.subtitle}
        </p>

      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .german-eng-section { min-height: unset !important; padding: 40px 16px !important; }
          .german-eng-section > div:first-child { flex-direction: column !important; }
          .german-eng-card { padding: 24px !important; width: 95% !important; }
        }
      `}</style>
    </section>
  );
}
