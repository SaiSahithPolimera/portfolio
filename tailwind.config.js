/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'home': '0.1fr 1fr',
      },
      gridTemplateColumns: {
        'card': '1fr 3fr',
      },
      keyframes: {
        "fade-in-bouncedown": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0%, -100%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, -20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          }
        },
      },
      animation: {
        fadeinbouncedown: 'fade-in-bouncedown 1s ease-in-out 0.25s 1',
        gradient: 'gradient 8s linear infinite'
      },
    },
  },
  plugins: [],
}