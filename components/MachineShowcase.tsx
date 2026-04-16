'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Variant = {
  id: string;
  label: string;
  swatch: string;
  image: string;
  tagline: string;
  specs: { label: string; value: string }[];
};

const variants: Variant[] = [
  {
    id: 'white',
    label: 'Alpine White',
    swatch: '#F0EDE8',
    image: '/images/machines/machine-white.png',
    tagline: 'Pure and pristine.',
    specs: [
      { label: 'Finish', value: 'Matte white' },
      { label: 'Accent', value: 'Polished silver' },
      { label: 'Best for', value: 'Bright, modern studios' },
    ],
  },
  {
    id: 'gray',
    label: 'Space Gray',
    swatch: '#9EA0A1',
    image: '/images/machines/machine-gray.png',
    tagline: 'Understated and professional.',
    specs: [
      { label: 'Finish', value: 'Satin gray' },
      { label: 'Accent', value: 'Dark chrome' },
      { label: 'Best for', value: 'Editorial & luxury salons' },
    ],
  },
  {
    id: 'black',
    label: 'Midnight Black',
    swatch: '#1A1A1A',
    image: '/images/machines/machine-black.png',
    tagline: 'Bold, iconic, definitive.',
    specs: [
      { label: 'Finish', value: 'Deep gloss black' },
      { label: 'Accent', value: 'Brushed gold' },
      { label: 'Best for', value: 'High-fashion & exclusive salons' },
    ],
  },
  {
    id: 'orange',
    label: 'Sunrise Orange',
    swatch: '#D4623A',
    image: '/images/machines/machine-orange.png',
    tagline: 'Vibrant, expressive, alive.',
    specs: [
      { label: 'Finish', value: 'Gloss orange' },
      { label: 'Accent', value: 'Polished white' },
      { label: 'Best for', value: 'Creative studios & academies' },
    ],
  },
];

export default function MachineShowcase() {
  const [active, setActive] = useState(variants[0]);
  const [exiting, setExiting] = useState<string | null>(null);

  const switchTo = (v: Variant) => {
    if (v.id === active.id) return;
    setExiting(active.image);
    setActive(v);
    setTimeout(() => setExiting(null), 500);
  };

  return (
    <section className="section-gray py-28 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="eyebrow mb-4">Color variants</p>
          <h2 className="headline-lg mb-5">Choose your color.</h2>
          <p className="body-text max-w-[480px] mx-auto">
            Four finishes, one system. Designed to match the aesthetic of any professional studio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Machine image — crossfade */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px]" style={{ aspectRatio: '1/1.1' }}>
              {/* Exit image */}
              <AnimatePresence>
                {exiting && (
                  <motion.div
                    key={exiting}
                    className="absolute inset-0"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Image src={exiting} alt="" fill className="object-contain" sizes="420px" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Active image */}
              <motion.div
                key={active.image}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: info + color switcher */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Animated name + tagline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-[40px] font-semibold text-[#1D1D1F] tracking-tight mb-2">{active.label}</h3>
                <p className="text-[19px] text-[#6E6E73]">{active.tagline}</p>
              </motion.div>
            </AnimatePresence>

            {/* Specs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + '-specs'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-0 mb-10"
              >
                {active.specs.map((spec, i) => (
                  <div key={spec.label} className={`flex justify-between py-4 ${i < active.specs.length - 1 ? 'border-b border-[#D2D2D7]' : ''}`}>
                    <span className="text-[15px] text-[#6E6E73]">{spec.label}</span>
                    <span className="text-[15px] text-[#1D1D1F] font-medium">{spec.value}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Color dots */}
            <div className="flex items-center gap-3 mb-4">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => switchTo(v)}
                  title={v.label}
                  className={`relative w-8 h-8 rounded-full transition-all duration-300 focus:outline-none ${
                    active.id === v.id
                      ? 'ring-2 ring-offset-2 ring-[#6E6E73] scale-110'
                      : 'hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: v.swatch,
                    border: v.swatch === '#F0EDE8' ? '1px solid #D2D2D7' : 'none',
                  }}
                />
              ))}
            </div>
            <p className="text-[13px] text-[#AEAEB2] mb-8">
              {variants.map(v => v.label).join(' · ')}
            </p>

            <a href="#contact" className="btn-apple-primary">Request a demo</a>
          </motion.div>
        </div>

        {/* Single white + trio side by side — bottom showcase */}
      </div>
    </section>
  );
}
