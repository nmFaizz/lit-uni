/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.tsx",
    "./src/components/LitNews.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

