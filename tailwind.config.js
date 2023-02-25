/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark': '#19191B',
        'blue': '#5454D4',
        'light': '#1E1E20',
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      screens: {
        'xxl': '1600px',
      },
    },
  },
  plugins: [],
};
