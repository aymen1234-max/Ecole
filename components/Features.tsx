'use client';

import { Headphones, ShieldCheck, Zap, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';

export default function Features() {
  const { t, language } = useLanguage();

  const FEATURES = [
    {
      title: t.certified,
      description: language === 'ar' ? 'شهادات معترف بها رسمياً تفتح لك أبواب الشغل.' : 'Des diplômes officiellement reconnus qui vous ouvrent les portes du marché du travail.',
      icon: ShieldCheck,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: t.expertTrainers,
      description: language === 'ar' ? 'تعلم من أفضل المحترفين في تونس.' : 'Apprenez auprès des meilleurs professionnels en Tunisie.',
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Support 24/7',
      description: language === 'ar' ? 'فريقنا متاح دائماً للإجابة على تساؤلاتكم.' : 'Notre équipe est toujours disponible pour répondre à vos questions.',
      icon: Headphones,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: language === 'ar' ? 'فرص تشغيل' : 'Placement Carrière',
      description: language === 'ar' ? 'نساعد طلابنا في الحصول على وظائف.' : 'Nous aidons nos étudiants à trouver des emplois.',
      icon: Zap,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="about">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${language === 'ar' ? 'rtl' : ''}`}>
          <h2 className="text-4xl font-bold mb-4">{t.whyChoose}</h2>
          <p className="text-lg text-slate-600">
            {language === 'ar' ? 'نحن نوفر بيئة تعلم شاملة تهدف إلى تحويل المبتدئين إلى محترفين.' : 'Nous offrons un écosystème d\'apprentissage complet conçu pour transformer les débutants en professionnels.'}
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 ${language === 'ar' ? 'rtl' : ''}`}>
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-3xl border border-slate-100 transition-all hover:shadow-xl group ${language === 'ar' ? 'text-right' : ''}`}
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${language === 'ar' ? 'mr-0 ml-auto' : ''}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
