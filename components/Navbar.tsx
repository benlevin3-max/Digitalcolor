'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSticky, setShowMobileSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowMobileSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Technology',    href: '#technology' },
    { label: 'Colors',        href: '#color-catalog' },
    { label: 'How it works',  href: '#technology' },
    { label: 'Salons',        href: '#testimonials' },
    { label: 'Contact',       href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'apple-nav' : 'bg-white/90 backdrop-blur-md'}`}>
        <div className="max-w-[980px] mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="#1D1D1F" strokeWidth="1.5" />
              <circle cx="11" cy="11" r="5" fill="#1D1D1F" opacity="0.12" />
              <circle cx="11" cy="11" r="2" fill="#1D1D1F" />
            </svg>
            <span className="text-[15px] font-semibold text-[#1D1D1F] tracking-tight">Digital Color</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className="text-[13px] text-[#1D1D1F]/70 hover:text-[#1D1D1F] transition-colors duration-200 whitespace-nowrap">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: patent badge + CTA */}
          <div className="flex items-center gap-3">
            {/* Patent badge — desktop only */}
            <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-[#6E6E73] bg-[#F5F5F7] px-2.5 py-1 rounded-full border border-[#D2D2D7]">
              <span>🇩🇪</span>
              <span className="font-medium">19+ Patents</span>
            </div>

            {/* Book Demo — desktop only */}
            <a href="#contact"
              className="btn-apple-primary !text-[13px] !py-2 !px-4 hidden md:inline-flex whitespace-nowrap">
              Book demo
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1D1D1F]/60 hover:text-[#1D1D1F]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — slide in from right */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 38 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-[320px] bg-white shadow-2xl md:hidden flex flex-col"
            >
              {/* Close button */}
              <div className="flex items-center justify-between px-6 h-14 border-b border-[#F5F5F7]">
                <span className="text-[15px] font-semibold text-[#1D1D1F]">Menu</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#6E6E73]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-6 pt-2">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center min-h-[48px] text-[17px] text-[#1D1D1F] border-b border-[#F5F5F7]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Book demo — full width at bottom */}
              <div className="px-6 pb-8 pt-4 border-t border-[#F5F5F7]">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-apple-primary w-full text-center py-4 text-[17px]"
                >
                  Book demo
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile sticky "Book Demo" floating button */}
      <AnimatePresence>
        {showMobileSticky && !menuOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
          >
            <a href="#contact"
              className="btn-apple-primary px-8 py-3.5 text-[16px] shadow-2xl"
              style={{ boxShadow: '0 8px 32px rgba(0,113,227,0.35)' }}>
              Book demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
