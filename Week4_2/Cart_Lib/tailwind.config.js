/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // xanh dương chính
        secondary: "#64748b", // xám hiện đại
        accent: "#f43f5e",    // đỏ hồng nhấn mạnh
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // font chữ hiện đại
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}
