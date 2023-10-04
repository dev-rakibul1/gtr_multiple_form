/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],



  extend: {
    // Define custom background color class
    backgroundColor: {
      'gradient-custom': 'linear-gradient(24deg, #4502fa, #ea01ec)',
    },
  },


}