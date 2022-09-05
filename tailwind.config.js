/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: " #00690B",
        gradientGreen: "#00AA11",
        gray: "#EEEEEE",
        lightergray: "#F6F6F6",
        lightestgray: "#FCFCFC",
        black: "#000000",
        white: "#ffffff",
        inputGray: "#f0f0f0",
        blue: "#2054D2",
        pinkBg: "#EF4444",
        lightGreen: "#01A811",
        overlay: "rgba(0,0,0,0.5)",
        lightAsh: "#f9f9f9",
        lightTest: "#fafafa",
        pending: " #EC8A00",
        inProgress: "#0067DC",
        completed: "#00A110",
        yellow: "#FFD600",
        likeRed: "#EB2121",
        offBlue: "#4987CE",
        dropPrimary: "#f3f3f3",
        reportGreen: "#4CAF50",
      },
    },
  },
  plugins: [],
};
