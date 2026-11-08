import React, { useState } from 'react';
import {
  TrendingUp, Calendar, Globe, DollarSign, Eye, Activity,
  Filter, Download, ArrowUpRight, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Language, GeoStat } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TOP_GEOS } from '../data/metrics';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

interface DemoDashboardSectionProps {
  language: Language;
}

type TimeRangeKey = 'today' | 'days7' | 'days30' | 'year';

export const DemoDashboardSection: React.FC<DemoDashboardSectionProps> = ({ language }) => {
  const t = TRANSLATIONS[language].demo;
  const [selectedRange, setSelectedRange] = useState<TimeRangeKey>('days7');
  const [activeTooltip, setActiveTooltip] = useState<{ day: string; rev: number; ecpm: number } | null>(null);

  // Dynamic values depending on selected time range
  const rangeData: Record<TimeRangeKey, {
    revenue: string;
    ecpm: string;
    impressions: string;
    fillRate: string;
    revChange: string;
    chartPoints: { day: string; rev: number; ecpm: number; heightPercent: number }[];
  }> = {
    today: {
      revenue: '$2,840.50',
      ecpm: '$6.12',
      impressions: '464,120',
      fillRate: '100%',
      revChange: '+16.8%',
      chartPoints: [
        { day: '00:00', rev: 140, ecpm: 5.2, heightPercent: 28 },
        { day: '04:00', rev: 95, ecpm: 4.8, heightPercent: 20 },
        { day: '08:00', rev: 320, ecpm: 6.4, heightPercent: 62 },
        { day: '12:00', rev: 510, ecpm: 7.1, heightPercent: 92 },
        { day: '16:00', rev: 440, ecpm: 6.8, heightPercent: 80 },
        { day: '20:00', rev: 380, ecpm: 5.9, heightPercent: 70 },
        { day: 'Ahora', rev: 280, ecpm: 6.2, heightPercent: 55 },
      ]
    },
    days7: {
      revenue: '$18,490.80',
      ecpm: '$5.78',
      impressions: '3,198,400',
      fillRate: '99.9%',
      revChange: '+22.4%',
      chartPoints: [
        { day: 'Lun', rev: 2410, ecpm: 5.4, heightPercent: 52 },
        { day: 'Mar', rev: 2580, ecpm: 5.6, heightPercent: 58 },
        { day: 'Mié', rev: 2790, ecpm: 5.9, heightPercent: 64 },
        { day: 'Jue', rev: 3120, ecpm: 6.2, heightPercent: 78 },
        { day: 'Vie', rev: 3450, ecpm: 6.5, heightPercent: 88 },
        { day: 'Sáb', rev: 2890, ecpm: 5.8, heightPercent: 68 },
        { day: 'Dom', rev: 3250, ecpm: 6.1, heightPercent: 82 },
      ]
    },
    days30: {
      revenue: '$74,210.60',
      ecpm: '$5.62',
      impressions: '13,205,000',
      fillRate: '99.8%',
      revChange: '+28.2%',
      chartPoints: [
        { day: 'Sem 1', rev: 16800, ecpm: 5.4, heightPercent: 60 },
        { day: 'Sem 2', rev: 18200, ecpm: 5.6, heightPercent: 68 },
        { day: 'Sem 3', rev: 19100, ecpm: 5.7, heightPercent: 74 },
        { day: 'Sem 4', rev: 20110, ecpm: 5.8, heightPercent: 84 },
      ]
    },
    year: {
      revenue: '$892,400.00',
      ecpm: '$5.40',
      impressions: '165,250,000',
      fillRate: '100%',
      revChange: '+45.0%',
      chartPoints: [
        { day: 'Q1', rev: 195000, ecpm: 5.1, heightPercent: 55 },
        { day: 'Q2', rev: 220000, ecpm: 5.3, heightPercent: 65 },
        { day: 'Q3', rev: 235000, ecpm: 5.5, heightPercent: 72 },
        { day: 'Q4', rev: 242400, ecpm: 5.7, heightPercent: 88 },
      ]
    }
  };

  const currentData = rangeData[selectedRange];

  return (
    <section id="demo-dashboard" className="py-24 relative overflow-hidden bg-[#070b14]/70 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <Badge variant="cyan" pulse>
              Demostración Tecnológica
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              {t.subtitle}
            </p>
          </div>

          {/* Time Range Selector Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-900 border border-white/10 text-xs">
            {(
              [
                ['today', t.timeRanges.today],
                ['days7', t.timeRanges.days7],
                ['days30', t.timeRanges.days30],
                ['year', t.timeRanges.year],
              ] as [TimeRangeKey, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedRange(key)}
                className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all ${
                  selectedRange === key
                    ? 'bg-cyan-500 text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Shell Mockup */}
        <div className="glass-panel rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                NX
              </div>
              <div>
                <span className="font-bold text-white text-sm">Dashboard de Monetización Pro</span>
                <span className="text-slate-400 block text-[11px]">ID de Cuenta: #NX-882914-PUB • Producción</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Badge variant="emerald" pulse>Motor de Subastas: 100% Óptimo</Badge>
              <button
                onClick={() => alert('Exportando informe analítico simulado en formato CSV...')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/10 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Exportar CSV
              </button>
            </div>
          </div>

          {/* 4 Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden group">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{t.kpis.revenue}</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {currentData.revenue}
              </div>
              <div className="mt-2 text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                <ArrowUpRight className="w-3 h-3" />
                <span>{currentData.revChange} vs periodo anterior</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden group">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{t.kpis.ecpm}</span>
                <TrendingUp className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                {currentData.ecpm}
              </div>
              <div className="mt-2 text-[11px] text-cyan-400 flex items-center gap-1 font-semibold">
                <span>Header Bidding Multicanal Activo</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden group">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{t.kpis.impressions}</span>
                <Eye className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {currentData.impressions}
              </div>
              <div className="mt-2 text-[11px] text-purple-400 flex items-center gap-1 font-semibold">
                <span>Tráfico Humano 99.99% TAG Platinum</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 relative overflow-hidden group">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>{t.kpis.fillRate}</span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                {currentData.fillRate}
              </div>
              <div className="mt-2 text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                <span>0 impresiones sin postor</span>
              </div>
            </div>
          </div>

          {/* Interactive Chart & Top Geos Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Chart Area: 7 Cols */}
            <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-sm font-bold text-white">{t.chartTitle}</h4>
                  <p className="text-xs text-slate-400">Ingresos diarios acumulados ($USD) y fluctuación de eCPM</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {selectedRange.toUpperCase()}
                </span>
              </div>

              {/* Chart Visual Simulation */}
              <div className="h-60 flex items-end gap-3 sm:gap-5 pt-8 pb-2 px-2 relative border-b border-white/10">
                {/* Horizontal reference grid lines */}
                <div className="absolute inset-x-0 top-1/4 border-b border-dashed border-white/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-2/4 border-b border-dashed border-white/5 pointer-events-none" />
                <div className="absolute inset-x-0 top-3/4 border-b border-dashed border-white/5 pointer-events-none" />

                {currentData.chartPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                    onMouseEnter={() => setActiveTooltip(point)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    {/* Tooltip on hover */}
                    {activeTooltip?.day === point.day && (
                      <div className="absolute -top-12 z-20 bg-slate-950 border border-cyan-400/60 text-white text-[11px] font-mono px-2 py-1 rounded-lg shadow-xl pointer-events-none whitespace-nowrap animate-fadeIn">
                        <div>Día: {point.day}</div>
                        <div className="text-emerald-400 font-bold">${point.rev} USD</div>
                        <div className="text-cyan-400 text-[10px]">eCPM: ${point.ecpm}</div>
                      </div>
                    )}

                    {/* Gradient Bar with glowing effect */}
                    <div
                      style={{ height: `${point.heightPercent}%` }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-cyan-600/30 via-cyan-500/60 to-cyan-400 group-hover:to-emerald-400 transition-all duration-300 relative shadow-sm"
                    >
                      <div className="w-full h-1 bg-cyan-300 rounded-t-lg" />
                    </div>

                    <span className="text-[10px] text-slate-400 font-mono mt-2 group-hover:text-cyan-300 transition-colors">
                      {point.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" /> Ingresos generados
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400 ml-3" /> eCPM Promedio
                </span>
                <span>Actualizado hace 42 segundos</span>
              </div>
            </div>

            {/* Top Geos List: 5 Cols */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  {t.topGeosTitle}
                </h4>
                <span className="text-[10px] font-mono text-slate-400">Tier 1 & Tier 2</span>
              </div>

              <div className="space-y-3">
                {TOP_GEOS.slice(0, 5).map((geo) => (
                  <div
                    key={geo.code}
                    className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{geo.flag}</span>
                      <div>
                        <p className="font-bold text-slate-200">{geo.country}</p>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {geo.impressions} impr. • {geo.share}% share
                        </span>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <div className="font-extrabold text-emerald-400">{geo.revenue}</div>
                      <span className="text-[10px] text-cyan-400">${geo.ecpm} eCPM</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <span className="text-xs text-slate-400">
                  +190 países adicionales monetizados en tiempo real
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
