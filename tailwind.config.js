/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          },
        },
        "fly-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "20%": {
            transform: "scale3d(1.1, 1.1, 1.1)"
          },
          "40%": {
            transform: "scale3d(0.9, 0.9, 0.9)"
          },
          "60%": {
            opacity: "1",
            transform: "scale3d(1.03, 1.03, 1.03)"
          },
          "80%": {
            transform: "scale3d(0.97, 0.97, 0.97)"
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)"
          },
        },
      },
      animation: {
        'fade-in-bouncedown': 'fade-in-bouncedown 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        'fly-in': 'fly-in 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
      },
      gridTemplateRows: {
        'home': '0.1fr 1fr',
      },
      gridTemplateColumns: {
        'card': '1fr 3fr',
      }
    },
  },
  plugins: [],
}