/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0a23', // deep midnight background
        primary: '#1e3a8a',  // strong blue
        secondary: '#2563eb', // lighter blue
        tertiary: '#60a5fa', // even lighter blue
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
