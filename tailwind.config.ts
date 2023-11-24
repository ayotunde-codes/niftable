import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "satoshi": ['var(--font-satoshi)'],
        "monumentExtended":  ['var(--font-monumentextended)'],
      },
      colors: {
        "grey-line": "#13171D",
        purple: "#AB23FF"
      },
    },
  },
  plugins: [],
}
export default config
