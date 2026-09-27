/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        surface: {
          canvas: '#f8f9fe',
          card: 'rgba(255, 255, 255, 0.78)',
          glass: 'rgba(255, 255, 255, 0.65)',
        }
      },
      boxShadow: {
        'glass': '0 20px 40px -15px rgba(147, 131, 219, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
        'glass-lg': '0 25px 50px -12px rgba(124, 58, 237, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.9) inset',
        'pill': '0 8px 20px -6px rgba(124, 58, 237, 0.15)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
