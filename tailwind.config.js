/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    fontWeight: {
      
    },
    extend: {
      backgroundPosition: {
        'custom': '48% 50%', // Custom position for all screens
        'custom-sm': '52% 50%', // Custom position for small screens
        'custom-md': '57% 50%', // Custom position for medium screens
        'custom-lg': '60% 50%', // Custom position for large screens
        'custom-xl': '52% 50%', // Custom position for large screens
        'customtwoxl': '75% 75%', // Custom position for large screens
      },
    }, 
  },
  plugins: [],
}

