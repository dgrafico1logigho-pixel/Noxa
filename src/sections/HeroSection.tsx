import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, CheckCircle2, Zap, Play, Layers } from 'lucide-react';
import { Language, AudienceType, AuctionBid } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { INITIAL_AUCTION_BIDS, TRUST_PARTNERS } from '../data/metrics';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { GlassCard } from '../components/ui/GlassCard';

interface HeroSectionProps {
  language: Language;
  audience: AudienceType;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onSelectFormat?: (formatId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  audience,
  onOpenAuth,
}) => {
  const t = TRANSLATIONS[language].hero;

  // Real-time Header Bidding simulator state
  const [bids, setBids] = useState<AuctionBid[]>(INITIAL_AUCTION_BIDS);
  const [currentWinningBid, setCurrentWinningBid] = useState(5.84);
  const [impressionsCounter, setImpressionsCounter] = useState(1482910);
  const [liveRevenue, setLiveRevenue] = useState(8659.42);

  // Interval simulating real-time programmatic ad auctions
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() * 0.45 - 0.2);
      const newBid = Math.max(4.20, Number((currentWinningBid + delta).toFixed(2)));
      setCurrentWinningBid(newBid);
      setImpressionsCounter(prev => prev + Math.floor(Math.random() * 45) + 12);
      setLiveRevenue(prev => Number((prev + (newBid * 0.001) * (Math.random() * 5 + 1)).toFixed(2)));

      setBids(prevBids => {
        const updated = [...prevBids];
        const randomIndex = Math.floor(Math.random() * updated.length);
        updated[randomIndex] = {
          ...updated[randomIndex],
          bid: Number((newBid * (0.85 + Math.random() * 0.15)).toFixed(2)),
          latencyMs: Math.floor(Math.random() * 40) + 45
        };
        // Sort highest bid to top
        updated.sort((a, b) => b.bid - a.bid);
        updated.forEach((b, idx) => {
          b.status = idx === 0 ? 'won' : 'outbid';
        });
        return updated;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [currentWinningBid]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background radial lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[400px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Prop & Dual CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center">
              <Badge variant="cyan" pulse className="px-3.5 py-1.5 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 mr-1" />
                {t.badge}
              </Badge>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {t.h1_1}{' '}
              <span className="text-gradient-cyan block mt-1">
                {t.h1_highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.subtitle}
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenAuth('register')}
                className="w-full sm:w-auto shadow-cyan-500/30 text-base"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {t.ctaPrimary}
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('formatos')}
                className="w-full sm:w-auto text-base"
                icon={<Layers className="w-5 h-5" />}
              >
                {t.ctaSecondary}
              </Button>
            </div>

            {/* Key mini-bullet trust indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Fill Rate Global</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Pagos Semanales Net-7 / Net-15</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sin Mínimos Excluyentes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Header Bidding & Auction Simulator Element */}
          <div className="lg:col-span-5 relative">
            {/* Ambient decorative glowing border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/30 rounded-3xl blur-xl opacity-75 -z-10 animate-pulse-glow" />

            <div className="glass-panel rounded-3xl border border-white/15 p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              {/* Header of Mockup Card */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{t.liveAuctionTitle}</h3>
                    <p className="text-[10px] text-slate-400 font-mono">OpenRTB 3.0 • Latencia &lt;80ms</p>
                  </div>
                </div>
                <Badge variant="emerald" className="text-[10px] font-mono">
                  ● EN VIVO
                </Badge>
              </div>

              {/* Live Ticker KPI Grid */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    {t.highestBid} (eCPM)
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-cyan-400 font-mono tracking-tight">
                      ${currentWinningBid}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 ml-0.5" /> +14.2%
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Ingresos Generados Hoy
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-extrabold text-emerald-400 font-mono tracking-tight">
                      ${liveRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-time Bid Stream List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-slate-400 uppercase font-semibold px-1">
                  <span>Ad Exchange / DSP</span>
                  <span>Puja / Latencia</span>
                </div>

                {bids.slice(0, 4).map((bidItem, index) => (
                  <div
                    key={bidItem.partner}
                    className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-300 text-xs border ${
                      bidItem.status === 'won'
                        ? 'bg-cyan-500/10 border-cyan-400/40 text-white'
                        : 'bg-slate-900/40 border-white/5 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${bidItem.status === 'won' ? 'bg-cyan-400' : 'bg-slate-500'}`} />
                      <div>
                        <p className="font-semibold text-xs leading-none">{bidItem.partner}</p>
                        <span className="text-[9px] text-slate-400">{bidItem.tier}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-mono font-bold text-xs flex items-center justify-end gap-1">
                        <span className={bidItem.status === 'won' ? 'text-emerald-400' : 'text-slate-300'}>
                          ${bidItem.bid.toFixed(2)}
                        </span>
                        {bidItem.status === 'won' && (
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 rounded uppercase font-sans font-bold">
                            Ganó
                          </span>
                        )}
                      </div>
                      <span className="text-[9px] font-mono text-slate-400">{bidItem.latencyMs}ms</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 font-mono">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  {impressionsCounter.toLocaleString()} impresiones monetizadas hoy
                </span>
                <span className="text-emerald-400 font-semibold">Fill Rate 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Social Proof Partner Bar */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            {t.trustedBy}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {TRUST_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all group cursor-default"
              >
                <span className="text-xs font-extrabold text-slate-300 group-hover:text-white transition-colors tracking-tight">
                  {partner.name}
                </span>
                <span className="text-[10px] text-cyan-400/80 font-mono mt-0.5">
                  {partner.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
