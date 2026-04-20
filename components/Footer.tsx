'use client';

import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10" id="contact">
      <div className="container-custom">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 ${language === 'ar' ? 'rtl text-right' : ''}`}>
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="bg-brand-primary p-2 rounded-lg">
                < BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                Ecole <span className="text-brand-primary">Elyssa</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {t.footerDesc}
            </p>
            <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="hover:text-brand-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">{t.quickLinks}</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">{t.specialties}</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">{t.instructors}</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">{t.about}</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">{t.contact}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">{t.contact}</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Mail className="w-4 h-4 text-brand-primary" />
                <span>contact@elyssa.tn</span>
              </li>
              <li className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Phone className="w-4 h-4 text-brand-primary" />
                <span>+216 71 000 000</span>
              </li>
              <li className={`flex items-center gap-3 text-slate-400 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                <span>Tunis, Tunisie</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">{t.newsletter}</h3>
            <p className="text-sm text-slate-400 mb-4">
              {language === 'ar' ? 'احصل على آخر التحديثات حول الدورات وتلميحات العمل.' : 'Recevez les dernières mises à jour sur les cours et les conseils de carrière.'}
            </p>
            <div className={`flex gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <input 
                type="email" 
                placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Votre email'}
                className="bg-slate-900 border border-slate-800 text-sm px-4 py-3 rounded-xl w-full focus:outline-none focus:ring-1 focus:ring-brand-primary" 
              />
              <button className="bg-brand-primary text-white p-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                {language === 'ar' ? 'اشترك' : 'Rejoindre'}
              </button>
            </div>
          </div>
        </div>

        <div className={`border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <p>© 2026 Ecole Elyssa. {t.allRights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
