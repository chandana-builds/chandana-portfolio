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
        theme: {
          page: 'var(--bg-page)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
          subtle: 'var(--bg-card-subtle)',
          elevated: 'var(--bg-elevated)',
          'border-main': 'var(--border-main)',
          'border-subtle': 'var(--border-subtle)',
          'border-accent': 'var(--border-accent)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)'
        },
        cyber: {
          blue: '#38bdf8',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          purple: '#a855f7',
          emerald: '#10b981',
          accent: '#6366f1'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'scanline': 'scanline 8s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.3)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 35px -5px rgba(56, 189, 248, 0.35)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}
