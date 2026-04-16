'use client';

import React, { createContext, useContext, useState } from 'react';
import { Lang, translations } from './translations';

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations['en'];
};

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations['en'],
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang: Lang = 'en';
  const setLang = (_: Lang) => {};
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div dir={t.dir}>
        {children}
      </div>
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
