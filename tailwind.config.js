/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.tsx",
    "./src/components/LitNews/LitNews.tsx",
    "./src/components/LitNews/NewsItem.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

