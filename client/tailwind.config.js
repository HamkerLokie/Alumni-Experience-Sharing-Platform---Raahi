/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pri: '#484b6a',
        sec: '#9394a5',
        ter: '#d2d3db',
        light: '#e4e5f1',
        gray: '#fafafa'
      },
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
        archivo: ['Archivo Narrow', 'sans-serif'],
        julius: ['Julius Sans One', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif']
      },
      padding: {
        pad: '.3em .5em',
        input: '.6em .5em',
        cont: '1em 2em'
      },
      borderRadius: {
        br: '10px'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '4/5xl': '4.5em'
      },
      spacing: {
        2: '2%',
        20: '20%',
        30: '30%'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
})
