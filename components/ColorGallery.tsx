'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/context';

const colorSwatches = [
  { name: 'Platinum silk', hex: '#F2ECD8', category: 'Blonde' },
  { name: 'Champagne mist', hex: '#E8D5A3', category: 'Blonde' },
  { name: 'Golden wheat', hex: '#D4B483', category: 'Blonde' },
  { name: 'Honey glow', hex: '#C49A50', category: 'Blonde' },
  { name: 'Caramel dream', hex: '#B8835A', category: 'Blonde' },
  { name: 'Warm ash', hex: '#9E7B65', category: 'Blonde' },
  { name: 'Chestnut gloss', hex: '#8B5E3C', category: 'Brown' },
  { name: 'Rich espresso', hex: '#6B3E2A', category: 'Brown' },
  { name: 'Dark mocha', hex: '#4A2C20', category: 'Brown' },
  { name: 'Truffle black', hex: '#2D1B14', category: 'Brown' },
  { name: 'Mahogany fire', hex: '#7B2D2D', category: 'Brown' },
  { name: 'Auburn blaze', hex: '#9E3D1E', category: 'Brown' },
  { name: 'Copper flame', hex: '#C4511A', category: 'Red' },
  { name: 'Cherry bomb', hex: '#A01830', category: 'Red' },
  { name: 'Ruby radiance', hex: '#8B0028', category: 'Red' },
  { name: 'Rose gold dust', hex: '#C87070', category: 'Red' },
  { name: 'Strawberry kiss', hex: '#D4557A', category: 'Red' },
  { name: 'Bordeaux velvet', hex: '#6B1A2A', category: 'Red' },
  { name: 'Midnight plum', hex: '#3D1A5C', category: 'Fashion' },
  { name: 'Violet storm', hex: '#5A2080', category: 'Fashion' },
  { name: 'Steel blue', hex: '#2D4A6B', category: 'Fashion' },
  { name: 'Ocean depths', hex: '#1A3D5C', category: 'Fashion' },
  { name: 'Forest shadow', hex: '#1A3D2A', category: 'Fashion' },
  { name: 'Graphite smoke', hex: '#2A2A35', category: 'Fashion' },
];

const categories = ['All', 'Blonde', 'Brown', 'Red', 'Fashion'];

export default function ColorGallery() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredColor, setHoveredColor] = useState<(typeof colorSwatches)[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? colorSwatches
    : colorSwatches.filter(c => c.category === activeCategory);

  return (
    <section id="colors" className="section-white py-28">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">{t.colors.badge}</p>
          <h2 className="headline-lg mb-5">{t.colors.title}</h2>
          <p className="body-text max-w-[560px] mx-auto">{t.colors.subtitle}</p>
        </motion.div>

        {/* Category tabs — scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-1 mb-12 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:justify-center md:flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 min-h-[44px] rounded-full text-[15px] transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1D1D1F] text-white'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-[1fr,280px] gap-12 items-start">
          {/* Swatches */}
          <motion.div layout className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {filtered.map((color, i) => (
              <motion.div
                key={color.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.025 }}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredColor(color)}
                onMouseLeave={() => setHoveredColor(null)}
              >
                <motion.div
                  className="aspect-square rounded-2xl border border-[#D2D2D7] group-hover:border-[#AEAEB2] transition-colors duration-200 overflow-hidden"
                  style={{ backgroundColor: color.hex }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
                {/* Name tooltip */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1D1D1F] text-white px-3 py-1.5 rounded-lg text-[11px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-10">
                  {color.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#1D1D1F]" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Color wheel + preview — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex sticky top-24 flex-col items-center gap-6"
          >
            <ColorWheel hoveredColor={hoveredColor} />

            {/* Preview card */}
            <div className="w-full apple-card p-5">
              <div
                className="w-full h-16 rounded-xl mb-4 transition-all duration-500 border border-[#D2D2D7]"
                style={{ backgroundColor: hoveredColor?.hex ?? '#F5F5F7' }}
              />
              <p className="text-[17px] font-semibold text-[#1D1D1F]">
                {hoveredColor ? hoveredColor.name : 'Hover a swatch'}
              </p>
              <p className="text-[13px] text-[#6E6E73] mt-0.5">
                {hoveredColor ? `${hoveredColor.hex} · ${hoveredColor.category}` : 'to preview color'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-apple-primary">{t.colors.explore}</a>
        </motion.div>
      </div>
    </section>
  );
}

function ColorWheel({ hoveredColor }: { hoveredColor: (typeof colorSwatches)[0] | null }) {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const segments = 36;
  const innerR = 50;
  const outerR = 110;

  const paths = Array.from({ length: segments }, (_, i) => {
    const startAngle = (i * 360) / segments;
    const endAngle = ((i + 1) * 360) / segments;
    const hue = (i * 360) / segments;
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const x1 = cx + innerR * Math.cos(toRad(startAngle - 90));
    const y1 = cy + innerR * Math.sin(toRad(startAngle - 90));
    const x2 = cx + outerR * Math.cos(toRad(startAngle - 90));
    const y2 = cy + outerR * Math.sin(toRad(startAngle - 90));
    const x3 = cx + outerR * Math.cos(toRad(endAngle - 90));
    const y3 = cy + outerR * Math.sin(toRad(endAngle - 90));
    const x4 = cx + innerR * Math.cos(toRad(endAngle - 90));
    const y4 = cy + innerR * Math.sin(toRad(endAngle - 90));
    return {
      d: `M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1}`,
      hue,
    };
  });

  return (
    <div className="relative">
      <motion.svg
        width={size} height={size}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        {paths.map(({ d, hue }, i) => (
          <path key={i} d={d} fill={`hsl(${hue}, 70%, 60%)`} />
        ))}
        <circle cx={cx} cy={cy} r={innerR - 2} fill="white" />
      </motion.svg>

      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full border border-[#D2D2D7] transition-all duration-500"
          style={{ backgroundColor: hoveredColor?.hex ?? '#F5F5F7' }}
        />
      </div>
    </div>
  );
}
