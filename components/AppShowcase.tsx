'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'E-Swatches',
    desc: 'Browse the full digital color catalog visually',
  },
  {
    title: 'Color Series Selection',
    desc: 'Filter by trend, tone, and category',
  },
  {
    title: 'Professional Customization',
    desc: 'Build custom formulas from 12 base pigments',
  },
  {
    title: 'Task Records & My Works',
    desc: 'Track every client formula automatically',
  },
];

export default function AppShowcase() {
  return (
    <section style={{ display: 'flex', minHeight: '100vh' }} className="app-showcase-section">

      {/* Left half — hero image */}
      <div style={{ flex: 1, position: 'relative', minHeight: '100vh' }} className="app-left-panel">
        <Image
          src="/images/shutterstock_bg.jpg"
          alt="Professional hair colorist"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Gradient overlay from right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 70%, rgba(10,10,15,0.95) 100%)',
          }}
        />
      </div>

      {/* Right half — dark content */}
      <div
        style={{
          flex: 1,
          background: '#0a0a0f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 60px',
        }}
        className="app-right-panel"
      >
        <div style={{ maxWidth: 480, width: '100%' }}>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}
          >
            <div
              style={{
                width: 240,
                height: 500,
                borderRadius: 44,
                border: '3px solid #1D1D1F',
                background: '#000',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              {/* Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: 12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 24,
                  background: '#000',
                  borderRadius: 12,
                  zIndex: 10,
                }}
              />
              {/* Screen */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: 42, overflow: 'hidden' }}>
                <Image
                  src="/images/app/app1.png"
                  alt="Digital Color App"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              {/* Home indicator */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 90,
                  height: 4,
                  background: 'rgba(255,255,255,0.35)',
                  borderRadius: 2,
                  zIndex: 10,
                }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '3px',
                color: '#0071E3',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              DIGITAL COLOR APP
            </p>

            <h2
              style={{
                fontSize: 'clamp(36px, 4vw, 48px)',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '-0.5px',
                lineHeight: 1.05,
                marginBottom: 20,
                whiteSpace: 'pre-line',
              }}
            >
              {'Your color lab.\nIn your pocket.'}
            </h2>

            <p
              style={{
                fontSize: 17,
                fontWeight: 400,
                color: '#6E6E73',
                lineHeight: 1.6,
                marginBottom: 32,
              }}
            >
              The Digital Color app gives your stylists instant access to 1,000+ shades, AI recommendations, and formula history — on iOS and Android.
            </p>

            {/* Feature bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'rgba(0,113,227,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Check size={12} color="#0071E3" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span style={{ fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{f.title}</span>
                    <span style={{ fontSize: 15, color: '#6E6E73' }}> — {f.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  background: '#0071E3',
                  color: '#ffffff',
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '12px 24px',
                  borderRadius: 980,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0077ED')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0071E3')}
              >
                Request early access
              </a>
              <a
                href="#technology"
                style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  fontSize: 15,
                  fontWeight: 500,
                  padding: '12px 24px',
                  borderRadius: 980,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.13)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              >
                See the technology
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .app-showcase-section { flex-direction: column !important; }
          .app-left-panel { min-height: 300px !important; flex: none !important; width: 100% !important; }
          .app-right-panel { flex: none !important; width: 100% !important; padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  );
}
