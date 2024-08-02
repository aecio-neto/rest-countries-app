/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue': {
          DEFAULT: 'hsl(207, 26%, 17%)',
          'text': 'hsl(200, 15%, 8%)',
        },
        'dark-gray': 'hsl(0, 0%, 52%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        'homepage-items': '14px',
        'detail-page': '16px',
      },
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      fontWeight: {
        'light': 300,
        'semi-bold': 600,
        'extra-bold': 800,
      },
    },
  },
  plugins: [],
}