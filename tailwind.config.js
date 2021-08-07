module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
      },
      fontFamily: {
        body: ['Nunito'],
        healline: ['Poppins'],
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('../public/img/download.png')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
