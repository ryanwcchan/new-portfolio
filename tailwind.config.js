/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "monospace"],
        noto: ["Noto Sans", "monospace"],
        open: ["Open Sans", "monospace"],
        ubuntu: ["Ubuntu", "monospace"],
        Afacad: ["Afacad", "monospace"],
        sans: ["Afacad", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
