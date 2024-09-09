import { grey } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#282828",
        "light-white": "#F5F5F5",
        "grey" : "#6D5D6E"
      }
    },
  },
  plugins: [],
}

