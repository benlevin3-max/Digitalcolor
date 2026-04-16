'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/context';

const glowColors = [
  '#a855f7',
  '#3b82f6',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#06b6d4',
  '#f97316',
  '#8b5cf6',
  '#14b8a6',
  '#ef4444',
];

const svgIcons = [
  // 1. SMART Color Communication Marketing — broadcast / signal waves
  <svg key="0" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="3" />
    <path d="M10.5 10.5a7.78 7.78 0 0 0 0 11" />
    <path d="M21.5 10.5a7.78 7.78 0 0 1 0 11" />
    <path d="M7 7a13.5 13.5 0 0 0 0 18" />
    <path d="M25 7a13.5 13.5 0 0 1 0 18" />
  </svg>,
  // 2. SMART Color Proposal System — document + checkmark
  <svg key="1" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="4" width="18" height="24" rx="3" />
    <path d="M11 16l3 3 6-6" />
    <path d="M11 9h10" />
    <path d="M11 12h6" />
  </svg>,
  // 3. 1,000+ Color Database — grid of circles
  <svg key="2" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="9"  cy="9"  r="3.5" />
    <circle cx="16" cy="9"  r="3.5" />
    <circle cx="23" cy="9"  r="3.5" />
    <circle cx="9"  cy="16" r="3.5" />
    <circle cx="16" cy="16" r="3.5" />
    <circle cx="23" cy="16" r="3.5" />
    <circle cx="9"  cy="23" r="3.5" />
    <circle cx="16" cy="23" r="3.5" />
    <circle cx="23" cy="23" r="3.5" />
  </svg>,
  // 4. DIY Personalized Customization — sliders
  <svg key="3" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <line x1="4" y1="9"  x2="28" y2="9" />
    <line x1="4" y1="16" x2="28" y2="16" />
    <line x1="4" y1="23" x2="28" y2="23" />
    <circle cx="10" cy="9"  r="3" fill="#0a0a0f" />
    <circle cx="20" cy="16" r="3" fill="#0a0a0f" />
    <circle cx="13" cy="23" r="3" fill="#0a0a0f" />
  </svg>,
  // 5. Consumer Service Center — headset
  <svg key="4" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 16a10 10 0 0 1 20 0" />
    <rect x="4"  y="15" width="5"  height="8" rx="2.5" />
    <rect x="23" y="15" width="5"  height="8" rx="2.5" />
    <path d="M26 23v2a4 4 0 0 1-4 4h-4" />
  </svg>,
  // 6. Cloud-Based Intelligent Color Matching — cloud + target
  <svg key="5" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 20H11a6 6 0 1 1 .9-11.9A8 8 0 1 1 22 20Z" />
    <circle cx="16" cy="24" r="4" />
    <circle cx="16" cy="24" r="1.5" />
  </svg>,
  // 7. Intelligent Cloud Computing — brain / neural
  <svg key="6" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6a5 5 0 0 0-1 9.9V22h10v-6.1A5 5 0 0 0 20 6Z" />
    <path d="M12 22v3M20 22v3M9 16a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3" />
    <path d="M23 16a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3" />
    <line x1="16" y1="10" x2="16" y2="14" />
    <line x1="13" y1="12" x2="19" y2="12" />
  </svg>,
  // 8. Continuously Growing Color Image Library — photo stack
  <svg key="7" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4"  y="9"  width="20" height="16" rx="3" />
    <path d="M8 5h16a3 3 0 0 1 3 3" />
    <circle cx="11" cy="16" r="2" />
    <path d="M4 22l5-5 4 4 3-3 5 5" />
  </svg>,
  // 9. Cloud-Based Automatic Color Formula Updates — refresh cloud
  <svg key="8" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16H11a6 6 0 1 1 .9-11.9A8 8 0 1 1 22 16Z" />
    <path d="M13 22l-3 3 3 3" />
    <path d="M10 25h8a4 4 0 0 0 4-4" />
  </svg>,
  // 10. Store Terminal Management System — monitor / screen
  <svg key="9" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="26" height="18" rx="3" />
    <line x1="12" y1="27" x2="20" y2="27" />
    <line x1="16" y1="23" x2="16" y2="27" />
    <path d="M9 14l3 3 7-7" />
  </svg>,
];

export default function EngineSystem() {
  const { t } = useLang();
  const { badge, title, subtitle, features } = t.engineSystem;

  return (
    <section style={{ background: '#0a0a0f', padding: '96px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #a855f7, #3b82f6)',
              color: '#ffffff',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '2px',
              padding: '8px 20px',
              borderRadius: 980,
              marginBottom: 20,
              boxShadow: '0 0 20px rgba(168,85,247,0.4)',
            }}
          >
            {badge}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '-0.003em',
              lineHeight: 1.07,
              marginBottom: 16,
            }}
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            style={{ fontSize: 19, color: '#6E6E73' }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div
          className="engine-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 12,
          }}
        >
          {features.map((feature, i) => {
            const color = glowColors[i % glowColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="engine-card"
                style={{
                  position: 'relative',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
                  overflow: 'hidden',
                  ['--glow' as string]: color,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = `0 0 30px rgba(${hexToRgb(color)}, 0.3)`;
                  el.style.borderColor = `${color}55`;
                  el.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = 'none';
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                {/* Gradient top border */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    opacity: 0.6,
                  }}
                />

                {/* SVG icon */}
                <div
                  style={{
                    color: color,
                    marginBottom: 16,
                    lineHeight: 1,
                    opacity: 0.9,
                  }}
                >
                  {svgIcons[i]}
                </div>

                <p style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#ffffff',
                  lineHeight: 1.4,
                }}>
                  {feature.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .engine-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
