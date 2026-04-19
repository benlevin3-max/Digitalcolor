'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/context';

type ColorVariant = {
  id: string;
  label: string;
  swatch: string;
  image: string;
  tagline: string;
};

const variants: ColorVariant[] = [
  { id: 'white',  label: 'Alpine White',   swatch: '#F0EDE8', image: '/images/machines/machine-white.png',  tagline: 'Pure. Pristine. Elevated.' },
  { id: 'gray',   label: 'Space Gray',     swatch: '#9EA0A1', image: '/images/machines/machine-gray.png',   tagline: 'Understated. Professional.' },
  { id: 'black',  label: 'Midnight Black', swatch: '#1A1A1A', image: '/images/machines/machine-black.png',  tagline: 'Bold. Definitive. Iconic.' },
  { id: 'orange', label: 'Sunrise Orange', swatch: '#D4623A', image: '/images/machines/machine-orange.png', tagline: 'Vibrant. Expressive. Alive.' },
];

export default function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [activeVariant, setActiveVariant] = useState<ColorVariant>(variants[0]);
  const [prevImage, setPrevImage] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY  = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const contentOp = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const machineY  = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const switchVariant = (v: ColorVariant) => {
    if (v.id === activeVariant.id) return;
    setPrevImage(activeVariant.image);
    setActiveVariant(v);
    setTimeout(() => setPrevImage(null), 480);
  };

  return (
    <>
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 640,
        overflow: 'hidden',
        background: '#FFFFFF',
      }}
    >
      {/* z-index 0 — video background (desktop only) */}
      <video
        autoPlay muted loop playsInline preload="none"
        className="hidden md:block"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      >
        <source src="https://pnsc72ixyytk3mqf.public.blob.vercel-storage.com/shutterstock_33868708.mp4" type="video/mp4" />
      </video>

      {/* z-index 1 — white overlay above video */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'rgba(255,255,255,0.90)',
        pointerEvents: 'none',
      }} />

      {/* z-index 10 — all hero content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="w-full max-w-[980px] mx-auto px-4 lg:px-6 flex flex-col lg:flex-row gap-8 items-center pt-20 lg:pt-0">

          {/* TOP (mobile) / RIGHT (desktop) — machine image */}
          <motion.div
            style={{ y: machineY }}
            className="flex items-end justify-center w-full lg:w-auto order-first"
          >
            <motion.div
              initial={{ opacity: 0, x: 0, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'relative', width: '100%', maxWidth: 320, aspectRatio: '1 / 1.05' }}
              className="lg:max-w-[480px]"
            >
              <AnimatePresence>
                {prevImage && (
                  <motion.div key={prevImage} style={{ position: 'absolute', inset: 0 }}
                    initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                    <Image src={prevImage} alt="" fill
                      className="object-contain object-bottom drop-shadow-2xl"
                      sizes="(max-width: 1024px) 320px, 460px" />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div key={activeVariant.image} style={{ position: 'absolute', inset: 0 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                <Image
                  src={activeVariant.image}
                  alt={activeVariant.label}
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 1024px) 320px, 460px"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* BOTTOM (mobile) / LEFT (desktop) — text */}
          <motion.div
            style={{ y: contentY, opacity: contentOp }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="eyebrow mb-5"
            >
              {t.hero.badge}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="headline-xl mb-5 text-center lg:text-left"
            >
              Engineered<br />in Germany.<br />
              <span style={{ color: '#0071E3' }}>Powered by AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              style={{ fontSize: 19, color: '#6E6E73', maxWidth: 420, lineHeight: 1.5, marginBottom: 28, fontWeight: 300 }}
            >
              The world&rsquo;s most precise hair color mixing system.
            </motion.p>

            {/* Spec badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 border border-[#D2D2D7] rounded-full px-5 py-2.5 mb-8"
              style={{ background: 'rgba(245,245,247,0.90)' }}
            >
              {['19+ Patents', '1,000+ Shades', '0.1ml Precision'].map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#1D1D1F' }}>{item}</span>
                  {i < 2 && <span className="w-px h-3 bg-[#D2D2D7]" />}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="flex flex-col sm:flex-row items-center gap-3 mb-8 w-full lg:w-auto"
            >
              <a href="#contact" className="btn-apple-primary w-full sm:w-auto text-center">{t.hero.cta1}</a>
            </motion.div>

            {/* Color dot picker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex items-center gap-2.5">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => switchVariant(v)}
                    title={v.label}
                    className="rounded-full transition-all duration-300 focus:outline-none flex-shrink-0"
                    style={{
                      width: 24, height: 24,
                      backgroundColor: v.swatch,
                      border: activeVariant.id === v.id
                        ? '2px solid #6E6E73'
                        : v.swatch === '#F0EDE8' ? '1px solid #D2D2D7' : '2px solid transparent',
                      outline: 'none',
                      boxShadow: activeVariant.id === v.id ? '0 0 0 3px rgba(110,110,115,0.3)' : 'none',
                      transform: activeVariant.id === v.id ? 'scale(1.15)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeVariant.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.22 }}
                  style={{ fontSize: 13, color: '#6E6E73' }}
                >
                  {activeVariant.label}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade — z-index 11 */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        zIndex: 11, pointerEvents: 'none',
        background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)',
      }} />

      {/* Scroll hint — z-index 12 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        style={{
          position: 'absolute', bottom: 28,
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 12,
        }}
        className="hidden md:flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span style={{ fontSize: 11, color: '#AEAEB2', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          style={{ width: 1, height: 24, background: '#D2D2D7', transformOrigin: 'top' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

    </section>

    {/* Full-width video section below hero */}
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="https://pnsc72ixyytk3mqf.public.blob.vercel-storage.com/shutterstock_33868708.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1 }} />

      {/* Text overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: 'clamp(28px, 5vw, 64px)',
          fontWeight: 700,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: 0,
          padding: '0 16px',
        }}>
          THE FUTURE OF HAIR COLOR
        </h2>
      </div>
    </section>
    </>
  );
}
