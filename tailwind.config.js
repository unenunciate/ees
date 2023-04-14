/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "",
        "accent": "",
      },
      textColor: {
          "primary-main": "",
          "primary-aux": "",
          "accent-main": "",
          "accent-aux": "",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require('flowbite/plugin'),
    require("@tailwindcss/forms"),
    require('@headlessui/tailwindcss'),
    require("@tailwindcss/line-clamp"),
  ],
}
