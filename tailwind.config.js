/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-Title': "url('/xcmg-bg1.jpg')",
        'bg-amarelo': "url('/xcmg-amarelo.jpg')",
        'bg-1': "url('/bg.webp')",
        'bg-3': "url('/bg3.jpg')",
        'bg-4': "url('/bg4.jpg')",
        'bg-1m': "url('/bg1m.jpg')",
        'bg-3m': "url('/bg3m.jpg')",
        'bg-4m': "url('/bg4m.jpg')",
      },
    },
  },
  plugins: [],
};
