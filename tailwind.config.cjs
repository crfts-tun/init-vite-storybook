/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [require('./custom-theme.cjs')],
  future: {
    hoverOnlyWhenSupported: true,
  },
}