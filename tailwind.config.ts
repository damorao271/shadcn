import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Use CSS variables defined in globals.css for design tokens
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      },
      //   colors: {
      //     background: 'var(--color-background)',
      //     foreground: 'var(--color-foreground)',
      //     primary: 'var(--color-primary)',
      //     'primary-foreground': 'var(--color-primary-foreground)',
      //   },
      //   borderRadius: {
      //     lg: 'var(--radius-lg)',
      //     md: 'var(--radius-md)',
      //     sm: 'var(--radius-sm)',
      //   },
    },
  },
  plugins: [
    // small helper to expose utility for theme variables if needed
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-theme': { backgroundColor: 'var(--color-background)' },
        '.text-theme': { color: 'var(--color-foreground)' },
      })
    }),
  ],
}

export default config
