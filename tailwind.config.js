/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        offWhite: '#f0f0f0',    
        gris:{
          100: '#dbdbdb',
          200: '#716f6f',
        },
        offBlack:'#141414',
        morado: '#854dff',
        rojo: '#ff5757',   
      },
    },
  },
  plugins: [],
}
