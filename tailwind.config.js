import { fontFamily } from 'tailwindcss/defaultTheme';

const spacings = {
   nav: '6rem',
   wave: '4rem',
   footer: '6rem'
};

const pageHeight = `calc(100dvh - ${spacings.nav} - ${spacings.wave} - ${spacings.wave})`;

/** @type {import('tailwindcss').Config} */
const config = {
   content: ['./src/**/*.{html,js,svelte,ts}'],
   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px'
         }
      },
      extend: {
         colors: {
            background: {
               DEFAULT: '#0C0C0C',
               50: '#454545',
               100: '#424242',
               200: '#3D3D3D',
               300: '#363636',
               400: '#303030',
               500: '#292929',
               600: '#242424',
               700: '#1C1C1C',
               800: '#141414',
               900: '#0F0F0F',
               950: '#0C0C0C'
            },
            primary: {
               DEFAULT: '#facc15',
               50: '#fefce8',
               100: '#fef9c3',
               200: '#fef08a',
               300: '#fde047',
               400: '#facc15',
               500: '#eab308',
               600: '#ca8a04',
               700: '#a16207',
               800: '#854d0e',
               900: '#713f12',
               950: '#422006'
            },
            secondary: {
               DEFAULT: '#ee0000',
               50: '#fff0f0',
               100: '#ffdddd',
               200: '#ffc0c0',
               300: '#ff9494',
               400: '#ff5757',
               500: '#ff2323',
               600: '#ee0000',
               700: '#d70000',
               800: '#b10303',
               900: '#920a0a',
               950: '#500000',
            },
            accent: {
               DEFAULT: '#222222',
               50: '#FFFFFF',
               100: '#EEEEEE',
               200: '#BBBBBB',
               300: '#888888',
               400: '#555555',
               500: '#222222',
               600: '#1A1A1A',
               700: '#131313',
               800: '#0B0B0B',
               900: '#000000',
               950: '#000000'
            }
         },
         fontFamily: {
            sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
            mono: ['"JetBrains Mono"', ...fontFamily.mono]
         },
         spacing: {
            ...spacings
         },
         height: { page: pageHeight },
         minHeight: { page: pageHeight }
      }
   }
};

export default config;
