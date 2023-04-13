/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,tsx,js,ts}",
  ],
  theme: {
    extend: {
      width: {
        131: '131px',
        300: '300px',
        304: '304px',
        310: '310px',
        311: '311px',
        360: '360px',
        435: '435px',
        476: '476px'
      },
      height: {
        336: '336px',
        416: '416px'
      },
      padding: {
        18: '72px',
        307: '307px'
      },
      backgroundImage: {
        gradient: 'linear-gradient(97.96deg, #0A47C2 0%, #6E9CF7 100%)'
      },
      colors: {
        gray: {
          25: '#EDEFF3',
          50: '#E1E4EA',
          100: '#C5CAD3',
          200: '#A9AFBC',
          300: '#8F96A3',
          400: '#757C8A',
          500: '#565D6C',
          600: '#3F4550',
          700: '#272C35',
          800: '#101318',
          900: '#080A0C',
        },

        primary: {
          100: '#9EBDFA',
          200: '#6E9CF7',
          300: '#3D7AF5',
          400: '#0A47C2',
          500: '#083691',
          600: '#052461',
          700: '#031230',
        },
      
        dribble: '#FF318C',
        linkedin: '#0E76A8',
        instagram: '#EA4C89',
      },
      fontSize: {
        h1: '40px',
        h2: '32px',
        h3: '20px',

        body: {
          1: '16px',
          2: '14px'
        },
      },
      lineHeight: {
        4: '18px',
        11: '44px',
        12: '48px'
      },
      letterSpacing: {
        default: '0.02em',
        smallcaps: '0.06em'
      },
      
    },
  },
  plugins: [],
}

