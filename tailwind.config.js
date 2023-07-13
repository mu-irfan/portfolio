/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-calibre)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-sfmono)", "var(--font-firacode)", "monospace"],
      },
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lightest: "#233554",
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        white: "#e6f1ff",
        green: "#64ffda",
      },
      boxShadow: {
        "outline-green": "4px 4px 0 0px #64ffda",
        "card-navy": "0 10px 30px -15px #0a192f",
        "card-navy-hover": "0 20px 30px -15px #0a192fb3",
      },
      transitionProperty: {
        all: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
  plugins: [],
};
