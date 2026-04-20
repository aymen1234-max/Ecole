'use client';

import { useMemo } from 'react';
import Hero from '@/components/Hero';
import SpecialtyCard from '@/components/SpecialtyCard';
import Features from '@/components/Features';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'motion/react';
import { ALL_SPECIALTIES } from '@/lib/data/specialties';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();
  
  // Show a balanced selection on home page
  const homeSpecialties = useMemo(() => {
    const featured = [
      'dipl-1', // Info
      'dipl-3', // Douane
      'art-1',  // Cuisine
      'art-2',  // Patisserie
      'lang-1', // Anglais
      'acc-1'   // Cils
    ];
    return ALL_SPECIALTIES.filter(s => featured.includes(s.id));
  }, []);

  return (
    <>
      <Hero />
      
      {/* Specialties Grid Section */}
      <section className="py-24 bg-white" id="specialties">
        <div className="container-custom">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${language === 'ar' ? 'rtl' : ''}`}>
            <h2 className="text-4xl font-bold mb-4">{t.topSpecialties}</h2>
            <p className="text-lg text-slate-600">
              {language === 'ar' ? 'استكشف برامجنا التدريبية الأكثر شعبية، المصممة لتزويدك بالخبرة العملية.' : 'Explorez nos programmes de formation les plus populaires.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {homeSpecialties.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SpecialtyCard specialty={item} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/specialties" 
              className={`inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95 group ${language === 'ar' ? 'flex-row-reverse' : ''}`}
            >
              {language === 'ar' ? 'عرض الكل' : 'Voir Plus'}
              <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      <Features />
    </>
  );
}
