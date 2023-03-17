/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-Title': "url('/title.jpg')",
        'bg-1': "url('/bg1.jpg')",
        'bg-2': "url('/bg-2.png')",
        'bg-3': "url('/bg3.jpg')",
        'bg-4': "url('/bg4.jpg')",
      },
    },
  },
  plugins: [],
};
