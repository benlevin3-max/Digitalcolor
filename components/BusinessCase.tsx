'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

type StatCard = {
  value: string;
  rawNumber: number | null;
  suffix: string;
  prefix: string;
  label: string;
  sublabel: string;
  accent: string;
};

const stats: StatCard[] = [
  {
    value: '30%',
    rawNumber: 30,
    suffix: '%',
    prefix: '',
    label: 'Revenue increase',
    sublabel: 'Average price uplift per service after adoption',
    accent: '#34C759',
  },
  {
    value: '40%',
    rawNumber: 40,
    suffix: '%',
    prefix: '',
    label: 'Less color waste',
    sublabel: '0.1ml precision eliminates over-mixing entirely',
    accent: '#0071E3',
  },
  {
    value: '3s',
    rawNumber: 3,
    suffix: 's',
    prefix: '',
    label: 'Formula mix time',
    sublabel: 'From tap to dispensed — under 3 seconds, every time',
    accent: '#FF9F0A',
  },
  {
    value: '∞',
    rawNumber: null,
    suffix: '',
    prefix: '',
    label: 'Formulas per client',
    sublabel: 'Unlimited cloud storage. Perfect recall, every visit.',
    accent: '#5E5CE6',
  },
];

function AnimatedNumber({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export default function BusinessCase() {
  return (
    <section className="section-white py-28">
      <div className="max-w-[980px] mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="eyebrow mb-4">Return on investment</p>
          <h2 className="headline-lg mb-5">The business case for Digital Color.</h2>
          <p className="body-text max-w-[560px] mx-auto">
            Professional stylists using Digital Color report higher client retention and increased service
            revenue within 3 months of adoption.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="apple-card p-7 flex flex-col gap-3 hover:shadow-sm transition-shadow duration-300"
            >
              {/* Big number */}
              <div
                className="text-[56px] font-bold tracking-tight leading-none"
                style={{ color: stat.accent }}
              >
                {stat.rawNumber !== null ? (
                  <AnimatedNumber target={stat.rawNumber} suffix={stat.suffix} prefix={stat.prefix} />
                ) : (
                  <span>∞</span>
                )}
              </div>

              {/* Label */}
              <div>
                <p className="text-[17px] font-semibold text-[#1D1D1F] leading-snug">{stat.label}</p>
                <p className="text-[13px] text-[#6E6E73] mt-1.5 leading-relaxed">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-[#F5F5F7] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="flex-1">
            <p className="text-[19px] text-[#1D1D1F] leading-relaxed font-light italic">
              &ldquo;Within 90 days, my average service ticket increased by 28% and I eliminated nearly all my
              color waste. Digital Color paid for itself in the first month.&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full bg-[#C49A50] flex items-center justify-center text-white text-[13px] font-semibold">
                MC
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#1D1D1F]">Marie Chen</p>
                <p className="text-[13px] text-[#6E6E73]">Salon owner · San Francisco</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-1 bg-white rounded-2xl px-8 py-6 border border-[#D2D2D7]">
            <span className="text-[40px] font-bold text-[#34C759] tracking-tight leading-none">+28%</span>
            <span className="text-[13px] text-[#6E6E73] text-center">Average ticket<br />increase</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-apple-primary">Calculate your ROI</a>
          <p className="text-[13px] text-[#AEAEB2] mt-3">No commitment required. For professional salons only.</p>
        </motion.div>
      </div>
    </section>
  );
}
