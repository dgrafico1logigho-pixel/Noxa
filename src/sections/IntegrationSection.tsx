import React, { useState } from 'react';
import { UserCheck, Code2, Banknote, Copy, Check, Terminal, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { GlassCard } from '../components/ui/GlassCard';

interface IntegrationSectionProps {
  language: Language;
  onOpenRegister: () => void;
}

export const IntegrationSection: React.FC<IntegrationSectionProps> = ({ language, onOpenRegister }) => {
  const t = TRANSLATIONS[language].integration;
  const [activeSnippetTab, setActiveSnippetTab] = useState<'js' | 'prebid' | 'rtb'>('js');
  const [isCopied, setIsCopied] = useState(false);

  const snippets = {
    js: `<!-- NOXA Ads Universal Lightweight Async Tag (<5kb) -->
<script async 
  src="https://cdn.noxa-ads.com/sdk/v2/loader.js" 
  data-noxa-zone="nx_zone_883914" 
  data-noxa-antiadblock="true"
  crossorigin="anonymous">
</script>`,
    prebid: `// NOXA Prebid.js 8.x Official Adapter Config
pbjs.que.push(function() {
  pbjs.addAdUnits([{
    code: 'div-gpt-ad-noxa-banner',
    mediaTypes: { banner: { sizes: [[300, 250], [728, 90]] } },
    bids: [{
      bidder: 'noxa',
      params: { placementId: 'nx_pb_9921', floorPrice: 3.50 }
    }]
  }]);
});`,
    rtb: `// OpenRTB 3.0 Bid Request Endpoint
POST https://rtb-gateway.noxa-ads.com/v3/bid
Content-Type: application/json
Authorization: Bearer NX_DSP_SECRET_KEY

{
  "id": "auction_948271",
  "imp": [{ "id": "1", "banner": { "w": 300, "h": 250 }, "bidfloor": 2.50 }],
  "site": { "domain": "verified-media.com", "cat": ["IAB1-5"] }
}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippets[activeSnippetTab]);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#070a12]/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" pulse>
            {t.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Simple Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          
          {/* Step 1 */}
          <GlassCard variant="interactive" className="p-8 relative group border-white/10 hover:border-cyan-500/40">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-xl mb-6 group-hover:scale-110 transition-transform">
              1
            </div>
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">{t.step1Title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.step1Desc}
            </p>
          </GlassCard>

          {/* Step 2 */}
          <GlassCard variant="interactive" className="p-8 relative group border-white/10 hover:border-emerald-500/40">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-xl mb-6 group-hover:scale-110 transition-transform">
              2
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">{t.step2Title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.step2Desc}
            </p>
          </GlassCard>

          {/* Step 3 */}
          <GlassCard variant="interactive" className="p-8 relative group border-white/10 hover:border-purple-500/40">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-extrabold text-xl mb-6 group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Banknote className="w-4 h-4 text-purple-400" />
              <h3 className="text-lg font-bold text-white">{t.step3Title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.step3Desc}
            </p>
          </GlassCard>

        </div>

        {/* Interactive Code Snippet Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-white/15 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Selector de Implementación Técnica
              </span>
            </div>

            {/* Snippet Tabs */}
            <div className="flex items-center gap-2">
              <div className="inline-flex rounded-xl bg-black/60 p-1 border border-white/10 text-xs">
                <button
                  onClick={() => setActiveSnippetTab('js')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    activeSnippetTab === 'js' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.codeSnippetTabJs}
                </button>
                <button
                  onClick={() => setActiveSnippetTab('prebid')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    activeSnippetTab === 'prebid' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.codeSnippetTabPrebid}
                </button>
                <button
                  onClick={() => setActiveSnippetTab('rtb')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    activeSnippetTab === 'rtb' ? 'bg-cyan-500 text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.codeSnippetTabRtb}
                </button>
              </div>

              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{isCopied ? t.codeCopied : t.copyCode}</span>
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-6 font-mono text-xs text-slate-300 bg-[#070b14] overflow-x-auto leading-relaxed">
            <pre>
              <code>{snippets[activeSnippetTab]}</code>
            </pre>
          </div>

          {/* Bottom Bar */}
          <div className="px-6 py-3 bg-slate-900/40 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
            <span>Latencia de ejecución &lt; 5ms en Cloudflare Workers Edge</span>
            <span className="text-emerald-400 font-semibold">100% Asíncrono • No bloquea Core Web Vitals</span>
          </div>
        </div>

      </div>
    </section>
  );
};
