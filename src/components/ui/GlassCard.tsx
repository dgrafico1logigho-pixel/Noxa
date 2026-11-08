import React from 'react';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'subtle' | 'interactive' | 'gradient-border';
  className?: string;
  glowColor?: 'cyan' | 'emerald' | 'purple' | 'none';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  className = '',
  glowColor = 'none',
  ...props
}) => {
  const glowStyles = {
    none: '',
    cyan: 'hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.25)] hover:border-cyan-500/40',
    emerald: 'hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.25)] hover:border-emerald-500/40',
    purple: 'hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.25)] hover:border-purple-500/40',
  };

  const baseStyles = 'rounded-2xl transition-all duration-300';

  const variantStyles = {
    default: 'glass-panel p-6 shadow-xl',
    subtle: 'glass-panel-subtle p-6',
    interactive: 'glass-panel-interactive p-6 cursor-pointer',
    'gradient-border': 'relative p-[1px] rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-xl',
  };

  if (variant === 'gradient-border') {
    return (
      <div className={`${baseStyles} ${variantStyles[variant]} ${glowStyles[glowColor]} ${className}`} {...props}>
        <div className="bg-[#0b101d]/90 backdrop-blur-xl rounded-2xl p-6 h-full w-full border border-white/5">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${glowStyles[glowColor]} ${className}`} {...props}>
      {children}
    </div>
  );
};
