/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.tsx",
    "./src/components/LitNews/LitNews.tsx",
    "./src/components/LitNews/NewsItem.tsx",
    "./src/components/LitLocation/LitLocation.tsx",
    "./src/components/NavBar/NavBar.tsx",
    "./src/components/SideBar/SideBar.tsx",
    "./src/components/HeroSection/HeroSection.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

