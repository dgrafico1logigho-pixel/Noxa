import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { AudienceType, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Button } from './ui/Button';

interface NavbarProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  currentAudience: AudienceType;
  onAudienceChange: (audience: AudienceType) => void;
  onOpenAuth: (mode?: 'login' | 'register') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  currentAudience,
  onAudienceChange,
  onOpenAuth,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLanguage].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.solutions, href: '#soluciones' },
    { name: t.publishers, href: '#soluciones', onClick: () => onAudienceChange('publishers') },
    { name: t.advertisers, href: '#soluciones', onClick: () => onAudienceChange('advertisers') },
    { name: t.formats, href: '#formatos' },
    { name: t.metrics, href: '#metricas' },
    { name: t.dashboard, href: '#demo-dashboard' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070a12]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-xl p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#070a12] rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                NOXA<span className="text-gradient-cyan">ADS</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider -mt-1 uppercase">
                AdTech Network
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación Principal">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={link.onClick}
                className="text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-md px-1.5 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions, Audience Pill & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Publisher / Advertiser Toggle Pill */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-white/10 text-xs">
              <button
                onClick={() => onAudienceChange('publishers')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  currentAudience === 'publishers'
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.rolePublisher}
              </button>
              <button
                onClick={() => onAudienceChange('advertisers')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  currentAudience === 'advertisers'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.roleAdvertiser}
              </button>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLanguage === 'es' ? 'en' : 'es')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase">{currentLanguage}</span>
            </button>

            {/* Ghost CTA: Iniciar Sesión */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenAuth('login')}
            >
              {t.login}
            </Button>

            {/* Primary Gradient CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenAuth('register')}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              {t.register}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onLanguageChange(currentLanguage === 'es' ? 'en' : 'es')}
              className="p-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 border border-white/10"
            >
              <span className="uppercase">{currentLanguage}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-4 animate-slideDown">
          {/* Audience Switcher Mobile */}
          <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-900 border border-white/10">
            <button
              onClick={() => {
                onAudienceChange('publishers');
                setMobileMenuOpen(false);
              }}
              className={`py-2 text-xs font-bold rounded-lg ${
                currentAudience === 'publishers' ? 'bg-cyan-500 text-black' : 'text-slate-400'
              }`}
            >
              Para Editores
            </button>
            <button
              onClick={() => {
                onAudienceChange('advertisers');
                setMobileMenuOpen(false);
              }}
              className={`py-2 text-xs font-bold rounded-lg ${
                currentAudience === 'advertisers' ? 'bg-purple-600 text-white' : 'text-slate-400'
              }`}
            >
              Para Anunciantes
            </button>
          </div>

          {/* Nav Links */}
          <div className="space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => {
                  if (link.onClick) link.onClick();
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs Mobile */}
          <div className="pt-2 border-t border-white/10 space-y-2">
            <Button
              variant="secondary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
            >
              {t.login}
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('register');
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {t.register}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
