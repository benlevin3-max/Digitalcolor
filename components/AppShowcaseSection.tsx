'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLang } from '@/lib/context';

const bgColors = ['#FFFFFF', '#F5F5F7'];

function IPhoneFrame({ src, alt, width = 240 }: { src: string; alt: string; width?: number }) {
  const height = Math.round(width * (496 / 240));
  const notchW = Math.round(width * 0.325);
  const notchH = Math.round(width * 0.092);
  const radius = Math.round(width * 0.158);

  return (
    <div style={{
      width,
      height,
      borderRadius: radius,
      border: '3px solid #1D1D1F',
      background: '#000',
      boxShadow: '0 32px 72px rgba(0,0,0,0.18)',
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
    }}>
      <div style={{
        position: 'absolute', top: '10px', left: '50%',
        transform: 'translateX(-50%)',
        width: notchW, height: notchH,
        background: '#000', borderRadius: notchH / 2, zIndex: 10,
      }} />
      <div style={{ position: 'absolute', inset: 0, borderRadius: radius - 2, overflow: 'hidden' }}>
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </div>
      <div style={{
        position: 'absolute', bottom: '8px', left: '50%',
        transform: 'translateX(-50%)',
        width: Math.round(width * 0.36), height: 4,
        background: 'rgba(255,255,255,0.4)', borderRadius: 2, zIndex: 10,
      }} />
    </div>
  );
}

export default function AppShowcaseSection() {
  const { lang } = useLang();
  const isRtl = lang === 'he';

  return (
    <section>

      {/* ── Subsection 1: E-Swatches — 2 phones ── */}
      <div style={{ background: bgColors[0], padding: '0 80px 120px', minHeight: '600px' }}>
        <div
          style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '72px',
            flexDirection: isRtl ? 'row-reverse' : 'row',
          }}
          className="app-subsection"
        >
          {/* Two phones */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexShrink: 0, paddingBottom: '40px' }}
          >
            <IPhoneFrame src="/images/app/app1.png" alt="Digital Color App" />
            <span className="phone-second" style={{ display: 'contents' }}>
              <div style={{ transform: 'translateY(40px)' }}>
                <IPhoneFrame src="/images/app/app2.png" alt="E-Swatches" />
              </div>
            </span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            style={{ maxWidth: '400px', textAlign: isRtl ? 'right' : 'left' }}
          >
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', color: '#0071E3', textTransform: 'uppercase', marginBottom: '16px' }}>
              E-SWATCHES
            </p>
            <h3 style={{ fontSize: '48px', fontWeight: 600, color: '#1D1D1F', letterSpacing: '-0.5px', lineHeight: 1.05, marginBottom: '20px', whiteSpace: 'pre-line' }}>
              {'Find the perfect shade.\nInstantly.'}
            </h3>
            <p style={{ fontSize: '19px', fontWeight: 400, color: '#6E6E73', lineHeight: 1.6 }}>
              Browse our complete digital color catalog by number or visual. Search by shade code or explore by category — Trendy, Life Color, Cover Gray and more.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Subsection 2: Precision Match — 1 large phone ── */}
      <div style={{ background: bgColors[1], padding: '100px 80px 120px', minHeight: '600px' }}>
        <div
          style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '80px',
            flexDirection: isRtl ? 'row-reverse' : 'row',
          }}
          className="app-subsection"
        >
          {/* Single larger phone */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ flexShrink: 0 }}
          >
            <IPhoneFrame src="/images/app/app3.png" alt="Precision Match" width={300} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            style={{ maxWidth: '420px', textAlign: isRtl ? 'right' : 'left' }}
          >
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '3px', color: '#0071E3', textTransform: 'uppercase', marginBottom: '16px' }}>
              PRECISION MATCH
            </p>
            <h3 style={{ fontSize: '48px', fontWeight: 600, color: '#1D1D1F', letterSpacing: '-0.5px', lineHeight: 1.05, marginBottom: '20px' }}>
              Tailored to every client.
            </h3>
            <p style={{ fontSize: '19px', fontWeight: 400, color: '#6E6E73', lineHeight: 1.6, marginBottom: '36px' }}>
              Select the exact hair length and the client's current tone. The AI calculates the perfect formula — personalized, precise, and ready in seconds.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{ display: 'inline-block', background: '#0071E3', color: '#FFFFFF', fontSize: '17px', fontWeight: 500, padding: '14px 28px', borderRadius: '980px', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0077ED')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0071E3')}
              >
                Request early access
              </a>
              <a
                href="#technology"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#0071E3', fontSize: '17px', fontWeight: 500, padding: '14px 4px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                See the technology →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .app-subsection {
            flex-direction: column !important;
            padding: 60px 24px 80px !important;
            gap: 48px !important;
          }
          .phone-second { display: none !important; }
        }
      `}</style>
    </section>
  );
}
