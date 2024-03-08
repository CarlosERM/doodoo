/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: "#825ff6",
        c2: "#222327",
        c3: "#ffffff",
        c4: "#a8a9aa",
        c5: "#24262c",
        c6: "#543f98",
        c7: "#474950",
        c8: "#1efe7f",
        c9: "#2a2b2f",
        c10: "#646464",
      },
    },
  },
  plugins: [],
};
