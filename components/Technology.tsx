'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, Zap, BarChart3, Cloud } from 'lucide-react';
import { useLang } from '@/lib/context';

const icons = [Brain, Zap, BarChart3, Cloud];

export default function Technology() {
  const { t } = useLang();

  return (
    <section
      id="technology"
      style={{ background: '#1D1D1F', overflow: 'hidden', position: 'relative' }}
    >
      {/* Background image */}
      <img
        src="/images/shutterstock_bg.jpg"
        alt=""
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.65)',
        zIndex: 1,
      }} />

      {/* Header + device */}
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '100px 24px 80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontSize: '12px', fontWeight: 600, letterSpacing: '3px',
            textTransform: 'uppercase', color: '#0071E3', marginBottom: '16px',
          }}>
            {t.technology.badge}
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 600,
            color: '#FFFFFF', letterSpacing: '-0.5px', lineHeight: 1.05,
            marginBottom: '20px',
          }}>
            {t.technology.title}
          </h2>
          <p style={{
            fontSize: '19px', fontWeight: 400,
            color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
            maxWidth: '560px', margin: '0 auto 64px',
          }}>
            {t.technology.subtitle}
          </p>
        </motion.div>

        {/* Machines image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '680px', height: '420px' }}>
            <Image
              src="/images/machines/machine-trio.png"
              alt="Digital Color machines"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center bottom', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.5))' }}
              sizes="(max-width: 768px) 100vw, 680px"
            />
          </div>
        </motion.div>
      </div>

      {/* Horizontal feature bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', position: 'relative', zIndex: 2 }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        }}
          className="tech-feature-bar"
        >
          {t.technology.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  padding: '48px 32px',
                  textAlign: 'center',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Icon size={22} color="#FFFFFF" strokeWidth={1.5} />
                <p style={{
                  fontSize: '16px', fontWeight: 600,
                  color: '#FFFFFF', lineHeight: 1.3,
                  margin: 0,
                }}>
                  {feature.title}
                </p>
                <p style={{
                  fontSize: '13px', fontWeight: 400,
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.55, maxWidth: '180px', margin: 0,
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tech-feature-bar {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .tech-feature-bar > *:nth-child(2) { border-right: none !important; }
          .tech-feature-bar > *:nth-child(1),
          .tech-feature-bar > *:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }
        }
        @media (max-width: 480px) {
          .tech-feature-bar {
            grid-template-columns: 1fr !important;
          }
          .tech-feature-bar > * {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.2) !important;
          }
          .tech-feature-bar > *:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
