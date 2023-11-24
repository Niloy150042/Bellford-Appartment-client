/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily :{
      cinzel : ['Cinzel', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      Roboto:['Roboto', 'sans-serif'],
      Dosis:['Dosis', 'sans-serif']
    }
    
  },
  plugins: [require("daisyui")],
}

