module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,tsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#131419",
        "weather-secondary": "#131419",
        "dashboard-text": "#71778C",
        "background-blue": "#5599ff",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
  },
  container: {
    padding: "2rem",
    center: true,
  },
  screens: {
    sm: "640px",
    md: "768px",
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["dark", "light", "bumblebee", "black"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
