/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#fef9f1",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      times: ["Times New Roman", "serif"],
    },
  },
  plugins: [],
};
