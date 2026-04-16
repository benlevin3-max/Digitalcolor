import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: '#FFFFFF',
          'bg-secondary': '#F5F5F7',
          text: '#1D1D1F',
          secondary: '#6E6E73',
          border: '#D2D2D7',
          blue: '#0071E3',
          'blue-hover': '#0077ED',
          label: '#AEAEB2',
        },
      },
      fontFamily: {
        apple: ['-apple-system', '"SF Pro Display"', '"SF Pro Text"', 'BlinkMacSystemFont', '"Helvetica Neue"', 'sans-serif'],
      },
      borderRadius: {
        apple: '18px',
        'apple-sm': '12px',
        'apple-pill': '980px',
      },
      fontSize: {
        'apple-hero': ['96px', { lineHeight: '1.05', letterSpacing: '-0.003em', fontWeight: '700' }],
        'apple-title': ['56px', { lineHeight: '1.07', letterSpacing: '-0.003em', fontWeight: '600' }],
        'apple-body': ['17px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};

export default config;
