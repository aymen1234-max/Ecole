'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="py-24 container-custom min-h-[60vh]">
      <h1 className="text-4xl font-bold mb-8">{t.about} - Ecole Elyssa</h1>
      <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
        Bienvenue à l'Ecole Elyssa, leader de la formation professionnelle en Tunisie. 
        Notre mission est de vous accompagner vers l'excellence professionnelle.
      </p>
    </div>
  );
}
