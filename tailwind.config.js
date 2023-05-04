/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-maq': "url('/bg-maq.webp')",
        'bg-1': "url('/banner-01.webp')",
        'bg-3': "url('/bg-sec.webp')",
        'bg-4': "url('/bg4.jpg')",
        'bg-1m': "url('/bg1m.jpg')",
        'bg-3m': "url('/bg3m.jpg')",
        'bg-4m': "url('/bg4m.jpg')",
      },
    },
  },
  plugins: [],
};
