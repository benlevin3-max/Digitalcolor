'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const includes = [
  'Digital Color machine (your choice of finish)',
  'Full 12-pigment color system starter kit',
  'Digital Color App — iOS & Android',
  'Unlimited formula storage & client profiles',
  'AI shade recommendations',
  'Dedicated professional support',
  'Software updates included for life',
  'Access to 1,000+ shade catalog',
];

export default function Pricing() {
  return (
    <section className="section-white py-28">
      <div className="max-w-[980px] mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="headline-lg mb-5">Simple, transparent pricing.</h2>
          <p className="body-text max-w-[480px] mx-auto">
            One subscription. Everything included. No hidden costs, no per-formula fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr,380px] gap-8 items-start">

          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-[22px] font-semibold text-[#1D1D1F] mb-6">Everything you need, included.</h3>
            <div className="space-y-4">
              {includes.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0071E3]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#0071E3]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[17px] text-[#1D1D1F]">{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-[13px] text-[#AEAEB2] mt-8 leading-relaxed max-w-sm">
              Pigment refills billed separately based on usage. Volume discounts available for multi-station salons.
            </p>
          </motion.div>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:sticky md:top-24"
          >
            <div className="apple-card p-8 overflow-hidden relative">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0071E3]" />

              <p className="text-[13px] font-semibold text-[#0071E3] uppercase tracking-wider mb-6">Professional subscription</p>

              <div className="mb-2">
                <span className="text-[15px] text-[#6E6E73]">Starting from</span>
              </div>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-[56px] font-bold text-[#1D1D1F] tracking-tight leading-none">Custom</span>
              </div>
              <p className="text-[15px] text-[#6E6E73] mb-8">Pricing tailored to your salon size, location, and usage.</p>

              <hr className="hr-apple mb-8" />

              <div className="space-y-3 mb-8">
                {[
                  'No lock-in contracts',
                  'Cancel or pause anytime',
                  'Free onboarding & training',
                  'Multi-station volume pricing',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check size={14} className="text-[#34C759]" strokeWidth={2.5} />
                    <span className="text-[15px] text-[#1D1D1F]">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-apple-primary w-full text-center block py-3.5 text-[17px]">
                Get a custom quote
              </a>
              <p className="text-[12px] text-[#AEAEB2] text-center mt-3">Response within 24 hours</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
