/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty:{
        'width':'width'
      },
      colors:{
        olive:'#3b4b33',
        wheat:'#f6eee1',
        burn:'#fd5f38',
        mustard:'#fdad16'
      },
      listStyleType:{
        square:'square',
        shine:'url("/assets/shinefill.svg")'
      }
    }
  },
  plugins: [],
};
