/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'poppins':"'Poppins', sans-serif;",
      },
      padding: {
        '620': '620px',
        '500': '500px',
      }

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
