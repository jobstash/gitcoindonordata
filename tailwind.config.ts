import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        btnFirst: 'rgba(255, 151, 118, 0.5)',
        btnSecond: 'rgba(95, 148, 188, 0.5)',
        btnLast: 'rgba(222, 171, 12, 0.5)',
      }
    },
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      mono: [ "monospace", ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
    logs: false,
  },
};
export default config;
