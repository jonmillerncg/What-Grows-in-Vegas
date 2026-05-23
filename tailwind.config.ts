import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1B3A2D',
        sage: '#4A7C59',
        gold: '#C4892A',
        'gold-light': '#E8B040',
        cream: '#FAF6EE',
        sand: '#F2EAD3',
        rust: '#A84B2F',
        'near-black': '#0F2018',
        muted: '#6B7D72',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        archivo: ['var(--font-archivo)', 'sans-serif'],
        'archivo-narrow': ['var(--font-archivo-narrow)', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle var(--duration, 2.5s) ease-in-out infinite var(--delay, 0s)',
        'moon-glow': 'moonGlow 4s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.1', transform: 'scale(0.6)' },
        },
        moonGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(232,176,64,0.55)) drop-shadow(0 0 28px rgba(232,176,64,0.2))' },
          '50%': { filter: 'drop-shadow(0 0 22px rgba(232,176,64,0.9)) drop-shadow(0 0 55px rgba(232,176,64,0.45))' },
        },
      },
    },
  },
  plugins: [],
}
export default config
