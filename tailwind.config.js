/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'main-bg': '#243c5a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

