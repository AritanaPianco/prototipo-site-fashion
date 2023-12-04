/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    fontFamily: {
       'sans': ['Poppins'],
       'ranga': ['Ranga'],
    },
    colors: {
       backGroundWhite: '#FFFDFC',
       backGroundCreme: '#E9DFDF',
       strongRed: '#3C0700',
       grayMenu: '#777777',
       buttons: '#554442',
       orangeOutline: '#FE7865',
       white: '#ffffff',
       menuHover: '#492E2A',  
       chatCliente: '#FFF2F0',
       chatDono: '#D8D8D8',
    },
    extend: {
       keyframes: {
           moverHorizontal: {
              '0%':{ transform: 'translateX(0)'},
              '100%': { transform: 'translateX(25%)'}
           },  
       },
       animation: {
           'moverHorizontal': 'moverHorizontal .8s ease-in-out infinite alternate'   
       },
    
    }
  },
  plugins: [],
}

