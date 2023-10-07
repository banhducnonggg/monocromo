/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        calc10: "calc(100% - 10px)",
        calc20: "calc(100% - 20px)",
        calc50: "calc(100% - 50px)",
        thatsRight: '29rem'
      },
      screens: {
        'no-scroll': {'raw': '(max-height: 100vh)'},
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        bgColor: '#090c09',
        drColor: '#121212',
        dColor: '#3a3a3a',
        lColor: '#c9c9c9',
        lrColor: '#faf8ff',
        hColor: "#8685ef"
      },
      fontWeight: {
        titleFont: '600',
        regFont: '400',
        navFont: '200'
      },
      width: {
        bgWidth: 'calc(100%-20px)'
      },
      height: {
        bgHeight: 'calc(100%-20px)'
      },
      inset: {
        bgYInsetB: '40px',
        bgXInset: '10px',
        bgInset: '10px'
      },
      backgroundImage: {
        urlImg: "url('/bg1.png')",
        avaImg: "url('/ava-2.jpg')",
        arrowImg: "url('/doodlearrow.png')",
        fbImg: "url('/facebook.png')",
        flickrImg: "url('/flickr.png')",
        gitImg: "url('/github.png')",
        igImg: "url('/instagram.png')",
        linkedinImg: "url('/linkedin.png')",
        gmImg: "url('/gmail.png')"
      },
      dropShadow: {
        outGlow: '0 0 5px rgba(250, 248, 255, 1)'
      }
    },
  },
  plugins: [],
}
 