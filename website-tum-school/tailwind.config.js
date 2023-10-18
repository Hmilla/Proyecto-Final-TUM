/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}",],
  theme: {
    extend: {
      colors:{
        "google-blue": "#3369e8",
        "google-yellow": "#eeb211",
        "google-green": "#009925",
        "google-red": "#d50f25"
      }
    },
  },
  plugins: [],
}

