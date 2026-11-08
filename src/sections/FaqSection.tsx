import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Language, FaqItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FAQ_ITEMS } from '../data/faq';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].faq;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const filteredFaqs = activeCategory === 'all'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <Badge variant="cyan" pulse>
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            {t.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.subtitle}
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: t.filterAll },
              { id: 'publishers', label: t.filterPublishers },
              { id: 'advertisers', label: t.filterAdvertisers },
              { id: 'payments', label: t.filterPayments },
              { id: 'tech', label: t.filterTech },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-cyan-400 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">¿Tienes requerimientos especiales de tráfico o API?</h4>
              <p className="text-xs text-slate-400">Nuestros ingenieros de adtech responden en menos de 15 minutos.</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const leadEl = document.getElementById('lead-form');
              leadEl?.scrollIntoView({ behavior: 'smooth' });
            }}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Contactar Soporte VIP
          </Button>
        </div>

      </div>
    </section>
  );
};
