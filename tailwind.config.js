/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '497': '497px',
        '288': '288px',
        '270': '270px',
      },
      width: {
        '288': '288px',
        '270': '270px',
      },
      colors: {
        blue: '#3685FF',
      },
    },
  },
  plugins: [],
}

