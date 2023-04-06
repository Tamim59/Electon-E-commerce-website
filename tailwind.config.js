/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
       container: '1330px',
      },
      fontFamily: {
        'popi': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#003F62',
        'yow': '#EDA415',
        'textpri': '#1B5A7D',
        'textdk': '#292D32',
      },
    },
  },
  plugins: [],
}