/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{jsx,tsx,js,ts}",
  ],
  theme: {
    extend: {
      width: {
        90: '90px',
        124: '124px',
        131: '131px',
        132: '132px',
        230: '230px',
        300: '300px',
        304: '304px',
        310: '310px',
        311: '311px',
        330: '330px',
        360: '360px',
        385: '385px',
        388: '388px',
        435: '435px',
        476: '476px',
        494: '494px',
        804: '804px',
        805: '805px'
      },
      height: {
        228: '228px',
        336: '336px',
        416: '416px',
        572: '572px',
        638: '638px',
        752: '752px'
      },
      padding: {
        18: '72px',
        307: '307px'
      },
      backgroundImage: {
        gradient: 'linear-gradient(97.96deg, #0A47C2 0%, #6E9CF7 100%)'
      },
      backdropBlur: {
        glass: '40px'
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

        glass: '#808080',
        separator: '#D0D4DC',
        dribbble: '#FF318C',
        linkedin: '#0E76A8',
        instagram: '#EA4C89',
      },
      fontSize: {
        h1: '40px',
        h2: '32px',
        h3: '20px',
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

