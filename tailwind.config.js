/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffdeb',
          100: '#fef9c7',
          200: '#fdf18a',
          300: '#fbe44e',
          400: '#fad512',
          500: '#f6c015',
          600: '#db9e0b',
          700: '#b67507',
        },
        amber: {
          rich: '#c08906',
          deep: '#9c6600',
        },
        cream: {
          50: '#fdfcf6',
          100: '#fbf9f0',
          200: '#f5efd6',
          300: '#eee0a6',
        },
        brown: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#cccccc',
          300: '#a3a3a3',
          400: '#7a7a7a',
          500: '#525252',
          600: '#3d3d3d',
          700: '#292929',
          800: '#231f20',
          900: '#141414',
        },
        maroon: {
          400: '#ee2836',
          500: '#d32133',
          600: '#c01a2a',
          700: '#a4111e',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'glow-gold': '0 0 40px rgba(246,192,21,0.25)',
        'glow-warm': '0 0 60px rgba(211,33,51,0.3)',
        'card': '0 8px 32px rgba(35,31,32,0.06)',
        'card-hover': '0 24px 64px rgba(35,31,32,0.12)',
        'product': '0 20px 60px rgba(35,31,32,0.08)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'hero-gradient': 'linear-gradient(135deg, #fbf9f0 0%, #fdf18a 40%, #fad512 70%, #f6c015 100%)',
        'gold-shimmer': 'linear-gradient(135deg, #fbe44e 0%, #f6c015 30%, #db9e0b 60%, #fad512 100%)',
        'gold-subtle': 'linear-gradient(135deg, #fef9c7 0%, #fdf18a 50%, #fef9c7 100%)',
        'footer-bg': 'linear-gradient(160deg, #231f20 0%, #141414 50%, #000000 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'scale(0.9)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,158,11,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(245,158,11,0.5)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: 1 },
          '50%': { transform: 'translateY(8px)', opacity: 0.3 },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
};
