/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F0E8',
          50: '#FBF9F5',
          100: '#F5F0E8',
          200: '#EAE1D3',
          300: '#DED1BC',
        },
        sage: {
          DEFAULT: '#C6D5BC',
          light: '#DEE7D7',
          dark: '#9BB18E',
        },
        peach: {
          DEFAULT: '#E9BFAF',
          light: '#F4D8CD',
          dark: '#D89C86',
        },
        lavender: {
          DEFAULT: '#D6C6E8',
          light: '#E7DCF2',
          dark: '#B9A1D4',
        },
        butter: {
          DEFAULT: '#E8D58E',
          light: '#F3E8B5',
          dark: '#D5BC62',
        },
        powder: {
          DEFAULT: '#A9C7CE',
          light: '#CBE0E5',
          dark: '#7FA8B1',
        },
        rose: {
          DEFAULT: '#D7A9A6',
          light: '#E9C7C5',
          dark: '#BE817D',
        },
        forest: {
          DEFAULT: '#353A34',
          light: '#4C534B',
          muted: '#6C756B',
          soft: '#9CA49B',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        luxury: '0.22em',
        editorial: '0.14em',
        wide: '0.08em',
      },
      boxShadow: {
        'glass': '0 20px 40px -10px rgba(53, 58, 52, 0.08), 0 1px 3px 0 rgba(53, 58, 52, 0.04)',
        'glass-hover': '0 30px 60px -15px rgba(53, 58, 52, 0.14), 0 2px 6px 0 rgba(53, 58, 52, 0.06)',
        'glow-peach': '0 0 60px -10px rgba(233, 191, 175, 0.45)',
        'glow-lavender': '0 0 60px -10px rgba(214, 198, 232, 0.45)',
        'glow-sage': '0 0 60px -10px rgba(198, 213, 188, 0.45)',
        'glow-powder': '0 0 60px -10px rgba(169, 199, 206, 0.45)',
      },
      animation: {
        'mesh-1': 'meshFloat1 18s ease-in-out infinite alternate',
        'mesh-2': 'meshFloat2 22s ease-in-out infinite alternate',
        'mesh-3': 'meshFloat3 16s ease-in-out infinite alternate',
        'mesh-4': 'meshFloat4 24s ease-in-out infinite alternate',
        'float-card': 'floatCard 6s ease-in-out infinite',
        'spin-slow': 'spinSlow 36s linear infinite',
        'spin-reverse': 'spinReverse 44s linear infinite',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        meshFloat1: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(80px, -50px) scale(1.18) rotate(15deg)' },
          '100%': { transform: 'translate(-60px, 60px) scale(0.92) rotate(-10deg)' },
        },
        meshFloat2: {
          '0%': { transform: 'translate(0px, 0px) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(-70px, 80px) scale(1.15) rotate(-18deg)' },
          '100%': { transform: 'translate(60px, -45px) scale(0.88) rotate(12deg)' },
        },
        meshFloat3: {
          '0%': { transform: 'translate(0px, 0px) scale(0.95)' },
          '50%': { transform: 'translate(70px, 60px) scale(1.22)' },
          '100%': { transform: 'translate(-80px, -40px) scale(1)' },
        },
        meshFloat4: {
          '0%': { transform: 'translate(0px, 0px) scale(1.05)' },
          '50%': { transform: 'translate(-60px, -70px) scale(0.9)' },
          '100%': { transform: 'translate(50px, 55px) scale(1.12)' },
        },
        floatCard: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.06)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
