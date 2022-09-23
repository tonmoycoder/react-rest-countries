/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#a4db36',

          secondary: '#2563eb',

          accent: '#51f7e6',

          neutral: '#24213B',

          'base-100': '#2A2645',

          info: '#AAD1E4',

          success: '#58E4AC',

          warning: '#996806',

          error: '#E3356F',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
