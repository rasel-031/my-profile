/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#0a192f',
        customGreen: '#64ffda',
        customLight: '#ccd6f6',
        customSlate: '#8892b0',
      },
      fontFamily:{
        mono: ['SF Mono','Fira Code','Fira Mono,Roboto Mono','monospace'],
        sans: ['Calibre','Inter','San Francisco','SF Pro Text','-apple-system','system-ui','sans-serif']
        
      }
    },
  },
  plugins: [],
}