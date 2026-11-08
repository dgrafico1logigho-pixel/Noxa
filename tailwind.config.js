/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070a12',
          card: '#0d1322',
          border: 'rgba(255, 255, 255, 0.08)',
          cyan: '#06b6d4',
          emerald: '#10b981',
          purple: '#8b5cf6',
          blue: '#3b82f6',
        },
        slate: {
          850: '#111827',
          900: '#0b0f19',
          950: '#070a12',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-glow': 'radial-gradient(circle at 50% -20%, rgba(6, 182, 212, 0.15), transparent 70%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.12), transparent 50%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        ticker: 'ticker 25s linear infinite',
      }
    },
  },
  plugins: [],
}
