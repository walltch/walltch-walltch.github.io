/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1920px',
    },
    colors: {
      'primary-blue': '#eaf1f9',
      'primary-grey':'#6a6b7b',
      'secondary-white':'#f7f7f7',
      'primary-white': '#ffffff',
      'primary-dark-mode-white':'#bbb4b4',
      'primary-black': '#000000',
      'primary-dark-mode-black' : '#1e1e1e',
      'secondary-dark-mode-black' : '#2c2c2c',
      'textiary-dark-mode-black' : '#383838',
      'transparent' :'transparent'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        'xl': '10rem',
        's-m' : '2.5rem',
        's':'2rem',
        'xs':'0.5rem'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '9/16': '9/16'
      },
      
    },
  },
}