// tailwind.config.js
module.exports = {
  darkMode: 'class', // Use 'class' for toggling dark mode manually
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#f8fafc',
        accent: '#3b82f6',
      },
    },
  },
  plugins: [],
}
