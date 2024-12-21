const defaultTheme = require('tailwindcss/defaultTheme');

// tailwind.config.js
export default {
  theme: {
    extend: {
      whiteSpace: {
        'pre-line': 'pre-line',
      },
      fontFamily: {
        sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};
