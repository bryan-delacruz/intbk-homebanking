/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        88: "22rem",
      },
      colors: {
        "intb-green-login": "#04afa9",
        "intb-green-login-btn": "#009b3a",
      },
      backgroundImage: {
        "login-sm": "url('/src/assets/bpi_bg_sm_x2.jpg')",
      },
    },
  },
  plugins: [],
};
