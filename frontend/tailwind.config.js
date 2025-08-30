import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
const { night } = themes;

const nightcustom = {
  ...night,
  primary: '#1D4ED8',      // deep blue
  secondary: '#9333EA',    // purple accent
  accent: '#60A5FA',       // lighter sky blue for borders/highlights
  info: '#3B82F6',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [
      { nightcustom },
      "forest",
      "coffee"
    ],
  },
};