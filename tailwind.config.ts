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
    // fontSize: {
    //   'body-xs': ['16px', {
    //     letterSpacing: '-0.06em',
    //     lineHeight: '1.5rem',
    //     fontWeight: '400'
    //   }],
    //   'body-small': ['20px', {
    //     letterSpacing: '-0.06em',
    //     lineHeight: '1.5rem',
    //     fontWeight: '400'
    //   }],
    //   'body-xs-small': ['1.25rem', {
    //     lineHeight: '1.875rem',
    //     letterSpacing: '-0.01em',
    //     fontWeight: '500'
    //   }],
    //   'body-medium': ['2rem', {
    //     lineHeight: '2.8125rem',
    //     letterSpacing: '-0.03em',
    //     fontWeight: '500'
    //   }],
    //   'body-large': ['2.25rem', {
    //     lineHeight: '3.125rem',
    //     letterSpacing: '-0.01em',
    //     fontWeight: '400'
    //   }],
    //   'body-x-large': ['2.625rem', {
    //     lineHeight: '3.125rem',
    //     letterSpacing: '-0.03em',
    //     fontWeight: '500'
    //   }],
    //   'heading-3': ['4rem', {
    //     lineHeight: '4.8125rem',
    //     letterSpacing: '-0.05em',
    //     fontWeight: '700'
    //   }],
    //   'heading-2': ['11.25rem', {
    //     lineHeight: '11.25rem',
    //     letterSpacing: '-0.06em',
    //     fontWeight: '700'
    //   }],
    //   'heading-1': ['12.5rem', {
    //     lineHeight: '15rem',
    //     letterSpacing: '-0.04em',
    //     fontWeight: '700'
    //   }],
    // },
    boxShadow: {
      'normal': '0 0 0 1px rgba(0,0,0,0.05), 0px 2px 1px -1px rgba(0, 0, 0, 0.1)'
    }
  },
  plugins: [],
}
export default config
