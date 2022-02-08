module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        pf: ['Poppins', 'sans-serif']
      },
      screens: {
        //That shorthand version of adding a small breakpoint produces an error
  
        'xs': '475px',
        // => @media (min-width: 475px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
