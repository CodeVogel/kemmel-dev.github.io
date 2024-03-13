/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    colors : {
      white : '#ffffff',
      background: '#090108',
      primary: '#ffde1a',
      primary: {
        100: '#ffcc00',
      },
      secondary: {
        100: '#ffa700',
        200: 'ff8d00',
        300: '#ff7400'
      }
    },
    extend: {}
  },
  plugins: [],
}

