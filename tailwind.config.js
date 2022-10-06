// /** @type {import('tailwindcss').Config} */ 

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      colors: {
        'lightBlack': '#33333A',
        'black': '#111111',
        'blue': '#699BF7',
        'grey': '#CCCCCC',
        'gray': '#edede9',
        'white': '#FFFFFF'
      },
    },
}