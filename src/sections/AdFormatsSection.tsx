import React from 'react';
import { Eye, ExternalLink, Smartphone, Monitor, Tablet, Sparkles, CheckCircle2, Play, Bell, LayoutGrid, Layers } from 'lucide-react';
import { Language, AdFormat } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AD_FORMATS } from '../data/adFormats';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

interface AdFormatsSectionProps {
  language: Language;
  onSelectFormatForDemo: (format: AdFormat) => void;
}

export const AdFormatsSection: React.FC<AdFormatsSectionProps> = ({
  language,
  onSelectFormatForDemo,
}) => {
  const t = TRANSLATIONS[language].formats;

  const renderFormatMiniMockup = (format: AdFormat) => {
    switch (format.previewType) {
      case 'popunder':
        return (
          <div className="w-full h-32 rounded-xl bg-slate-900 border border-white/10 p-2 relative overflow-hidden flex flex-col justify-between group-hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-1.5 pb-1 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-red-500/80" />
              <div className="w-2 h-2 rounded-full bg-amber-500/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span className="text-[9px] text-slate-500 font-mono ml-1">tab 1: publisher site</span>
            </div>
            {/* Popunder simulated tab behind */}
            <div className="absolute right-2 bottom-2 w-28 h-20 rounded-lg bg-gradient-to-tr from-cyan-950 to-blue-900 border border-cyan-400/50 shadow-lg p-1.5 flex flex-col justify-between animate-float">
              <div className="flex items-center justify-between text-[8px] text-cyan-300 font-mono">
                <span>Tab Under</span>
                <span className="text-emerald-400 font-bold">$12 eCPM</span>
              </div>
              <div className="text-[9px] font-bold text-white leading-tight">High ROI Offer Page</div>
              <div className="h-1 w-full bg-cyan-400/30 rounded" />
            </div>
            <div className="text-[10px] text-slate-400">Página Web Activa del Usuario</div>
          </div>
        );

      case 'native':
        return (
          <div className="w-full h-32 rounded-xl bg-slate-900 border border-white/10 p-2.5 relative flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between text-[9px] text-slate-400 pb-1 border-b border-white/5">
              <span>Noticias Relacionadas</span>
              <span className="text-emerald-400 font-bold">In-Feed</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="p-1 rounded bg-white/5 border border-white/5 space-y-1">
                <div className="h-6 bg-slate-800 rounded flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="h-1.5 bg-slate-600 rounded w-3/4" />
                <div className="h-1 bg-slate-700 rounded w-1/2" />
              </div>
              <div className="p-1 rounded bg-white/5 border border-white/5 space-y-1">
                <div className="h-6 bg-slate-800 rounded flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="h-1.5 bg-slate-600 rounded w-3/4" />
                <div className="h-1 bg-slate-700 rounded w-1/2" />
              </div>
            </div>
            <div className="text-[8px] text-slate-400 font-mono text-right">Mimetización editorial 100%</div>
          </div>
        );

      case 'push':
        return (
          <div className="w-full h-32 rounded-xl bg-slate-900 border border-white/10 p-2.5 relative flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
            <div className="w-full max-w-[200px] p-2 rounded-xl bg-slate-800/90 border border-purple-500/40 shadow-xl flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shrink-0">
                <Bell className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-bold text-cyan-400">In-Page Push</span>
                  <span className="text-[7px] text-slate-400">ahora</span>
                </div>
                <div className="text-[9px] font-bold text-white truncate">¡Oferta disponible!</div>
                <div className="text-[8px] text-emerald-400 font-mono">CTR promedio: 8.9%</div>
              </div>
            </div>
          </div>
        );

      case 'banner':
        return (
          <div className="w-full h-32 rounded-xl bg-slate-900 border border-white/10 p-2 relative flex flex-col justify-between group-hover:border-blue-500/40 transition-colors">
            <div className="flex items-center justify-between text-[9px] text-slate-400">
              <span>IAB Display Standards</span>
              <span className="font-mono text-cyan-400">Prebid.js</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-14 rounded bg-gradient-to-br from-indigo-950 to-blue-900 border border-cyan-400/40 flex flex-col items-center justify-center text-[8px] text-center p-1">
                <span className="font-bold text-white">300x250</span>
                <span className="text-[7px] text-emerald-400">Medium Rec</span>
              </div>
              <div className="w-24 h-8 rounded bg-gradient-to-r from-blue-950 to-cyan-950 border border-cyan-400/40 flex items-center justify-center text-[8px] font-bold text-white">
                728x90 Banner
              </div>
            </div>
            <div className="text-[8px] text-slate-400 text-center font-mono">Subastas directas Google AdX</div>
          </div>
        );

      case 'video':
        return (
          <div className="w-full h-32 rounded-xl bg-slate-950 border border-white/10 p-2 relative flex items-center justify-center overflow-hidden group-hover:border-fuchsia-500/40 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-fuchsia-500/90 text-black flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="text-[9px] font-bold text-white">Outstream Video (VAST 4.2)</span>
              <span className="text-[8px] font-mono text-emerald-400">eCPMs hasta $28.00</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="formatos" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="emerald" pulse>
            Formatos de Alto Rendimiento
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Formats Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AD_FORMATS.map((format) => (
            <GlassCard
              key={format.id}
              variant="interactive"
              className="p-6 flex flex-col justify-between group border-white/10 hover:border-cyan-500/50"
            >
              <div>
                {/* Header of format card */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r ${format.accentColor} text-white shadow-sm`}>
                    {format.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {format.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {format.name}
                </h3>

                <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                  {format.tagline}
                </p>

                {/* Simulated Graphic Preview */}
                <div className="mb-5">
                  {renderFormatMiniMockup(format)}
                </div>

                {/* Metrics Breakdown Pills */}
                <div className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">{t.estimatedCtr}</span>
                    <span className="text-xs sm:text-sm font-extrabold text-cyan-400 font-mono">
                      {format.ctr}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">{t.ecpmRange}</span>
                    <span className="text-xs sm:text-sm font-extrabold text-emerald-400 font-mono">
                      {format.ecpmRange}
                    </span>
                  </div>
                </div>

                {/* Device Badges */}
                <div className="flex items-center gap-2 mb-5 text-[11px] text-slate-400">
                  <span className="text-[10px] uppercase font-semibold">{t.devicesLabel}:</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    {format.devices.includes('desktop') && (
                      <span className="flex items-center gap-0.5 bg-white/5 px-1.5 py-0.5 rounded" title="Desktop">
                        <Monitor className="w-3 h-3 text-cyan-400" /> PC
                      </span>
                    )}
                    {format.devices.includes('mobile') && (
                      <span className="flex items-center gap-0.5 bg-white/5 px-1.5 py-0.5 rounded" title="Mobile">
                        <Smartphone className="w-3 h-3 text-emerald-400" /> Móvil
                      </span>
                    )}
                    {format.devices.includes('tablet') && (
                      <span className="flex items-center gap-0.5 bg-white/5 px-1.5 py-0.5 rounded" title="Tablet">
                        <Tablet className="w-3 h-3 text-purple-400" /> Tablet
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Button: Probar Formato */}
              <div className="pt-2 border-t border-white/5">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => onSelectFormatForDemo(format)}
                  className="w-full justify-center group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 font-bold transition-all"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  {t.testButton}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
