/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['Calibre', 'sans-serif'],
      'mono': ['"SF Mono"', 'monospace'],
    },
    extend: {
      colors: {
        navy: 'var(--color-navy)',
        'light-navy': 'var(--color-light-navy)',
        'lightest-navy': 'var(--color-lightest-navy)',
        'slate': 'var(--color-slate)',
        'light-slate': 'var(--color-light-slate)',
        'lightest-slate': 'var(--color-lightest-slate)',
        white: 'var(--color-white)',
        green: 'var(--color-green)',
        'light-green': 'var(--color-green-hover)'
      },
      gridTemplateColumns: {
        'site': '80px 1fr 80px',
      },
      gridTemplateRows: {
        'site': '100px 1fr',
      },
    },
  },
  plugins: [],
}
