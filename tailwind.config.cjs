/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#020617',
        foreground: '#f9fafb',
        accent: {
          blue: '#0ea5e9',
          purple: '#a855f7'
        },
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15,23,42,0.55)'
      }
    }
  },
  plugins: []
};
