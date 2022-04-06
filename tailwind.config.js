module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'primary':'#0C0C0C',
          'secondary':'#DCCA87',
          'light-gray':'#AAAAAA',
        },
        fontFamily:{
          'alt':'Cormorant Upright',
          'sans':'Open Sans'
        },
        backgroundImage:{
          'bg': "url('./assets/img/bg.png')",
        }
      },
    },
    plugins: [],
  }