/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-size-1': '5px',
      },
      colors: {
        custom_cor: {
          "cor1": "#f6f4f5",
          "verde-5" : "#5c881a",
          "verde-4" : "#73a616",
          "verde-3" : "#a4ba08",
          "verde-2" : "#a5dd50",
          "verde-1" : "#c3e98a",
          "laranja-5" : "#ff5a00",
          "laranja-4" : "#f07b2b",
          "laranja-3" : "#ff9053",
          "laranja-2" : "#ff976d",
          "laranja-1" : "#f5b283",
        },
      },
    },
  },
  plugins: [],
}