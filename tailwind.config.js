/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kc: {
          gold: '#D4AF37',      // or premium (accents, boutons)
          black: '#0A0A0A',     // fonds et texte foncé
          white: '#FFFFFF'      // fonds et texte clair
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
        serif: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'subtle-zoom': {
          '0%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1.08)' }
        }
      },
      animation: {
        'subtle-zoom': 'subtle-zoom 10s infinite alternate ease-in-out',
      },
      textShadow: {
        'lg': '0 2px 4px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const textShadows = theme('textShadow', {})
      const utilities = Object.entries(textShadows).map(([key, value]) => ({
        [`.text-shadow-${key}`]: { textShadow: value },
      }))
      addUtilities(utilities)
    },
  ],
}
