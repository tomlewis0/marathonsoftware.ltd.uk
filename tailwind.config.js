const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
    ],
  },
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
