/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--color-sky-300)',
          DEFAULT: 'var(--color-sky-500)',
          dark: 'var(--color-sky-700)',
        },
        secondary: {
          light: 'var(--color-emerald-300)',
          DEFAULT: 'var(--color-emerald-500)',
          dark: 'var(--color-emerald-700)',
        },
        background: {
          light: 'var(--color-gray-50)',
          DEFAULT: 'var(--color-gray-100)',
          dark: 'var(--color-gray-200)',
        },
        text: {
          primary: 'var(--color-gray-900)',
          secondary: 'var(--color-gray-600)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-primeui')]
}

