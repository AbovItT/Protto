/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'mainColor':"rgba(255,0,0,.8)",
        'linkColor':"#716C8F",
        'transparent':"transparent",
        'bodyBG': "#F5F5F5",  
        'prottoBG': "#303030",
        'prottoHover': "#797897",   
        'prottoText': "#192A3D", 
      },
      boxShadow:{
        'blogShadow':'0 2px 73px 0 rgb(0 0 0 10%)',
      },
      fontFamily: {
        'pixeboy': "pixeboy",
        'montserrat': "montserrat",
      },
    },
  },
  plugins: [],
}
