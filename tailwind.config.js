/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        'primary-light': '#ffffff',
        'primary-dark': '#111827',
        secondary: '#f3f4f6',
        'secondary-light': '#f3f4f6',
        'secondary-dark': '#1f2937',
        accent: '#3b82f6',
        'accent-light': '#3b82f6',
        'accent-dark': '#1d4ed8',
        'background-dark': '#030712',
      },
      backgroundImage: {
        'tech-pattern-light': "url('./assets/tech-pattern-light.svg')",
        'tech-pattern-dark': "url('./assets/tech-pattern-dark.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
