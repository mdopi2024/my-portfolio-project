/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        knowledge:"url('./src/assets/knolagenest.png')",
        knowledge:"url('./src/assets/newtStepVisa.png')",
        knowledge:"url('./src/assets/lingo-bingo.png')",
      }
    },
  },
  plugins: [require('daisyui')],
}

