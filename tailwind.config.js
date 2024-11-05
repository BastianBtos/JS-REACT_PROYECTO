/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/steam_240x300-min_3.jpg')",
        'hero-pattern2': "url('/steam2.jpg')",
        'hero-pattern3': "url('/banner2.jpg')",
      }
    },
  },
  plugins: [],
}

