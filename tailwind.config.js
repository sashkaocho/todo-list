/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#16a34a",
        warning: "#ffc107",
        error: "#dc2626",
        primary: {
          50: "#eef3ff",
          100: "#e0e8ff",
          200: "#c8d4fd",
          300: "#a6b9fb",
          400: "#8392f6",
          500: "#5963ee",
          600: "#4a48e3",
          700: "#3e3ac8",
          800: "#3331a2",
          900: "#2f3080",
          950: "#1d1c4a",
        },
      },
    },
  },
  plugins: [],
};
