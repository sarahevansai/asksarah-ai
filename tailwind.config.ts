import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1a1428',
        'brand-cyan': '#00d4ff',
        'brand-blue': '#1E88E5',
      }
    },
  },
  plugins: [],
}
export default config
