import React, { useState } from 'react';
import { X, Lock, Mail, User, Globe, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  initialRole?: 'publisher' | 'advertiser';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  initialRole = 'publisher',
}) => {
  if (!isOpen) return null;

  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [role, setRole] = useState<'publisher' | 'advertiser'>(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1800);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md glass-panel rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-8 z-10 text-white overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-10 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              {mode === 'login' ? '¡Bienvenido de nuevo!' : '¡Cuenta Solicitada con Éxito!'}
            </h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              {mode === 'login'
                ? 'Conectando con el panel de administración seguro...'
                : 'Hemos registrado tus datos. Tu Account Manager dedicado te enviará las credenciales por correo.'}
            </p>
          </div>
        ) : (
          <div>
            {/* Header / Mode Switcher */}
            <div className="text-center space-y-1 mb-6">
              <div className="inline-flex items-center gap-1.5 justify-center mb-1">
                <Badge variant="cyan" pulse>Plataforma Segura</Badge>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                {mode === 'login' ? 'Acceder al Panel' : 'Crear Cuenta en NOXA Ads'}
              </h3>
              <p className="text-xs text-slate-400">
                {mode === 'login'
                  ? 'Gestiona tus ganancias, eCPMs y campañas en tiempo real'
                  : 'Monetiza tu tráfico global con la red de más alto rendimiento'}
              </p>
            </div>

            {/* Role Switcher */}
            <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-900/90 border border-white/10 mb-5">
              <button
                type="button"
                onClick={() => setRole('publisher')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  role === 'publisher'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Soy Editor (Publisher)
              </button>
              <button
                type="button"
                onClick={() => setRole('advertiser')}
                className={`py-2 text-xs font-bold rounded-lg transition-all ${
                  role === 'advertiser'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Soy Anunciante
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Nombre Completo</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/70 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Correo Electrónico</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nombre@empresa.com"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900/70 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Contraseña</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900/70 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {mode === 'register' && role === 'publisher' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">URL de tu Sitio Web</label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      required
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://tudominio.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/70 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>
              )}

              <Button
                type="submit"
                variant={role === 'publisher' ? 'primary' : 'emerald'}
                size="md"
                isLoading={isLoading}
                className="w-full mt-2 font-bold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                {mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta Instantánea'}
              </Button>
            </form>

            {/* Toggle Mode */}
            <div className="mt-5 text-center text-xs text-slate-400">
              {mode === 'login' ? (
                <>
                  ¿Aún no tienes cuenta?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('register')}
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors underline ml-1"
                  >
                    Regístrate aquí
                  </button>
                </>
              ) : (
                <>
                  ¿Ya tienes cuenta creada?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors underline ml-1"
                  >
                    Inicia sesión
                  </button>
                </>
              )}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Conexión cifrada SSL TLS 1.3 con protección Anti-DDoS</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
