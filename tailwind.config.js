const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      white: "#FFFFFF",
      black: "#000000",
      primary: {
        DEFAULT: "#596773",
        lightest: "#E8EBED",
        light: "#A3AEB8",
        dark: "#3E4851",
        darkest: "#2C333A",
      },
      secondary: {
        DEFAULT: "#8AD0C7",
        lightest: "#E2F3F1",
        light: "#B6E2DC",
        dark: "#50B9AB",
        darkest: "#3A9286",
      },
      link: {
        DEFAULT: "#0066FE",
        hover: "#5C9DFF",
      },
    },
    fontFamily: {
      display: ["Poppins-SemiBold"],
      body: ["Poppins"],
    },
    extend: {
      height: (theme) => ({
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      }),
      minWidth: (theme) => ({
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      opacity: ["disabled"],
      borderColor: ["active"],
    },
  },
  plugins: [],
};
