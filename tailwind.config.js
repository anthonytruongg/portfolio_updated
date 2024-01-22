/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#75dd81",
          primary: "#FED232",

          secondary: "#85a6d1",

          accent: "#27c49f",

          neutral: "#080200",

          "base-100": "#e3dcef",

          info: "#9bcfe9",

          success: "#1ad163",

          warning: "#f6b528",

          error: "#e64528",
        },
      },
      {
        colors: {
          pOne: "#157A6E",
          pOneTwo: "#499F68",
          pOneTxt: "#3EC300",
          pTwo: "#694873",
          pTwoTwo: "#8B728E",
          pTwoTxt: "#DDA3B2",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
