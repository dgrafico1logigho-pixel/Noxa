import React, { useState } from 'react';
import {
  Send, CheckCircle2, User, Mail, Globe, DollarSign,
  ShieldCheck, AlertCircle, Sparkles, Layers, RefreshCw
} from 'lucide-react';
import { Language, AudienceType, LeadFormData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AD_FORMATS } from '../data/adFormats';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { GlassCard } from '../components/ui/GlassCard';

interface LeadCaptureSectionProps {
  language: Language;
  initialAudience: AudienceType;
}

export const LeadCaptureSection: React.FC<LeadCaptureSectionProps> = ({
  language,
  initialAudience,
}) => {
  const t = TRANSLATIONS[language].lead;
  const [role, setRole] = useState<'publisher' | 'advertiser'>(
    initialAudience === 'advertisers' ? 'advertiser' : 'publisher'
  );

  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    role: initialAudience === 'advertisers' ? 'advertiser' : 'publisher',
    websiteOrBudget: '',
    selectedFormats: ['popunder', 'native'],
    message: '',
    agreedTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRoleChange = (newRole: 'publisher' | 'advertiser') => {
    setRole(newRole);
    setFormData((prev) => ({
      ...prev,
      role: newRole,
      websiteOrBudget: '',
    }));
    setErrors({});
  };

  const toggleFormat = (formatId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedFormats.includes(formatId);
      const updated = exists
        ? prev.selectedFormats.filter((id) => id !== formatId)
        : [...prev.selectedFormats, formatId];
      return { ...prev, selectedFormats: updated };
    });
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor ingresa tu nombre completo.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido.';
    }

    if (!formData.websiteOrBudget.trim()) {
      newErrors.websiteOrBudget =
        role === 'publisher'
          ? 'Por favor ingresa la URL de tu sitio web.'
          : 'Por favor indica tu presupuesto mensual estimado.';
    }

    if (!formData.agreedTerms) {
      newErrors.agreedTerms = 'Debes aceptar los términos de servicio para continuar.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1400);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      role: 'publisher',
      websiteOrBudget: '',
      selectedFormats: ['popunder', 'native'],
      message: '',
      agreedTerms: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="lead-form" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#070a12] via-[#090e1c] to-[#070a12]">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <Badge variant="cyan" pulse>
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            {t.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {t.subtitle}
          </p>
        </div>

        {/* Lead Form Card */}
        <div className="glass-panel rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {t.successTitle}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.successDesc}
                </p>
              </div>

              {/* Submitted Details Snapshot */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-left font-mono space-y-1 text-slate-300">
                <div><span className="text-slate-500">Solicitante:</span> {formData.fullName}</div>
                <div><span className="text-slate-500">Correo:</span> {formData.email}</div>
                <div><span className="text-slate-500">Rol:</span> {role === 'publisher' ? 'Editor (Publisher)' : 'Anunciante'}</div>
                <div>
                  <span className="text-slate-500">{role === 'publisher' ? 'Sitio Web:' : 'Presupuesto:'}</span> {formData.websiteOrBudget}
                </div>
                <div><span className="text-slate-500">Formatos seleccionados:</span> {formData.selectedFormats.join(', ')}</div>
              </div>

              <div className="pt-4">
                <Button variant="secondary" size="md" onClick={resetForm} icon={<RefreshCw className="w-4 h-4" />}>
                  {t.closeSuccess}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Role Toggle Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10">
                <button
                  type="button"
                  onClick={() => handleRoleChange('publisher')}
                  className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                    role === 'publisher'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.tabPublisher}
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleChange('advertiser')}
                  className={`py-3 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                    role === 'advertiser'
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.tabAdvertiser}
                </button>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    {t.fullName} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej. Roberto Valenzuela"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-900/80 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.fullName
                          ? 'border-red-500/80 focus:ring-1 focus:ring-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    {t.email} <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@tumedio.com"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-900/80 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500/80 focus:ring-1 focus:ring-red-400'
                          : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* Website URL or Monthly Budget */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {role === 'publisher' ? t.websiteUrl : t.monthlyBudget} <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  {role === 'publisher' ? (
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  ) : (
                    <DollarSign className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  )}
                  <input
                    type="text"
                    value={formData.websiteOrBudget}
                    onChange={(e) => setFormData({ ...formData, websiteOrBudget: e.target.value })}
                    placeholder={
                      role === 'publisher'
                        ? 'https://miportalnoticias.com'
                        : 'Ej. $1,500 - $10,000 USD mensuales'
                    }
                    className={`w-full pl-10 pr-4 py-3 bg-slate-900/80 border rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.websiteOrBudget
                        ? 'border-red-500/80 focus:ring-1 focus:ring-red-400'
                        : 'border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                    }`}
                  />
                </div>
                {errors.websiteOrBudget && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.websiteOrBudget}
                  </p>
                )}
              </div>

              {/* Multi-Format Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.formatsInterest}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {AD_FORMATS.map((fmt) => {
                    const isSelected = formData.selectedFormats.includes(fmt.id);
                    return (
                      <button
                        type="button"
                        key={fmt.id}
                        onClick={() => toggleFormat(fmt.id)}
                        className={`p-2.5 rounded-xl border text-xs font-medium transition-all text-left flex items-center justify-between ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-400/60 text-white'
                            : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span className="truncate">{fmt.name}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300">
                  {t.message}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalles sobre tu nicho, volumen diario de tráfico o países de interés..."
                  className="w-full px-4 py-3 bg-slate-900/80 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreedTerms}
                    onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded bg-slate-900 border-white/20 text-cyan-500 focus:ring-cyan-400 accent-cyan-500"
                  />
                  <span className="text-xs text-slate-300 leading-tight">
                    {t.terms}
                  </span>
                </label>
                {errors.agreedTerms && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.agreedTerms}
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <Button
                type="submit"
                variant={role === 'publisher' ? 'primary' : 'emerald'}
                size="lg"
                isLoading={isSubmitting}
                className="w-full text-base font-bold shadow-xl py-4"
                icon={<Send className="w-4 h-4" />}
              >
                {role === 'publisher' ? t.submitPublisher : t.submitAdvertiser}
              </Button>

              {/* Privacy Footer */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Tus datos están protegidos y nunca serán compartidos con terceros sin tu consentimiento.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
