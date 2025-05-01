/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ],
    darkMode: 'class', // This enables class-based dark mode
    theme: {
      extend: {
        colors: {
          dark: {
            100: '#1a1a1a',
            200: '#222222',
            300: '#2a2a2a',
            400: '#333333',
            500: '#3d3d3d',
          }
        }
      },
    },
    plugins: [],
  }