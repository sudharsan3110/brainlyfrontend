/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        Blue:{
          600:'#5045e3',
          400:'#e0e7ff'
        },
        Gray:{
          500:'#dddddd'
        }
      }
    },
  },
  plugins: [],
}

