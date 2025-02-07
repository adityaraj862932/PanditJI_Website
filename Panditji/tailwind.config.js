/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        fromCenter: '50% calc(100% - var(--bottom-distance))',
      },
    },
  },
  plugins: [],
}

