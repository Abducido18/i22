/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1B91B8',
        customBlueHover: '#2bd1e1'
      },
    },
  },
  plugins: [],
};
