/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Softblue: `var(--Softblue)`,
        Cyan: `var(--Cyan)`,
        Verydarkblue: `var(--Verydarkblue)` /*(main BG)*/,
        Verydarkbluecard: `var(--Verydarkbluecard)` /*(card BG)*/,
        Verydarkblueline: `var(--Verydarkblueline)`,
        White: `var(--White)`,
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
