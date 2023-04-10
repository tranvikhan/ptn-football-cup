export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        stadium: "url('/img/bg.jpg')",
      },
      fontFamily: {
        "train-one": ["Train One", "cursive"],
        rajdhani: ["Rajdhani", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [],
};
