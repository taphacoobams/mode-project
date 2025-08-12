/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C8A165', // Gold/bronze color for Khalil Collection (maintenu pour compatibilité)
        secondary: '#1A1A1A', // Deep black (maintenu pour compatibilité)
        kc: {
          gold: '#D4AF37',      // or premium (accents, boutons)
          black: '#0A0A0A',     // fonds header/footer/hero
          offwhite: '#F8F8F8',  // sections claires
          textDark: '#111111',  // texte sur fond clair
          textLight: '#EDEDED'  // texte sur fond sombre
        }
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
        serif: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
