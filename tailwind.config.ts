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
        bgGrey:'rgba(247,247,247,0.4)',
        greyMid:'#555555',
        greyTile: "#F1F1F1",
        greenBtn:'#D2F2EF',
        alert: '#FFD9CD',
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
