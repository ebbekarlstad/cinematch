/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '52': '13rem', // 208px (to maintain 2:3 ratio for movie posters)
      },
      height: {
        // Custom height values I added that are smaller/bigger than Tailwind's default
        '18': '4.5rem', // 72px / 4 = 18
        '20': '5rem',   // 80px / 4 = 20
        '78': '19.5rem', // 312px (to maintain 2:3 ratio for movie posters)
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Use the Inter font variable
      },
      borderColor: {
        mypink: '#961ECD', // Custom border colors
        myblue: '#1E70CD',
        mygold: '#FFC300',
      },
      borderWidth: {
        '1': '1px',
      },
      screens: {
        'h-sm': { raw: '(max-height: 600px)' }, // Custom height breakpoint
      },
    },
  },
  plugins: [],
};
