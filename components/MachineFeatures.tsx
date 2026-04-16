'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const leftSpecs = [
  { value: '3 AI Chips',     desc: 'Triple AI processing',      color: '#0071E3', delay: 0 },
  { value: '12 Base Colors', desc: 'Professional pigment bases', color: '#8B5CF6', delay: 0.3 },
  { value: '20 Patents',     desc: 'Registered & protected',     color: '#34C759', delay: 0.6 },
  { value: '0.2g Accuracy',  desc: 'Digital weighing precision', color: '#FF9500', delay: 0.9 },
];

const rightSpecs = [
  { value: '50s Dispensing', desc: 'Complete formula dispensed',    color: '#00C7BE', delay: 1.2 },
  { value: 'SMART Scan',     desc: 'Authentic cartridge detection', color: '#FF2D55', delay: 1.5 },
  { value: 'AUTO Mixing',    desc: 'Dye + developer in one step',   color: '#5856D6', delay: 1.8 },
  { value: 'AUTO Cleaning',  desc: 'Self-cleaning after each use',  color: '#30D158', delay: 2.1 },
];

export default function MachineFeatures() {
  return (
    <section
      style={{
        background: '#FFFFFF',
        minHeight: '700px',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#1D1D1F',
              letterSpacing: '-0.5px',
              lineHeight: 1.05,
              marginBottom: '12px',
            }}
          >
            Precision engineered.<br />Intelligently designed.
          </h2>
          <p style={{ fontSize: '19px', fontWeight: 400, color: '#6E6E73' }}>
            Eight features that define Digital Color.
          </p>
        </motion.div>

        {/* 3-column grid */}
        <div
          className="spec-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 500px 1fr',
            alignItems: 'center',
          }}
        >
          {/* Left specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingRight: '40px' }}>
            {leftSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ textAlign: 'right' }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#1D1D1F',
                    lineHeight: 1.1,
                    letterSpacing: '-0.3px',
                  }}
                >
                  {spec.value}
                  <span
                    className="glow-dot"
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: spec.color,
                      display: 'inline-block',
                      marginLeft: '8px',
                      flexShrink: 0,
                      animationDelay: `${spec.delay}s`,
                      ['--dot-color' as string]: spec.color,
                    }}
                  />
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#6E6E73',
                    marginTop: '4px',
                  }}
                >
                  {spec.desc}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Center: machine image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image
              src="/images/machines/machine-gray.png"
              alt="Digital Color Machine"
              width={500}
              height={480}
              style={{ objectFit: 'contain', width: '500px', maxWidth: '500px', height: 'auto' }}
              priority
            />
          </motion.div>

          {/* Right specs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingLeft: '40px' }}>
            {rightSpecs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ textAlign: 'left' }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#1D1D1F',
                    lineHeight: 1.1,
                    letterSpacing: '-0.3px',
                  }}
                >
                  <span
                    className="glow-dot"
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: spec.color,
                      display: 'inline-block',
                      marginRight: '8px',
                      flexShrink: 0,
                      animationDelay: `${spec.delay}s`,
                      ['--dot-color' as string]: spec.color,
                    }}
                  />
                  {spec.value}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#6E6E73',
                    marginTop: '4px',
                  }}
                >
                  {spec.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 4px 1px var(--dot-color); opacity: 1; }
          50%       { box-shadow: 0 0 10px 3px var(--dot-color); opacity: 0.7; }
        }
        .glow-dot {
          animation: glow 2s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .spec-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 48px !important;
          }
          .spec-grid > *:nth-child(1) { order: 2; padding-right: 0 !important; }
          .spec-grid > *:nth-child(2) { order: 1; }
          .spec-grid > *:nth-child(3) { order: 3; padding-left: 0 !important; }
          .spec-grid > *:nth-child(1),
          .spec-grid > *:nth-child(3) {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .spec-grid > *:nth-child(1) > * { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}
