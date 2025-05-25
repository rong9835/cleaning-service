/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E90FF', // 메인 색상
          dark: '#0066CC', // 호버 상태
          light: '#E6F2FF', // 배경용 연한 색상
        },
        gray: {
          DEFAULT: '#EFEFEF', // 연한 회색
        },
      },
      screens: {
        '2xl': '1440px',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
