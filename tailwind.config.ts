import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'black': '#0E0F0C',
      'white': '#FFFFFF',
      'light-green': '#A0EF6A',
      'dark-green': '#163300',
    },
    boxShadow: {
      'normal': '0 0 0 1px rgba(0,0,0,0.05), 0px 2px 1px -1px rgba(0, 0, 0, 0.1)'
    },
    keyframes: {
      slidein: {
        from: {
          opacity: '0%',
          transform: 'translateY(-12px)'
        },
        to: {
          opacity: '100%',
          transform: 'translateY(0px)'
        }
      },
      shine: {
        to: {
          "background-position": "0 0"
        },
        from: {
          "background-position": "-200% 0"
        }
      }
    },
    animation: {
      slidein: "slidein 1s ease 300ms",
      shine: "shine 0.9s linear var(--shine-delay, 0)",
    }
  },
  plugins: [],
}
export default config
