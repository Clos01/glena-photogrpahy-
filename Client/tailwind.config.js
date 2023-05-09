/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0f3649',
        lightGreen: '#498054c0',
        darkGreen: '#498054',
      }
    },
  },
  plugins: [],
}

