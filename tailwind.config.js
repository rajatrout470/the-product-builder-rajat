/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:      'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        subtle:  'rgb(var(--c-subtle) / <alpha-value>)',
        border:  'rgb(var(--c-border) / <alpha-value>)',
        violet:  'rgb(var(--c-violet) / <alpha-value>)',
        muted:   'rgb(var(--c-muted) / <alpha-value>)',
        dim:     'rgb(var(--c-dim) / <alpha-value>)',
      },
      fontFamily: {
        sans:    ['Montserrat', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        card:       '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover':'0 6px 20px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
}
