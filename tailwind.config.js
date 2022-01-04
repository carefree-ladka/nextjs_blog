module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors: {
        'regal-blue': '#243c5a',
        'link':'#007acc',
        'dark':'#0c2233',
        'whole':'#061724',
        'h2':'#363a3b'
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}