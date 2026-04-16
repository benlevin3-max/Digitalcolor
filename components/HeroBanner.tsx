'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/context';

const textShadow = '0 1px 3px rgba(0,0,0,0.3)';

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: '3px',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.8)',
  textShadow,
};

const headlineStyle: React.CSSProperties = {
  fontSize: 'clamp(32px, 4vw, 48px)',
  fontWeight: 600,
  lineHeight: 1.05,
  color: '#ffffff',
  textAlign: 'center',
  textShadow,
  letterSpacing: '-0.5px',
};

const subtitleStyle: React.CSSProperties = {
  fontSize: 19,
  fontWeight: 300,
  color: 'rgba(255,255,255,0.9)',
  textAlign: 'center',
  textShadow,
};

const btnPrimary: React.CSSProperties = {
  background: '#ffffff',
  color: '#1D1D1F',
  borderRadius: 980,
  padding: '12px 24px',
  fontSize: 17,
  fontWeight: 400,
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  transition: 'opacity 0.2s ease',
};

type CardProps = {
  image: string;
  objectPosition?: string;
  overlay: string;
  label: string;
  headline: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  cta1Href: string;
  cta2Href: string;
  delay?: number;
};

function BannerCard({
  image, objectPosition = 'center', overlay,
  label, headline, subtitle, cta1, cta2,
  cta1Href, cta2Href, delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      style={{
        position: 'relative',
        flex: '1 1 50%',
        minWidth: 0,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={headline}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition,
        }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: overlay,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '48px 32px',
        textAlign: 'center',
      }}>
        {/* Top label */}
        <p style={labelStyle}>{label}</p>

        {/* Center text */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <h2 style={headlineStyle}>{headline}</h2>
          <p style={subtitleStyle}>{subtitle}</p>
        </div>

        {/* Bottom buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href={cta1Href} style={btnPrimary}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {cta1}
          </a>
          <a
            href={cta2Href}
            style={{
              color: '#ffffff',
              fontSize: 17,
              fontWeight: 400,
              textDecoration: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textShadow,
              transition: 'text-decoration 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
          >
            {cta2}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroBanner() {
  const { t } = useLang();
  const { card1, card2 } = t.heroBanner;

  return (
    <section style={{ position: 'relative' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: 600,
      }}
        className="hero-banner-grid"
      >
        <BannerCard
          image="/images/hero-pink-hair.jpg"
          objectPosition="center"
          overlay="rgba(0,0,0,0.35)"
          label={card1.label}
          headline={card1.headline}
          subtitle={card1.subtitle}
          cta1={card1.cta1}
          cta2={card1.cta2}
          cta1Href="#colors"
          cta2Href="#technology"
          delay={0}
        />
        <BannerCard
          image="/images/hero-color-explosion.jpg"
          objectPosition="center top"
          overlay="rgba(0,0,0,0.30)"
          label={card2.label}
          headline={card2.headline}
          subtitle={card2.subtitle}
          cta1={card2.cta1}
          cta2={card2.cta2}
          cta1Href="#contact"
          cta2Href="#how-it-works"
          delay={0.1}
        />
      </div>

      {/* Gradient fade into the app section below */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '140px',
        background: 'linear-gradient(to bottom, transparent, #FFFFFF)',
        pointerEvents: 'none',
        zIndex: 20,
      }} />
    </section>
  );
}
