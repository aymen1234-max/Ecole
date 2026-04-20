'use client';

import { User, Clock, BookOpen } from 'lucide-react';
import type { Specialty } from '@/lib/types';
import { useLanguage } from '@/context/LanguageContext';

interface SpecialtyCardProps {
  specialty: Specialty;
}

export default function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const { language } = useLanguage();

  return (
    <div className={`group bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-2 ${language === 'ar' ? 'text-right' : ''}`}>
      {/* Top Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={specialty.image} 
          alt={specialty.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute top-4 ${language === 'ar' ? 'right-4' : 'left-4'}`}>
          <span className="bg-white/90 backdrop-blur-sm text-brand-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {specialty.category}
          </span>
        </div>
      </div>

      {/* Middle Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-display leading-tight mb-4 line-clamp-2 h-14 group-hover:text-brand-primary transition-colors">
          {specialty.title}
        </h3>
        
        <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={specialty.instructorImage} 
              alt={specialty.instructor} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className={`flex items-center gap-1.5 text-sm text-slate-500 font-medium ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <User className="w-3.5 h-3.5" />
            <span>{specialty.instructor}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6">
        <div className="h-px bg-slate-50 w-full" />
      </div>

      {/* Bottom Footer */}
      <div className={`p-6 flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
        <div className={`flex items-center gap-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center gap-1 text-xs text-slate-400 font-medium ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <Clock className="w-3.5 h-3.5" />
            <span>{specialty.duration}</span>
          </div>
          <div className={`flex items-center gap-1 text-xs text-slate-400 font-medium ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>{specialty.lessons} {language === 'ar' ? 'درس' : 'Leçons'}</span>
          </div>
        </div>
        
        <div className="text-lg font-bold text-brand-primary">
          {specialty.price} TND
        </div>
      </div>
    </div>
  );
}
