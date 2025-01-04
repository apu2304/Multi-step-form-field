/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors:{
        palatinateBlue: '#483EFFff',
        aliceBlue: '#EEF5FFff',
        yinmnBlue: '#405B7Dff',
        polynesianBlue: '#174A8Bff',
        uranianBlue: '#BEE2FAff',
        coolGray: '#857CA0ff',
        cerise: '#C04B61ff'
      },
      fontFamily:{
        body: ["Ubuntu"]
      },
      backgroundImage: { 
        'desktop': "url('./src/assets/images/bg-sidebar-desktop.svg')", 
        'mobile': "url('./src/assets/images/bg-sidebar-mobile.svg')", 
      },
    },
  },

  safelist: [
    'bg-desktop',
    'bg-mobile',
  ],
  plugins: [],
}

