'use client';

import { useState, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, SlidersHorizontal, Plus, Check, ChevronRight } from 'lucide-react';
import {
  CATEGORIES, COLOR_MAP, ALL_COLORS, TOTAL_SHADES,
  isDark, simulateFormula,
  type ColorShade, type CategoryId,
} from '@/lib/colorData';

// ─── Hair-tress swatch ──────────────────────────────────────────────────────

type SwatchProps = {
  shade: ColorShade;
  isActive: boolean;
  isCompared: boolean;
  canCompare: boolean;
  onClick: () => void;
  onCompareToggle: () => void;
};

function HairTress({ shade, isActive, isCompared, canCompare, onClick, onCompareToggle }: SwatchProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col items-center gap-2 cursor-pointer select-none"
      onClick={onClick}
    >
      {/* Tress shape */}
      <div className="relative">
        {/* Active ring */}
        {isActive && (
          <motion.div
            layoutId="activeRing"
            className="absolute -inset-[3px] rounded-[6px] z-10 pointer-events-none"
            style={{
              clipPath: 'polygon(20% 0%, 80% 0%, 97% 16%, 100% 100%, 0% 100%, 3% 16%)',
              background: '#0071E3',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          />
        )}

        {/* Compare badge */}
        {isCompared && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 z-20 w-4 h-4 rounded-full bg-[#0071E3] flex items-center justify-center"
          >
            <Check size={9} className="text-white" strokeWidth={3} />
          </motion.div>
        )}

        {/* Main tress */}
        <motion.div
          className="relative overflow-hidden transition-shadow duration-200"
          style={{
            width: 48,
            height: 80,
            backgroundColor: shade.hex,
            clipPath: 'polygon(20% 0%, 80% 0%, 97% 16%, 100% 100%, 0% 100%, 3% 16%)',
            boxShadow: isActive
              ? `0 0 0 3px white, 0 0 0 5px #0071E3`
              : '0 2px 8px rgba(0,0,0,0.12)',
          }}
          whileHover={{ scale: 1.14, y: -4 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        >
          {/* Sheen overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
            }}
          />
        </motion.div>

        {/* Compare toggle — appears on hover */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 ${
            isCompared
              ? 'bg-[#0071E3]'
              : canCompare
              ? 'bg-[#1D1D1F]/70 hover:bg-[#1D1D1F]'
              : 'bg-[#D2D2D7] cursor-not-allowed'
          }`}
          onClick={(e) => { e.stopPropagation(); if (canCompare || isCompared) onCompareToggle(); }}
          title={isCompared ? 'Remove from compare' : 'Add to compare'}
        >
          {isCompared
            ? <Check size={8} className="text-white" strokeWidth={3} />
            : <Plus size={8} className="text-white" strokeWidth={3} />
          }
        </motion.button>
      </div>

      {/* Shade ID */}
      <span className="text-[11px] text-[#6E6E73] group-hover:text-[#1D1D1F] transition-colors duration-200 font-medium leading-none">
        {shade.id}
      </span>

      {/* Name tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
        <div className="bg-[#1D1D1F] text-white text-[11px] px-2.5 py-1.5 rounded-lg shadow-xl">
          {shade.name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1D1D1F] rotate-45" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Detail panel ────────────────────────────────────────────────────────────

type DetailPanelProps = {
  shade: ColorShade;
  inFormula: boolean;
  onAddToFormula: () => void;
  onClose: () => void;
};

function DetailPanel({ shade, inFormula, onAddToFormula, onClose }: DetailPanelProps) {
  const dark = isDark(shade.hex);
  const formula = useMemo(() => simulateFormula(shade), [shade.id]);
  const catLabel = CATEGORIES.find(c => c.id === shade.category)?.label ?? shade.category;

  return (
    <motion.div
      key={shade.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="sticky top-24 apple-card overflow-hidden"
    >
      {/* Large swatch area */}
      <div
        className="relative h-52 flex items-end p-5"
        style={{ backgroundColor: shade.hex }}
      >
        {/* Hair tress shape decorative — large */}
        <div
          className="absolute right-6 top-4 opacity-20"
          style={{
            width: 72,
            height: 120,
            backgroundColor: dark ? 'white' : 'black',
            clipPath: 'polygon(20% 0%, 80% 0%, 97% 16%, 100% 100%, 0% 100%, 3% 16%)',
          }}
        />

        <div>
          <span
            className={`text-[12px] font-semibold uppercase tracking-wider ${dark ? 'text-white/60' : 'text-black/50'}`}
          >
            {catLabel}
          </span>
          <h3
            className={`text-[24px] font-semibold tracking-tight mt-0.5 ${dark ? 'text-white' : 'text-[#1D1D1F]'}`}
          >
            {shade.name}
          </h3>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center ${dark ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-black/10 text-black/60 hover:bg-black/20'} transition-colors`}
        >
          <X size={14} />
        </button>
      </div>

      {/* Info rows */}
      <div className="p-5 space-y-0">
        {[
          { label: 'Shade ID',   value: shade.id },
          { label: 'Hex value',  value: shade.hex.toUpperCase() },
          { label: 'Category',   value: catLabel },
          { label: 'AI Formula', value: formula },
        ].map((row, i, arr) => (
          <div
            key={row.label}
            className={`flex justify-between items-start py-3.5 ${i < arr.length - 1 ? 'border-b border-[#F2F2F2]' : ''}`}
          >
            <span className="text-[13px] text-[#6E6E73] flex-shrink-0">{row.label}</span>
            <span className="text-[13px] text-[#1D1D1F] font-medium text-right ml-4 leading-snug max-w-[55%]">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      {shade.tags && (
        <div className="px-5 pb-4 flex flex-wrap gap-1.5">
          {shade.tags.map(tag => (
            <span key={tag} className="text-[11px] bg-[#F5F5F7] text-[#6E6E73] px-2.5 py-1 rounded-full capitalize">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="p-5 pt-2 space-y-2.5">
        <motion.button
          onClick={onAddToFormula}
          className={`w-full py-3 rounded-2xl text-[15px] font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            inFormula
              ? 'bg-[#34C759] text-white'
              : 'bg-[#0071E3] text-white hover:bg-[#0077ED]'
          }`}
          whileTap={{ scale: 0.98 }}
        >
          {inFormula ? (
            <><Check size={16} /> Added to formula</>
          ) : (
            <><Plus size={16} /> Add to my formula</>
          )}
        </motion.button>

        <a
          href="#contact"
          className="w-full py-3 rounded-2xl text-[15px] text-[#0071E3] border border-[#0071E3] hover:bg-[#0071E3] hover:text-white transition-all duration-200 flex items-center justify-center gap-1.5"
        >
          Request this shade <ChevronRight size={14} />
        </a>
      </div>
    </motion.div>
  );
}

// ─── Compare drawer ──────────────────────────────────────────────────────────

function CompareDrawer({
  shades,
  onRemove,
  onClear,
}: {
  shades: ColorShade[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  return (
    <AnimatePresence>
      {shades.length > 0 && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white border border-[#D2D2D7] rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-5"
          style={{ minWidth: 340 }}
        >
          <div className="flex items-center gap-3 flex-1">
            {shades.map(shade => (
              <div key={shade.id} className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="w-8 h-8 rounded-lg border border-[#D2D2D7] shadow-sm"
                    style={{ backgroundColor: shade.hex }}
                  />
                  <button
                    onClick={() => onRemove(shade.id)}
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#6E6E73] flex items-center justify-center hover:bg-[#1D1D1F] transition-colors"
                  >
                    <X size={8} className="text-white" strokeWidth={3} />
                  </button>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-[#1D1D1F] leading-none">{shade.id}</p>
                  <p className="text-[10px] text-[#6E6E73] mt-0.5 leading-none">{shade.name}</p>
                </div>
              </div>
            ))}

            {/* Empty slots */}
            {Array.from({ length: 3 - shades.length }, (_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-lg border-2 border-dashed border-[#D2D2D7] flex items-center justify-center"
              >
                <Plus size={12} className="text-[#AEAEB2]" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[13px] text-[#6E6E73]">Comparing {shades.length} of 3</span>
            <button
              onClick={onClear}
              className="text-[13px] text-[#0071E3] hover:underline"
            >
              Clear
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ColorCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('life');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedShade, setSelectedShade] = useState<ColorShade | null>(null);
  const [compareList, setCompareList] = useState<ColorShade[]>([]);
  const [formulaList, setFormulaList] = useState<Set<string>>(new Set());
  const searchRef = useRef<HTMLInputElement>(null);

  // All colors for the active category
  const categoryColors = COLOR_MAP[activeCategory];

  // Filtered by search (searches across ALL categories if query active)
  const displayColors = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categoryColors;
    return ALL_COLORS.filter(
      c =>
        c.id.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        (c.tags ?? []).some(t => t.includes(q))
    );
  }, [activeCategory, categoryColors, searchQuery]);

  const isSearching = searchQuery.trim().length > 0;
  const totalVisible = displayColors.length;

  // Compare logic
  const toggleCompare = useCallback((shade: ColorShade) => {
    setCompareList(prev => {
      if (prev.find(s => s.id === shade.id)) return prev.filter(s => s.id !== shade.id);
      if (prev.length >= 3) return prev;
      return [...prev, shade];
    });
  }, []);

  const canCompare = (shade: ColorShade) =>
    compareList.length < 3 || !!compareList.find(s => s.id === shade.id);

  // Formula logic
  const toggleFormula = useCallback((shade: ColorShade) => {
    setFormulaList(prev => {
      const next = new Set(prev);
      if (next.has(shade.id)) next.delete(shade.id); else next.add(shade.id);
      return next;
    });
  }, []);

  // Category switch
  const handleCategoryChange = (id: CategoryId) => {
    setActiveCategory(id);
    setSelectedShade(null);
    setSearchQuery('');
  };

  return (
    <section id="color-catalog" className="section-white py-28 relative">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">Professional color catalog</p>
          <h2 className="headline-lg mb-5">Every shade, precisely yours.</h2>
          <p className="body-text max-w-[520px] mx-auto">
            Browse the complete Digital Color professional chart — {TOTAL_SHADES.toLocaleString()}+ shades across five
            series, each formulated from 12 German-manufactured base pigments.
          </p>
        </motion.div>

        {/* ── Category tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-1 mb-8"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-[15px] transition-all duration-200 ${
                activeCategory === cat.id && !isSearching
                  ? 'bg-[#1D1D1F] text-white font-medium'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              {cat.shortLabel}
              <span className={`ml-1.5 text-[11px] ${
                activeCategory === cat.id && !isSearching ? 'text-white/60' : 'text-[#AEAEB2]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── Category description ── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={isSearching ? 'search' : activeCategory}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="text-center text-[15px] text-[#6E6E73] mb-10 h-5"
          >
            {isSearching
              ? `Search results across all categories`
              : CATEGORIES.find(c => c.id === activeCategory)?.description}
          </motion.p>
        </AnimatePresence>

        {/* ── Toolbar: search + count ── */}
        <div className="flex items-center justify-between gap-4 mb-10 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 max-w-[320px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#AEAEB2]" />
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search shade number or name…"
              className="w-full pl-9 pr-9 py-2.5 text-[15px] rounded-xl bg-[#F5F5F7] border-0 text-[#1D1D1F] placeholder-[#AEAEB2] focus:outline-none focus:ring-2 focus:ring-[#0071E3] transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AEAEB2] hover:text-[#6E6E73]"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Compare indicator */}
            {compareList.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1.5 text-[13px] text-[#0071E3]"
              >
                <SlidersHorizontal size={14} />
                Comparing {compareList.length}
              </motion.div>
            )}

            {/* Formula count */}
            {formulaList.size > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[13px] text-[#34C759]"
              >
                {formulaList.size} in formula
              </motion.div>
            )}

            {/* Shade count */}
            <p className="text-[13px] text-[#AEAEB2]">
              Showing <span className="text-[#1D1D1F] font-medium">{totalVisible}</span> of{' '}
              <span className="text-[#1D1D1F] font-medium">{TOTAL_SHADES.toLocaleString()}+</span> shades
            </p>
          </div>
        </div>

        {/* ── Main layout: grid + detail panel ── */}
        <div className={`grid gap-10 ${selectedShade ? 'lg:grid-cols-[1fr,300px]' : 'grid-cols-1'}`}>

          {/* ── Swatch grid ── */}
          <div>
            <AnimatePresence mode="wait">
              {displayColors.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-4">
                    <Search size={22} className="text-[#AEAEB2]" />
                  </div>
                  <p className="text-[17px] text-[#1D1D1F] font-medium mb-1">No shades found</p>
                  <p className="text-[15px] text-[#6E6E73]">Try a different name or shade number</p>
                  <button onClick={() => setSearchQuery('')} className="mt-5 btn-apple-secondary text-[15px] !py-2 !px-5">
                    Clear search
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={isSearching ? 'search-grid' : activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap gap-x-5 gap-y-7"
                >
                  {displayColors.map((shade) => (
                    <HairTress
                      key={shade.id}
                      shade={shade}
                      isActive={selectedShade?.id === shade.id}
                      isCompared={!!compareList.find(s => s.id === shade.id)}
                      canCompare={canCompare(shade)}
                      onClick={() => setSelectedShade(prev => prev?.id === shade.id ? null : shade)}
                      onCompareToggle={() => toggleCompare(shade)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* ── Detail panel ── */}
          <AnimatePresence>
            {selectedShade && (
              <DetailPanel
                key={selectedShade.id}
                shade={selectedShade}
                inFormula={formulaList.has(selectedShade.id)}
                onAddToFormula={() => toggleFormula(selectedShade)}
                onClose={() => setSelectedShade(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Compare drawer ── */}
      <CompareDrawer
        shades={compareList}
        onRemove={(id) => setCompareList(prev => prev.filter(s => s.id !== id))}
        onClear={() => setCompareList([])}
      />
    </section>
  );
}
