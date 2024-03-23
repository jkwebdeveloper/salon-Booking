/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1800px",
      },
    },
    extend: {
      colors: {
        primary_color: "#711F7E",
        primary: "#711F7E",
        green_color: "#29AD17",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  safelist: [
    { pattern: /^border-(red|green)-[^/]+$/, },
    { pattern: /^text-(red|green)-[^/]+$/, },
    {
      pattern: /^bg-(indigo|yellow|red|purple|pink|blue|green)-[^/]+$/,
      variants: ['hover', 'dark', 'dark:hover', 'group-hover', 'group-hover/navitem', 'group-hover/submenu'],
    },
  ],
  plugins: [require("tailwindcss-animate")],
}