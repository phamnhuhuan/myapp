/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#ff3366',
      'hover-primary': '#b22347',
      'white': '#fff',
      'list':'#edf6f9',
      'star':'#ffbc39',
      'error':'#ff5100',
    },
    keyframes: {
      menu: {
        '0%': { transform: 'translateY(40px)',opacity: '0' },
        '100%': { transform: 'translateY(0)',opacity: '1' },
      },
      overlay: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      send: {
        '0%': { transform: 'translateY(0)' },

      },
    },
    animation: {
      overlay: 'overlay .5s ease-in-out',
      menu: 'menu .5s ease-in-out',
      send: 'send .5s ease-in-out'
    }
  },
  plugins: [],
}