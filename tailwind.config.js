module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: ['hover', 'focus'],
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      },
      screens: {
				sm: "480px",
				lg: "1025px",
        xl:"1280px",
				"2xl": "1500px",
				"3xl": "1780px",
			},
      spacing: {
        '43': '11.25rem',
        '72': '18rem',
        '84': '21rem',
        '86': '22.5rem',
        '96': '24rem',
        '108': '27rem',
        '110': '28rem',
        '120': '30rem',
        '128': '32rem',
        '132': '33rem',
        '140': '36rem',

      },
      rotate: {

        '8': '8deg',
        
       },
      fontFamily: {
        'body': ["'Fira Sans Extra Condensed'"]
      },
      backgroundImage: theme => ({

        'white-background': "url('/white-background.jpg')",
        'pattern-2': "url('/pattern2.png')",
 
       })
    },
    zIndex: {
      '0': 0,

     '10': 10,

     '20': 20,

     '30': 30,

     '40': 40,

     '50': 50,

     '25': 25,

     '50': 50,

     '75': 75,

     '100': 100,
     '1000': 1000,
     '1010': 1010,
     '1020': 1020,
     'auto': 'auto',
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}
