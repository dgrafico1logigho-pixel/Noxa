import React from 'react';
import {
  Cpu, CreditCard, ShieldCheck, Headphones, Zap, Sliders,
  Layers, Target, ShieldAlert, BarChart3, Webhook, Sparkles,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import { Language, AudienceType, SolutionItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PUBLISHER_SOLUTIONS, ADVERTISER_SOLUTIONS } from '../data/solutions';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

interface SolutionsSectionProps {
  language: Language;
  audience: AudienceType;
  onAudienceChange: (audience: AudienceType) => void;
  onOpenAuth: (mode?: 'login' | 'register', role?: 'publisher' | 'advertiser') => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  language,
  audience,
  onAudienceChange,
  onOpenAuth,
}) => {
  const t = TRANSLATIONS[language].solutions;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-purple-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-teal-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Target': return <Target className="w-5 h-5 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 'Webhook': return <Webhook className="w-5 h-5 text-pink-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-indigo-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const solutions = audience === 'publishers' ? PUBLISHER_SOLUTIONS : ADVERTISER_SOLUTIONS;

  return (
    <section id="soluciones" className="py-24 relative overflow-hidden">
      {/* Background radial soft lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="cyan" pulse>
            Soluciones Especializadas
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.subtitle}
          </p>

          {/* Interactive Segmented Switcher Pill */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 shadow-xl mt-4">
            <button
              onClick={() => onAudienceChange('publishers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                audience === 'publishers'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              {t.tabPublishers}
            </button>
            <button
              onClick={() => onAudienceChange('advertisers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                audience === 'advertisers'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Target className="w-4 h-4" />
              {t.tabAdvertisers}
            </button>
          </div>
        </div>

        {/* Feature Cards Grid (6 deep cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((item) => (
            <GlassCard
              key={item.id}
              variant="interactive"
              className="p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-500/40 relative"
            >
              <div>
                {/* Top Badge and Metric Highlight */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-cyan-400 font-mono block">
                      {item.statsMetric}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      {item.statsLabel}
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Tags List */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium bg-slate-900 text-slate-400 px-2 py-0.5 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Segmented Bottom Call To Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-850/80 to-slate-900/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {audience === 'publishers'
                ? '¿Listo para duplicar el rendimiento de tus bloques publicitarios?'
                : '¿Necesitas tráfico masivo a escala y libre de bots para tus ofertas?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              {audience === 'publishers'
                ? 'Comienza a monetizar en minutos con aprobación instantánea y pagos Net-7 garantizados.'
                : 'Crea tu primera campaña con segmentación por operador, OS y retargeting desde $100 USD.'}
            </p>
          </div>

          <Button
            variant={audience === 'publishers' ? 'primary' : 'emerald'}
            size="lg"
            onClick={() => onOpenAuth('register', audience === 'publishers' ? 'publisher' : 'advertiser')}
            className="shrink-0 w-full sm:w-auto"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            {audience === 'publishers' ? 'Registrarme como Editor' : 'Lanzar Campaña de Anunciante'}
          </Button>
        </div>

      </div>
    </section>
  );
};
