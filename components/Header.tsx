'use client';

import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const NAV_LINKS = [
    { name: t.home, href: '/' },
    { name: t.specialties, href: '/specialties' },
    { name: t.instructors, href: '/instructors' },
    { name: t.about, href: '/about' },
    { name: t.contact, href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="announcement-bar">
        <div className="container-custom flex justify-between items-center">
          <div className="flex gap-4">
            <span className="hidden sm:inline">Inscriptions Ouvertes</span>
            <span>Tel: +216 23473705</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage('fr')}
              className={`hover:text-brand-primary transition-colors ${language === 'fr' ? 'text-brand-primary font-bold underline underline-offset-4' : ''}`}
            >
              FR
            </button>
            <span className="opacity-30">|</span>
            <button
              onClick={() => setLanguage('ar')}
              className={`hover:text-brand-primary transition-colors ${language === 'ar' ? 'text-brand-primary font-bold underline underline-offset-4' : ''}`}
            >
              عربي
            </button>
          </div>
        </div>
      </div>

      <header
        className={`glass-header ${scrolled ? 'py-3 shadow-md' : 'py-5'}`}
        id="header"
      >
        <div className="container-custom">
          <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="group-hover:-rotate-6 transition-transform duration-300">
                <Image src="/ecoleelyssa.png" alt="Ecole Elyssa Logo" width={70} height={70} className="rounded-xl object-contain" />
              </div>
              <span className="text-2xl font-bold font-display text-brand-secondary tracking-tight">
                Ecole <span className="text-brand-primary">Elyssa</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden md:flex items-center gap-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-semibold transition-colors group ${pathname === link.href ? 'text-brand-primary' : 'text-slate-600 hover:text-brand-primary'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </Link>
              ))}
            </nav>

            {/* Desktop Auth */}
            <div className={`hidden md:flex items-center gap-6 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                {t.login}
              </a>
              <button className="bg-brand-primary hover:bg-blue-700 text-white px-7 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                {t.register}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-brand-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className={`container-custom py-8 flex flex-col gap-5 ${language === 'ar' ? 'text-right' : ''}`}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xl font-bold text-slate-700 hover:text-brand-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-slate-100 my-2" />
                <div className="flex flex-col gap-5">
                  <a href="#" className="text-xl font-bold text-slate-700 hover:text-brand-primary">
                    {t.login}
                  </a>
                  <button className="bg-brand-primary text-white w-full py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 text-lg">
                    {t.register}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
