import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { GlassCard } from '../components/ui/GlassCard';

interface RevenueCalculatorProps {
  language: Language;
  onOpenRegister: () => void;
}

export const RevenueCalculator: React.FC<RevenueCalculatorProps> = ({ language, onOpenRegister }) => {
  const t = TRANSLATIONS[language].calculator;
  const [pageviews, setPageviews] = useState<number>(500000);
  const [trafficTier, setTrafficTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier1');

  // Multipliers based on traffic tier
  const tierRates = {
    tier1: { baseEcpm: 6.85, label: t.tier1 },
    tier2: { baseEcpm: 4.40, label: t.tier2 },
    tier3: { baseEcpm: 2.75, label: t.tier3 },
  };

  const currentRate = tierRates[trafficTier];
  // Calculate projected monthly earnings: (pageviews * 2.2 ad units per page / 1000) * baseEcpm
  const estimatedImpressions = pageviews * 2.2;
  const estimatedMonthlyRevenue = Math.round((estimatedImpressions / 1000) * currentRate.baseEcpm);

  return (
    <section className="py-20 relative bg-gradient-radial from-cyan-950/20 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <GlassCard
          variant="gradient-border"
          glowColor="cyan"
          className="p-1"
        >
          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <Badge variant="cyan" pulse>
                <Calculator className="w-3.5 h-3.5 mr-1" />
                {t.badge}
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {t.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Controls Column (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Slider for Pageviews */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <label className="font-semibold text-slate-200">{t.monthlyViews}</label>
                    <span className="text-base sm:text-lg font-extrabold text-cyan-400 font-mono">
                      {pageviews.toLocaleString()} visitas
                    </span>
                  </div>

                  <input
                    type="range"
                    min={50000}
                    max={10000000}
                    step={50000}
                    value={pageviews}
                    onChange={(e) => setPageviews(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />

                  <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                    <span>50K</span>
                    <span>1M</span>
                    <span>5M</span>
                    <span>10M+</span>
                  </div>
                </div>

                {/* Tier Selection */}
                <div className="space-y-2">
                  <label className="font-semibold text-slate-200 text-xs sm:text-sm block">
                    {t.primaryGeo}
                  </label>
                  <div className="space-y-2">
                    {(['tier1', 'tier2', 'tier3'] as const).map((tierKey) => (
                      <button
                        key={tierKey}
                        onClick={() => setTrafficTier(tierKey)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                          trafficTier === tierKey
                            ? 'bg-cyan-500/10 border-cyan-400/60 text-white shadow-md'
                            : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <span className="font-medium">{tierRates[tierKey].label}</span>
                        <span className="font-mono font-bold text-cyan-400">
                          ~${tierRates[tierKey].baseEcpm.toFixed(2)} eCPM
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Earnings Result Card (5 Cols) */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-indigo-950/50 border border-cyan-500/30 text-center space-y-4 shadow-xl relative overflow-hidden">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                  {t.estimatedMonthlyRevenue}
                </span>

                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 font-mono tracking-tight">
                  ${estimatedMonthlyRevenue.toLocaleString()} <span className="text-base text-slate-300 font-sans font-normal">USD</span>
                </div>

                <div className="py-2 px-4 rounded-xl bg-black/40 border border-white/10 text-xs flex items-center justify-between text-slate-300 font-mono">
                  <span>{t.estimatedEcpm}:</span>
                  <span className="text-cyan-400 font-bold">${currentRate.baseEcpm.toFixed(2)} USD</span>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  {t.note}
                </p>

                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenRegister}
                  className="w-full justify-center font-bold"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Reclamar Estos Ingresos
                </Button>
              </div>

            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
