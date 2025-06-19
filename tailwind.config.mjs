/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["var(--font-lexend-sans)"],
        manrope: ["var(--font-manrope-sans)"],
      },
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
