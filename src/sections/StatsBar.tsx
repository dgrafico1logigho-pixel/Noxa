import React from 'react';
import { Eye, Activity, Users, CreditCard, ArrowUpRight, TrendingUp } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HERO_METRICS } from '../data/metrics';
import { GlassCard } from '../components/ui/GlassCard';

interface StatsBarProps {
  language: Language;
}

export const StatsBar: React.FC<StatsBarProps> = ({ language }) => {
  const t = TRANSLATIONS[language].stats;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Eye':
        return <Eye className="w-6 h-6 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-purple-400" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-blue-400" />;
      default:
        return <TrendingUp className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="metricas" className="py-16 relative bg-[#070a12]/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* 4-Column Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_METRICS.map((metric) => (
            <GlassCard
              key={metric.id}
              variant="interactive"
              glowColor="cyan"
              className="p-6 relative group flex flex-col justify-between"
            >
              {/* Top Row: Icon & Highlight Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                  {getIcon(metric.iconName)}
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  {metric.highlight}
                </span>
              </div>

              {/* Center: Big Value */}
              <div className="space-y-1 mb-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono group-hover:text-cyan-300 transition-colors">
                  {metric.value}
                </div>
                <h3 className="text-sm font-bold text-slate-200">
                  {metric.label}
                </h3>
              </div>

              {/* Subtext */}
              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                {metric.subtext}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
