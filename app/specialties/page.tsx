'use client';

import { useState, useMemo } from 'react';
import SpecialtyCard from '@/components/SpecialtyCard';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_SPECIALTIES } from '@/lib/data/specialties';

export default function Specialties() {
  const { t, language } = useLanguage();
  
  const categories = useMemo(() => {
    const cats = Array.from(new Set(ALL_SPECIALTIES.map(s => s.category)));
    return language === 'ar' ? cats.reverse() : cats;
  }, [language]);

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredSpecialties = useMemo(() => {
    return ALL_SPECIALTIES.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${language === 'ar' ? 'rtl' : ''}`}>
          <h1 className="text-5xl font-bold mb-6">{t.viewAll}</h1>
          <p className="text-xl text-slate-600">
            {language === 'ar' 
              ? 'اكتشف جميع الاختصاصات والبرامج التدريبية المتاحة في مدرسة إليسا عبر أقسامنا المتخصصة.' 
              : 'Découvrez toutes les spécialités et programmes de formation disponibles à l\'Ecole Elyssa à travers nos pôles spécialisés.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-primary text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-white text-slate-600 border border-slate-100 hover:border-brand-primary hover:text-brand-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredSpecialties.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <SpecialtyCard specialty={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSpecialties.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            {language === 'ar' ? 'لا توجد دورات في هذا القسم حالياً.' : 'Aucun cours disponible dans cette catégorie pour le moment.'}
          </div>
        )}
      </div>
    </div>
  );
}
