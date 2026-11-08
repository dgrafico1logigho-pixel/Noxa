import React from 'react';
import { Zap, ShieldCheck, ExternalLink, Github, Twitter, Linkedin, Send } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language].footer;

  return (
    <footer className="bg-[#050810] border-t border-white/10 text-slate-400 text-xs relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info & Mission (2 Cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-black font-extrabold shadow-lg shadow-cyan-500/20">
                <Zap className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                NOXA<span className="text-gradient-cyan">ADS</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{t.systemStatus}</span>
            </div>

            {/* Accepted Payout Methods */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block mb-2">
                Pasarelas de Pago Admitidas:
              </span>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
                <span className="px-2 py-1 bg-white/5 border border-white/5 rounded">USDT (TRC20)</span>
                <span className="px-2 py-1 bg-white/5 border border-white/5 rounded">Bitcoin (BTC)</span>
                <span className="px-2 py-1 bg-white/5 border border-white/5 rounded">Wire Internacional</span>
                <span className="px-2 py-1 bg-white/5 border border-white/5 rounded">PayPal</span>
                <span className="px-2 py-1 bg-white/5 border border-white/5 rounded">Paxum</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Producto & Formatos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.product}
            </h4>
            <ul className="space-y-2">
              <li><a href="#formatos" className="hover:text-cyan-400 transition-colors">Popunder / OnClick</a></li>
              <li><a href="#formatos" className="hover:text-cyan-400 transition-colors">Native Ads Widgets</a></li>
              <li><a href="#formatos" className="hover:text-cyan-400 transition-colors">In-Page Push & Web Push</a></li>
              <li><a href="#formatos" className="hover:text-cyan-400 transition-colors">Banners Display IAB</a></li>
              <li><a href="#formatos" className="hover:text-cyan-400 transition-colors">Video Outstream & VAST</a></li>
              <li><a href="#soluciones" className="hover:text-cyan-400 transition-colors">Header Bidding Algorítmico</a></li>
              <li><a href="#soluciones" className="hover:text-cyan-400 transition-colors">Tecnología Anti-AdBlock</a></li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Cumplimiento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.legal}
            </h4>
            <ul className="space-y-2">
              <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Términos del Servicio</a></li>
              <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Cumplimiento GDPR & CCPA</a></li>
              <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Protocolo IAB TCF 2.2</a></li>
              <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Política de Tráfico Anti-Fraude</a></li>
              <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Políticas de Contenido Aceptable</a></li>
              <li><a href="#legal" className="hover:text-cyan-400 transition-colors">Preferencias de Cookies</a></li>
            </ul>
          </div>

          {/* Links Column 3: Developers & API */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.resources}
            </h4>
            <ul className="space-y-2">
              <li><a href="#demo-dashboard" className="hover:text-cyan-400 transition-colors">API Docs (OpenRTB 3.0)</a></li>
              <li><a href="#demo-dashboard" className="hover:text-cyan-400 transition-colors">SDK Web Universal</a></li>
              <li><a href="#demo-dashboard" className="hover:text-cyan-400 transition-colors">Adaptador Prebid.js 8.x</a></li>
              <li><a href="#demo-dashboard" className="hover:text-cyan-400 transition-colors">Postback S2S & Webhooks</a></li>
              <li><a href="#demo-dashboard" className="hover:text-cyan-400 transition-colors">Changelog del AdServer</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Centro de Ayuda FAQ</a></li>
              <li><a href="#lead-form" className="hover:text-cyan-400 transition-colors">Contacto de Soporte VIP</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-slate-400">
              © {new Date().getFullYear()} NOXA Ads Network Inc. {t.rights}
            </p>
            <p className="text-[11px] text-slate-500 max-w-3xl">
              {t.compliance}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Telegram Community"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
