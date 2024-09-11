import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        off: '#F4F4F4',
        on: '#555',
        blind: '#A3A3A3',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'soft-peach-to-pale-lemon':
          'linear-gradient(to right bottom, rgb(255, 213, 179) 10%, rgb(255, 245, 157) 80%)',
        'light-apricot-to-cream':
          'linear-gradient(to right bottom, rgb(255, 223, 166) 10%, rgb(255, 236, 204) 80%)',
        'lavender-mist-to-blush':
          'linear-gradient(to right bottom, rgb(214, 194, 255) 10%, rgb(255, 194, 214) 80%)',
        'cotton-candy-to-pale-lemon':
          'linear-gradient(to right bottom, rgb(255, 182, 255) 10%, rgb(255, 245, 157) 80%)',
        'sky-blue-to-light-apricot':
          'linear-gradient(to right bottom, rgb(179, 236, 255) 10%, rgb(255, 223, 166) 80%)',
        'cotton-candy-to-sky-blue':
          'linear-gradient(to right bottom, rgb(255, 182, 255) 10%, rgb(179, 236, 255) 80%)',
        'mint-to-light-apricot':
          'linear-gradient(to right bottom, rgb(213, 255, 159) 10%, rgb(255, 223, 166) 80%)',
        'sky-blue-to-soft-peach':
          'linear-gradient(to right bottom, rgb(179, 236, 255) 10%, rgb(255, 213, 179) 80%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
