import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        // Primary Red - for CTAs, buttons, alerts
        primary: {
          DEFAULT: '#FE0000',
          light: '#EE2525',
          dark: '#E91010',
        },
        // Neutral Scale - for typography, backgrounds
        neutral: {
          50: '#F6F6F6',
          100: '#F4F4F4',
          200: '#EEEEEE',
          300: '#DADADA',
          400: '#999999',
          500: '#666666',
          600: '#413C3C',
          700: '#322C2C',
          800: '#333333',
          900: '#131111',
          black: '#000000',
          white: '#FFFFFF',
        },
        // Accent Colors - for specific UI elements
        accent: {
          green: '#25D366',      // WhatsApp/Positive actions
          whatsapp: '#25D466',   // WhatsApp specific
          error: '#CC3366',      // Error messages
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-cabin)','system-ui', 'sans-serif'],
      },
    
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FE0000 0%, #E91010 100%)',
        'gradient-dark': 'linear-gradient(135deg, #131111 0%, #322C2C 100%)',
        'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F6F6F6 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'trust-card': '0 4px 20px rgba(254, 0, 0, 0.08)',
        'float': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config