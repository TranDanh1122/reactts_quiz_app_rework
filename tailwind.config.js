/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(red|green|blue|puple|dark_1|dark_2|black|dark_3)(\/\d{1,3})?/, // Khai báo các lớp màu có thể sử dụng
    },
  ],
  theme: {
    extend: {
      colors: {
        "puple": "#A729F5",
        "dark_1": "#313E51",
        "dark_2": "#3B4D66",
        "dark_3": "#626C7F",
        "blue": "#ABC1E1",
        "gray": "#F4F6FA",
        "green": "#26D782",
        "red": "#EE5454"
      },
      screens: {
        mb: { min: "0", max: "1023px" },
      }
    },
  },
  plugins: [],
}

