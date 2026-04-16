'use client';

import { useLang } from '@/lib/context';

const pressLogos = [
  { name: 'Modern Salon', abbr: 'MS' },
  { name: 'Allure Pro', abbr: 'AP' },
  { name: 'Behind The Chair', abbr: 'BTC' },
  { name: 'Salon Today', abbr: 'ST' },
];

export default function Footer() {
  const { t } = useLang();
  const l = t.footer.links;

  const columns = [
    {
      title: l.product,
      links: [
        { label: l.technology, href: '#technology' },
        { label: l.colors, href: '#color-catalog' },
        { label: l.pricing, href: '#contact' },
        { label: l.demo, href: '#contact' },
      ],
    },
    {
      title: l.company,
      links: [
        { label: l.about, href: '#' },
        { label: l.careers, href: '#' },
        { label: l.press, href: '#' },
        { label: l.partners, href: '#' },
      ],
    },
    {
      title: l.legal,
      links: [
        { label: l.privacy, href: '#' },
        { label: l.terms, href: '#' },
        { label: l.certifications, href: '#' },
      ],
    },
  ];

  return (
    <footer className="section-gray border-t border-[#D2D2D7]">

      {/* As seen in */}
      <div className="border-b border-[#D2D2D7] py-5">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] text-[#AEAEB2] uppercase tracking-widest mr-3">As seen in</span>
            {pressLogos.map(p => (
              <div key={p.name}
                className="px-4 py-2 bg-white rounded-xl border border-[#D2D2D7] flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#F5F5F7] flex items-center justify-center text-[8px] font-bold text-[#6E6E73]">{p.abbr}</div>
                <span className="text-[12px] text-[#6E6E73] font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[980px] mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[2fr,1fr,1fr,1fr] gap-10 md:gap-8 pb-10 border-b border-[#D2D2D7]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <circle cx="11" cy="11" r="10" stroke="#1D1D1F" strokeWidth="1.5" />
                <circle cx="11" cy="11" r="5" fill="#1D1D1F" opacity="0.12" />
                <circle cx="11" cy="11" r="2" fill="#1D1D1F" />
              </svg>
              <span className="text-[15px] font-semibold text-[#1D1D1F]">Digital Color</span>
            </div>
            <p className="text-[13px] text-[#6E6E73] leading-relaxed mb-5 max-w-[220px]">{t.footer.tagline}</p>

            {/* Germany badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#D2D2D7] px-3 py-2 rounded-xl mb-4">
              <GermanyFlag />
              <span className="text-[11px] text-[#6E6E73]">{t.footer.madeIn}</span>
            </div>

            {/* Patent badge */}
            <div className="flex items-center gap-2 bg-white border border-[#D2D2D7] px-3 py-2 rounded-xl w-fit">
              <span className="text-sm">⚙️</span>
              <span className="text-[11px] text-[#6E6E73]">19+ core patents worldwide</span>
            </div>
          </div>

          {columns.map(col => (
            <div key={col.title} className="text-center md:text-left">
              <p className="text-[12px] font-semibold text-[#1D1D1F] uppercase tracking-wider mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[13px] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[12px] text-[#6E6E73]">{t.footer.copyright}</p>
          <div className="flex items-center gap-4 flex-wrap">
            {['ISO 9001', 'DIN Standard', 'EU Cosmetics', '19+ Patents'].map(cert => (
              <span key={cert} className="text-[11px] text-[#AEAEB2]">{cert}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function GermanyFlag() {
  return (
    <div className="w-6 h-4 rounded-sm overflow-hidden flex flex-col border border-[#D2D2D7]">
      <div className="flex-1 bg-[#1a1a1a]" />
      <div className="flex-1 bg-[#DD0000]" />
      <div className="flex-1 bg-[#FFCE00]" />
    </div>
  );
}
