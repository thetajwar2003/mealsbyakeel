/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'akeel_navy': {
        DEFAULT: '#11101e',
      },
      'akeel_yellow': {
        DEFAULT: '#f7c843',
      },
    },
    extend: {},
  },
  plugins: [],
};