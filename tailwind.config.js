/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',     // Extra small devices
        'sm': '640px',     // Small devices (default)
        'md': '768px',     // Medium devices (tablets)
        'lg': '1024px',    // Large devices (desktops)
        'xl': '1280px',    // Extra large devices
        '2xl': '1536px',   // 2X large devices
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'product': '0px 1px 1px 1px rgba(0, 0, 0, 0.1)',
        'product-light': '0px 1px 1px 0px rgba(0, 0, 0, 0.1)',
        'enhanced': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}