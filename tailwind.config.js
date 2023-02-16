/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-Title': "url('./title.jpg')",
        'bg-2': "url('./bg-2.png')",
      },
    },
  },
  plugins: [],
};
