/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-body": `linear-gradient(264.14deg, rgba(0, 255, 163, 0.75) 3.51%, #033682 34.17%, rgba(28, 191, 191, 0.79) 62.21%, #601BC1 73.24%, #000000 100%),linear-gradient(150.33deg, rgba(24, 24, 24, 0.2) 19.34%, rgba(78, 28, 117, 0.2) 65.07%)`,
        "gradient-circle1": "linear-gradient(132deg, #fff 0%, #4200FF 80%)"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '540px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
