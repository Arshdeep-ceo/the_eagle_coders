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
        floating :{
    '0%': { transform: 'translate(0,  0rem)' },
    '25%'  :{ transform: 'translate(0, 0.5rem)' },
    '50%' : { transform: 'translate(0, -0.3rem)' }  ,  
    '100%' : { transform: 'translate(0, 0rem)' }    
      },
      hue_rotate: {
        '0%, 100%': { transform: 'hue-rotate(-360deg)' },
        '50%': { transform: 'hue-rotate(360deg)' },
      },
      },

      animation: {
        'floating': 'floating 5s linear infinite',
          'hue_rotate': 'hue_rotate 1s ease-in-out infinite',
        
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

