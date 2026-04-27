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
        primary: {
          DEFAULT: '#0EA5E9', // sky-500
          dark: '#0284C7',
          light: '#38BDF8',
        },
        dark: {
          DEFAULT: '#0F172A', // slate-900
          light: '#1E293B', // slate-800
        },
        light: {
          DEFAULT: '#F8FAFC', // slate-50
          dark: '#F1F5F9', // slate-100
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
