/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },

    extend: {
      colors: {
        'body': "#010314",
        'textColor': "#77798F",
        'outline1': "#2A2B3A",
        'outline2': "#4467ff", 
        'hr': "#182542",  
      },
      fontFamily: {
        'sans': ['Satoshi Variable', 'sans-serif'],
      },
    },
    screens: {
      ss: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1280px",
    },
  },
  plugins: [],
}