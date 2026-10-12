// theme.js
// Chakra UI theme extension for Daisy Hills Home Care
// Drop this in e.g. src/theme.js and wrap your app with:
//   import { ChakraProvider } from '@chakra-ui/react';
//   import theme from './theme';
//   <ChakraProvider theme={theme}>...</ChakraProvider>

import { extendTheme } from '@chakra-ui/react';

// Add this to your public/index.html <head> (same as the original template):
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet"/>

const colors = {
  sage: {
    50: '#f0f5f1',
    100: '#dbe8de',
    light: '#a8c4af',
    500: '#7a9e87', // --sage
    dark: '#4e7060', // --sage-dark
  },
  cream: '#f8f4ee',
  warmWhite: '#fdfbf8',
  charcoal: '#2c2c2c',
  mid: '#5a5a5a',
  lightGray: '#9a9a9a',
  border: '#e4ddd4',
  gold: '#b89a6a',
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Cormorant Garamond', serif`,
    body: `'DM Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'warmWhite',
        color: 'charcoal',
        overflowX: 'hidden',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: `'DM Sans', sans-serif`,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontSize: '0.82rem',
        borderRadius: '2px',
      },
      variants: {
        solid: {
          bg: 'sage.dark',
          color: 'white',
          _hover: { bg: 'sage.500' },
        },
        outline: {
          color: 'sage.dark',
          borderColor: 'sage.dark',
          _hover: { bg: 'sage.dark', color: 'white' },
        },
        light: {
          bg: 'white',
          color: 'charcoal',
          _hover: { bg: 'cream' },
        },
      },
    },
  },
});

export default theme;
