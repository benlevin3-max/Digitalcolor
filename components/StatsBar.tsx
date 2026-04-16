'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLang } from '@/lib/context';

function CountUp({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
}

export default function StatsBar() {
  const { t } = useLang();

  const stats = [
    { display: <><CountUp target={12} />+</>, label: t.stats.pigments },
    { display: <><CountUp target={1000} /><span>+</span></>, label: t.stats.shades },
    { display: <><CountUp target={0.1} decimals={1} />ml</>, label: t.stats.precision },
    { display: <>{'<'}3s</>, label: t.stats.mixTime },
  ];

  return (
    <section className="section-gray py-20">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D2D2D7] rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#F5F5F7] flex flex-col items-center justify-center py-12 px-8 text-center"
            >
              <div className="text-[56px] font-700 tracking-tight text-[#1D1D1F] leading-none mb-2">
                {stat.display}
              </div>
              <div className="text-[15px] text-[#6E6E73]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
