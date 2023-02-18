/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./components/*.{html,js}",
  "./page/*.{html,js}"
],
prefix: "tw-",
  theme: {
    extend: {
      fontFamily:{
        body:['Roboto']
      },
    },
    extend: {
      gridTemplateRows: {
      
        '8': 'repeat(8, minmax(0, 1fr))',
        }
      },
  extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray': '#6b7280',
      'red' : '#ff004f',
      'white' : '#fff',
      }
    },
  plugins: [],
  }
}
