/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        mc: {
          bg: '#0c0d10',
          'bg-light': '#f5f6f8',
          surface: '#191b20',
          'surface-alt': '#15171b',
          'surface-light': '#ffffff',
          'surface-alt-light': '#eceef2',
          line: '#42454e',
          'line-subtle': '#30343d',
          'line-light': '#d7dbe3',
          text: '#f6f7f9',
          'text-light': '#111318',
          muted: '#bfc2cb',
          'muted-light': '#5c6270',
          primary: '#ff273a',
          'primary-hover': '#ff5263',
          'primary-deep': '#d90926',
          'palette-red': '#ED343B',
          'palette-blue': '#397BFA',
          'palette-orange': '#F58220',
          good: '#86de9b',
          'good-bg': '#136132',
          late: '#ffb35c',
          'late-bg': '#40270f',
          low: '#ff6371',
          'low-bg': '#850e17',
        },
      },
      borderRadius: {
        mc: '10px',
        'mc-lg': '12px',
      },
    },
  },
  plugins: [],
};
