/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: `var(--DarkBlue)`,
        BluGrey: `var(--BluGrey)`,
        NeonGreen: `var(--NeonGreen)`,
        Text: `var(--Text)`,
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        "3xl": ` 0 10px 20px rgba(0, 0, 0, 0.2)`,
      },
    },
  },
  plugins: [],
};
