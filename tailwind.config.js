/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        homeFont: ["Shadows Into Light", "Shadows Into Light"],
        customFont: ["Indie Flower"],
      },
      backgroundImage: {
        homePageImage:
          "url('https://cdn.wallpapersafari.com/25/92/64Wy51.jpg')",
      },
    },
  },
  plugins: [],
};
