/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { screens: { sm: { max: "639px" } } },
  },
  daisyui: {
    themes: [
      {
        arcNg: {
          primary: "#009ED8",

          secondary: "#0ACF83",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#34A853",

          warning: "#F9A63A",

          error: "#F04438",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
