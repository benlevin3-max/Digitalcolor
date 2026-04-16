'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLang } from '@/lib/context';

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    salon: '', country: '', license: '', message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full px-4 py-3 text-[17px] rounded-apple-sm placeholder-[#AEAEB2] focus:ring-0";
  const labelClass = "block text-[13px] font-medium text-[#6E6E73] mb-2";

  return (
    <section id="contact" className="section-gray py-28">
      <div className="max-w-[640px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="eyebrow mb-4">{t.contact.badge}</p>
          <h2 className="headline-lg mb-5">{t.contact.title}</h2>
          <p className="body-text">{t.contact.subtitle}</p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="apple-card p-5 md:p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#F5F5F7] flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#34C759]" />
                </div>
                <h3 className="text-[22px] font-semibold text-[#1D1D1F]">Application received</h3>
                <p className="text-[17px] text-[#6E6E73] max-w-xs leading-relaxed">{t.contact.form.success}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{t.contact.form.firstName}</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange}
                      placeholder="Alex" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t.contact.form.lastName}</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange}
                      placeholder="Johnson" required className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{t.contact.form.email}</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="alex@salon.com" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t.contact.form.phone}</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+1 (555) 000-0000" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>{t.contact.form.salon}</label>
                    <input type="text" name="salon" value={form.salon} onChange={handleChange}
                      placeholder="Studio Alex" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t.contact.form.country}</label>
                    <select name="country" value={form.country} onChange={handleChange}
                      required className={inputClass}>
                      <option value="">Select country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="fr">France</option>
                      <option value="de">Germany</option>
                      <option value="il">Israel</option>
                      <option value="ae">UAE</option>
                      <option value="au">Australia</option>
                      <option value="ca">Canada</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t.contact.form.license}</label>
                  <input type="text" name="license" value={form.license} onChange={handleChange}
                    placeholder="License # / Professional certification" className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>{t.contact.form.message}</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your salon, team size, and color philosophy..."
                    rows={4} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-apple-primary w-full py-4 text-[17px] !rounded-2xl flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      {t.contact.form.submitting}
                    </>
                  ) : t.contact.form.submit}
                </button>

                <p className="text-[13px] text-[#AEAEB2] text-center">
                  For professional use only. All applications are reviewed by our team.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
