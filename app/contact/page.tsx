'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <div className="py-24 container-custom">
      <div className={`grid lg:grid-cols-2 gap-16 ${language === 'ar' ? 'lg:rtl' : ''}`}>
        <div className={language === 'ar' ? 'text-right' : ''}>
          <h1 className="text-4xl font-bold mb-6">{t.contact}</h1>
          <p className="text-lg text-slate-600 mb-10">
            {language === 'ar' ? 'نحن هنا للإجابة على جميع تساؤلاتكم.' : 'Nous sommes là pour répondre à toutes vos questions.'}
          </p>

          <div className="space-y-8">
            <div className={`flex items-start gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="bg-blue-50 p-4 rounded-2xl text-brand-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-slate-600">contact@elyssa.tn</p>
              </div>
            </div>

            <div className={`flex items-start gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="bg-green-50 p-4 rounded-2xl text-green-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Téléphone</h3>
                <p className="text-slate-600">+216 71 000 000</p>
              </div>
            </div>

            <div className={`flex items-start gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="bg-orange-50 p-4 rounded-2xl text-orange-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Adresse</h3>
                <p className="text-slate-600">Tunis Centre, Tunisie</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <form className={`space-y-6 ${language === 'ar' ? 'text-right' : ''}`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2">Nom Complet</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-primary" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Email</label>
                <input type="email" className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea rows={5} className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-primary"></textarea>
            </div>
            <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
              <Send className="w-5 h-5" />
              Envoyer Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
