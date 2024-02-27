import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/compnents/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'red' : '#59252E',
        'blue' : '#325573',
        'yellow' : '#F2911B',
        'beige' : '#F2C288',
        'beige-light' : '#F2E5D5',
        'orange' : '#D95204'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-courgette)', 'serif'],
        //montserrat
        'm': ['var(--font-montserrat)', 'serif'],
        //montserrat alternates
        'ma': ['var(--font-montserrat-alternates)', 'sans-serif'],
        //courgette
        'co': ['var(--font-courgette)', 'cursive'],
        //poiret-one
        'po': ['var(--font-poiret-one)', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
