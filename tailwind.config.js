/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/steam_240x300-min_3.jpg')",
        'hero-pattern2': "url('/steam2.jpg')",
        'hero-pattern3': "url('/BannerTwo.jpg')",
      }
    },
  },
  plugins: [],
}

