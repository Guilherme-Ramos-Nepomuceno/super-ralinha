import type { Config } from 'tailwindcss'
const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    safelist: ['animate-[slide-right_1s_ease-in-out]'],
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        fadein: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeout: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' },
        },
        colortransition: {
          from: { 'background-color': 'rgb(22 101 52)' },
          to: { 'background-color': 'rgb(220 252 231)' },
        },
        colorbg: {
          from: { 'background-color': 'rgb(220 252 231)' },
          to: { 'background-color': 'rbg(250 250 250)' },
        },
        linhat: {
          from: { transform: '50%' },
          to: { width: '0%' },
        },
        bola: {
          from: { transform: 'translateX(0px)' },
          to: { transform: 'translateX(70px)' },
        },
        patrocinio: {
          from: {
            transform: 'translateX(-100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0px)',
            opacity: '1',
          },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        rotate: 'rotate auto linear 4',
        fadein: 'fadein linear both',
        fadeout: 'fadeout linear both',
        colortransition: 'colortransition linear both',
        colorbg: 'colorbg linear both',
        linhat: 'linhat linear both',
        bola: 'bola linear both',
        patrocinio: 'patrocinio linear both',
      },
      backgroundImage: {},
      backgroundSize: {
        mob: '300%',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
