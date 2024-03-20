/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "100vw",
      },
    },
    extend: {
      colors: {
        primary_color: "#711F7E",
        green_color: "#29AD17",
      },
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
