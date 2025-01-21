export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'bounce-slow': 'custom-bounce 6s ease-in-out infinite',
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '40%, 60%': { transform: 'translateY(5%)' },
        },
      },
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'], // Add Inter font
      },
    },
  },
  plugins: [],
};
