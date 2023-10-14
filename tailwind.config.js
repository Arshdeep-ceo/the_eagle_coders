/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      keyframes:{
        animate_floating :{
    '0%': { transform: 'translate(0,  0px)' },
    '50%'  :{ transform: 'translate(0, 1.5rem)' },
    '100%' : { transform: 'translate(0, -1.5rem)' }    
      }
      },

      animation: {
        animate_floating: 'floating 1s ease-in-out infinite',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

