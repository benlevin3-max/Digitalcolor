'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const beforeItems = [
  '~30% product wasted per mixing session',
  'Manual measurements cause inconsistency',
  'Excess mixed color discarded after service',
  'Frequent re-orders due to over-use',
  'No formula tracking — waste repeats',
];

const afterItems = [
  '0.1ml precision — zero over-mixing',
  'AI calculates exact quantity needed',
  'Every drop dispensed, nothing wasted',
  'Smart restocking — order exactly what you use',
  'Every formula logged and optimized over time',
];

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
        background: '#ffffff',
      }}
    >

      {/* Frosted glass card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          background: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35), 0 4px 16px rgba(0,0,0,0.12)',
          padding: '48px',
          maxWidth: '860px',
          width: '90%',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 600, letterSpacing: '4px',
            textTransform: 'uppercase', color: '#6E6E73', marginBottom: '16px',
          }}>
            Sustainability through precision
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700,
            color: '#1D1D1F', letterSpacing: '-0.5px', lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            Precision means less waste.
          </h2>
          <p style={{
            fontSize: '17px', color: '#6E6E73', lineHeight: 1.6,
            maxWidth: '520px', margin: '0 auto',
          }}>
            Traditional mixing wastes an average of 30% per application. Digital Color&rsquo;s 0.1ml precision
            dispenses only what is needed — nothing more.
          </p>
        </div>

        {/* Split screen comparison */}
        <div ref={ref} className="sustain-compare-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              background: 'rgba(245,245,247,0.8)', borderRadius: '16px',
              padding: '28px', position: 'relative', border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <div style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(255,59,48,0.1)', color: '#FF3B30',
              fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px',
            }}>
              Traditional mixing
            </div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#AEAEB2', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px', marginTop: '24px' }}>
              Before Digital
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '16px', background: 'rgba(255,59,48,0.05)', borderRadius: '16px' }}>
              <div style={{ position: 'relative', width: '64px', height: '64px', flexShrink: 0 }}>
                <svg viewBox="0 0 64 64" style={{ width: '100%', height: '100%' }}>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#F2F2F2" strokeWidth="6" />
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#FF3B30" strokeWidth="6"
                    strokeDasharray={`${0.3 * 175.9} 175.9`} strokeLinecap="round"
                    transform="rotate(-90 32 32)" opacity="0.7" />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#FF3B30' }}>30%</span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#1D1D1F' }}>Average waste</p>
                <p style={{ fontSize: '13px', color: '#6E6E73' }}>per mixing session</p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {beforeItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#6E6E73' }}
                >
                  <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(255,59,48,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF3B30', display: 'block' }} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              background: 'rgba(245,245,247,0.8)', borderRadius: '16px',
              padding: '28px', position: 'relative', border: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <div style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(52,199,89,0.1)', color: '#34C759',
              fontSize: '11px', fontWeight: 600, padding: '4px 12px', borderRadius: '999px',
            }}>
              Digital Color precision
            </div>
            <p style={{ fontSize: '13px', fontWeight: 600, color: '#AEAEB2', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px', marginTop: '24px' }}>
              After Digital
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', padding: '16px', background: 'rgba(52,199,89,0.05)', borderRadius: '16px' }}>
              <div style={{ position: 'relative', width: '64px', height: '64px', flexShrink: 0 }}>
                <svg viewBox="0 0 64 64" style={{ width: '100%', height: '100%' }}>
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#F2F2F2" strokeWidth="6" />
                  <motion.circle
                    cx="32" cy="32" r="28" fill="none" stroke="#34C759" strokeWidth="6"
                    strokeDasharray="175.9 175.9" strokeLinecap="round"
                    transform="rotate(-90 32 32)"
                    initial={{ strokeDasharray: '0 175.9' }}
                    animate={inView ? { strokeDasharray: '175.9 175.9' } : {}}
                    transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                  />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#34C759' }}>0%</span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#1D1D1F' }}>Waste eliminated</p>
                <p style={{ fontSize: '13px', color: '#6E6E73' }}>0.1ml precision dispensing</p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {afterItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.35, delay: i * 0.07 + 0.2 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: '#1D1D1F' }}
                >
                  <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(52,199,89,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34C759', display: 'block' }} />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <div className="sustain-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            { stat: '40%', label: 'Less product used', sub: 'Per service vs. traditional mixing' },
            { stat: 'Refillable', label: 'Cartridge system', sub: 'German engineering built to last decades' },
            { stat: '0', label: 'Over-mixing incidents', sub: 'AI calculates exactly what is needed' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                background: 'rgba(245,245,247,0.8)', borderRadius: '16px',
                padding: '24px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <p style={{ fontSize: '32px', fontWeight: 700, color: '#1D1D1F', letterSpacing: '-1px', marginBottom: '4px' }}>{item.stat}</p>
              <p style={{ fontSize: '15px', fontWeight: 600, color: '#1D1D1F', marginBottom: '4px' }}>{item.label}</p>
              <p style={{ fontSize: '13px', color: '#6E6E73', lineHeight: 1.4 }}>{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .sustain-compare-grid { grid-template-columns: 1fr !important; }
          .sustain-stats-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
