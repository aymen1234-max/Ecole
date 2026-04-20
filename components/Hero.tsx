'use client';

import { Users, Trophy, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32" id="hero">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${language === 'ar' ? 'lg:rtl' : ''}`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={language === 'ar' ? 'text-right lg:order-2' : ''}
          >
            <div className={`inline-flex items-center gap-2 bg-blue-50 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Star className="w-4 h-4 fill-current" />
              <span>{t.certified}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              {t.heroTitle} <span className="text-brand-primary font-display">{t.heroTitleHighlight}</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              {t.heroSub}
            </p>

            <div className={`flex flex-col sm:flex-row items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <a 
                href="#specialties"
                className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                {t.discoverFormations}
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </a>
            </div>

            <div className={`mt-10 flex items-center gap-8 grayscale opacity-60 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">10k+ {language === 'ar' ? 'طالب' : 'Étudiants'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span className="text-sm font-medium">{t.certified}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative ${language === 'ar' ? 'lg:order-1' : ''}`}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-400/20">
              <img 
                src="https://picsum.photos/seed/elyssa/800/1000" 
                alt="Ecole Elyssa Training" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Stat Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute ${language === 'ar' ? '-right-6' : '-left-6'} top-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100`}
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div className={language === 'ar' ? 'text-right' : ''}>
                <p className="text-sm font-bold">12,000+</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">{t.happyStudents}</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute ${language === 'ar' ? '-left-6' : '-right-6'} bottom-1/4 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 border border-slate-100`}
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-orange-600" />
              </div>
              <div className={language === 'ar' ? 'text-right' : ''}>
                <p className="text-sm font-bold">{t.expertTrainers}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">200+ Mentors</p>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
