import React, { useState } from 'react';
import { X, ExternalLink, Play, CheckCircle2, Volume2, VolumeX, Smartphone, Monitor, Sparkles, RefreshCw } from 'lucide-react';
import { AdFormat } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface AdFormatModalProps {
  format: AdFormat | null;
  onClose: () => void;
  onSelectFormat?: (formatId: string) => void;
}

export const AdFormatModal: React.FC<AdFormatModalProps> = ({ format, onClose, onSelectFormat }) => {
  if (!format) return null;

  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [popunderTriggered, setPopunderTriggered] = useState(false);
  const [selectedIabSize, setSelectedIabSize] = useState<'300x250' | '728x90' | '320x50'>('300x250');
  const [pushDismissed, setPushDismissed] = useState(false);

  const resetDemos = () => {
    setPopunderTriggered(false);
    setPushDismissed(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-8 z-10 text-white">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${format.accentColor} text-white`}>
                {format.category}
              </span>
              <Badge variant="cyan" pulse>Simulador Interactivo</Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{format.name}</h3>
            <p className="text-sm text-slate-300">{format.tagline}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Device Switcher & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 my-6 py-2 px-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Vista previa:</span>
            <div className="inline-flex rounded-xl bg-slate-900/80 p-1 border border-white/10">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${deviceView === 'desktop' ? 'bg-cyan-500 text-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                <Monitor className="w-3.5 h-3.5" /> Escritorio
              </button>
              <button
                onClick={() => setDeviceView('mobile')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${deviceView === 'mobile' ? 'bg-cyan-500 text-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
              >
                <Smartphone className="w-3.5 h-3.5" /> Móvil
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 text-xs">
            <div>
              <span className="text-slate-400">CTR Promedio: </span>
              <span className="font-bold text-cyan-400">{format.ctr}</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div>
              <span className="text-slate-400">eCPM Estimado: </span>
              <span className="font-bold text-emerald-400">{format.ecpmRange}</span>
            </div>
          </div>
        </div>

        {/* Interactive Simulation Sandbox */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#070b14] border border-cyan-500/20 shadow-inner relative overflow-hidden">
          {/* Top Browser Bar Mockup */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 font-mono text-[11px] text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5 truncate max-w-[200px] sm:max-w-xs">
                https://demo-publisher-site.com/article-tech
              </span>
            </div>
            <button
              onClick={resetDemos}
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> Reiniciar Simulación
            </button>
          </div>

          {/* Format Specific Simulation */}
          {format.previewType === 'popunder' && (
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-white/10 text-center space-y-3">
                <p className="text-sm text-slate-300">
                  Haz clic en cualquier parte del botón simulado para experimentar el comportamiento no intrusivo del Popunder.
                </p>
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setPopunderTriggered(true)}
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    Simular Clic de Usuario en la Página
                  </Button>
                </div>
              </div>

              {popunderTriggered && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/80 to-blue-950/80 border border-cyan-500/40 animate-slideUp">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Nueva Pestaña Abierta en Segundo Plano (Behind Tab)
                    </span>
                    <Badge variant="emerald">Impresión Validada</Badge>
                  </div>
                  <div className="p-3 bg-black/60 rounded-lg text-xs space-y-1 font-mono text-slate-300">
                    <div>[AdServer] Evento: OnClick Trigger Detectado (1er clic de sesión)</div>
                    <div>[AdServer] Regla de Frecuencia: 1 impresión / 24 horas aplicada</div>
                    <div>[HeaderBidding] Oferta ganadora: <span className="text-emerald-400 font-bold">$7.45 eCPM</span> (Fintech Global)</div>
                    <div>[UX Impact] Ventana principal permanece activa sin interrumpir lectura del usuario.</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {format.previewType === 'native' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center justify-between">
                <span>Contenido Recomendado Patrocinado (In-Feed Widget)</span>
                <span className="text-cyan-400 font-mono text-[11px]">Powered by NOXA SmartNative™</span>
              </div>
              <div className={`grid ${deviceView === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'} gap-3`}>
                {[
                  {
                    title: 'La nueva era de los microprocesadores cuánticos en servidores cloud',
                    sponsor: 'TechQuantum Global',
                    ctr: '5.2%',
                    tag: 'Tecnología'
                  },
                  {
                    title: 'Descubre cómo las fintechs están automatizando tesorerías con IA',
                    sponsor: 'NextFin Capital',
                    ctr: '6.8%',
                    tag: 'Finanzas'
                  },
                  {
                    title: 'Estrategias de inversión digital con rendimientos garantizados en 2026',
                    sponsor: 'Alpha Assets',
                    ctr: '7.1%',
                    tag: 'Inversión'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all cursor-pointer"
                  >
                    <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 mb-2 relative overflow-hidden flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-cyan-400/50 group-hover:scale-110 transition-transform" />
                      <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 px-1.5 py-0.5 rounded text-slate-300">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-xs font-semibold text-slate-200 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Patrocinado • {item.sponsor}</span>
                      <span className="text-emerald-400 font-mono font-bold">CTR {item.ctr}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {format.previewType === 'push' && (
            <div className="relative min-h-[220px] flex flex-col justify-center items-center p-4">
              <p className="text-xs text-slate-400 mb-4 text-center">
                Notificación sutil que aparece en la esquina superior/inferior sin requerir permisos de navegador agresivos.
              </p>

              {!pushDismissed ? (
                <div className="w-full max-w-md p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/50 shadow-2xl shadow-cyan-500/10 flex items-start gap-3 animate-slideUp">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">Oferta Exclusiva Verificada</span>
                      <span className="text-[10px] text-slate-400">hace un momento</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-100 mt-0.5">
                      ¡Bono del 100% en tu primer depósito financiero disponible hoy!
                    </p>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      Accede antes de que venza el periodo de registro exclusivo.
                    </p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <button
                        onClick={() => alert('Simulación: el usuario hace clic y es redirigido a la oferta del anunciante')}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-black transition-colors"
                      >
                        Reclamar Oferta
                      </button>
                      <button
                        onClick={() => setPushDismissed(true)}
                        className="px-2.5 py-1 rounded-lg text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        Descartar
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-xs text-slate-400">Notificación descartada por el usuario.</p>
                  <Button variant="outline" size="sm" className="mt-2" onClick={() => setPushDismissed(false)}>
                    Mostrar Notificación de Nuevo
                  </Button>
                </div>
              )}
            </div>
          )}

          {format.previewType === 'banner' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 pb-2">
                <span className="text-xs text-slate-400">Tamaño IAB:</span>
                {(['300x250', '728x90', '320x50'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedIabSize(size)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-colors ${selectedIabSize === size ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center p-4 bg-slate-900/40 rounded-xl border border-dashed border-white/10 min-h-[160px]">
                {selectedIabSize === '300x250' && (
                  <div className="w-[300px] h-[250px] rounded-xl bg-gradient-to-br from-indigo-900/70 via-blue-900/60 to-slate-900 border border-cyan-400/40 p-4 flex flex-col justify-between shadow-lg relative overflow-hidden">
                    <span className="text-[10px] uppercase font-mono text-cyan-300 bg-black/40 px-2 py-0.5 rounded self-start">
                      IAB 300x250 • Medium Rectangle
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-white">Cloud Hosting Ultra Rápido</p>
                      <p className="text-xs text-slate-300">Despliega tus apps con CDN global y 99.99% uptime.</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-[10px] text-emerald-400 font-bold">Header Bidding: $3.90 eCPM</span>
                      <button className="px-2.5 py-1 text-xs font-semibold bg-cyan-400 text-black rounded-lg">Ver Planes</button>
                    </div>
                  </div>
                )}

                {selectedIabSize === '728x90' && (
                  <div className="w-full max-w-[728px] h-[90px] rounded-xl bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 border border-cyan-400/40 p-3 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                        IAB
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">728x90 Leaderboard Display Banner</p>
                        <p className="text-[11px] text-slate-400">Demanda conectada mediante OpenRTB con refresco inteligente.</p>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 text-xs font-bold bg-cyan-400 text-black rounded-lg shrink-0">
                      Probar Oferta
                    </button>
                  </div>
                )}

                {selectedIabSize === '320x50' && (
                  <div className="w-[320px] h-[50px] rounded-xl bg-slate-900 border border-cyan-400/40 px-3 py-1.5 flex items-center justify-between shadow-lg">
                    <span className="text-[11px] font-bold text-white truncate max-w-[200px]">
                      320x50 Mobile Leaderboard
                    </span>
                    <button className="px-2 py-1 text-[10px] font-bold bg-cyan-400 text-black rounded">
                      Instalar App
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {format.previewType === 'video' && (
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10 text-center space-y-2 p-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/90 text-black flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/30 cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <p className="text-sm font-bold text-white">Video Outstream Player Simulado (VAST 4.2)</p>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Se expande automáticamente cuando entra al 50% del viewport del usuario y se pausa al salir.
                  </p>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-slate-300">
                  <button
                    onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white flex items-center gap-1.5"
                  >
                    {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isVideoMuted ? 'Muted' : 'Sonido Activo'}</span>
                  </button>
                  <span className="font-mono bg-black/60 px-2 py-0.5 rounded text-[10px]">
                    00:15 / 00:30 • eCPM $14.50
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features Checklist */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Ventajas Principales de este Formato
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {format.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Disponible para integración inmediata vía tag o Header Bidding.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="ghost" size="md" onClick={onClose} className="w-full sm:w-auto">
              Cerrar
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              onClick={() => {
                onClose();
                if (onSelectFormat) {
                  onSelectFormat(format.id);
                } else {
                  const leadSection = document.getElementById('lead-form');
                  leadSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Integrar este Formato
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
