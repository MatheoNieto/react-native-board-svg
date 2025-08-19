import {createTheme} from '@shopify/restyle';
import palette from './palette';
import {
  buttonVariants,
  cardVariants,
  dividerVariants,
  textVariants,
} from './variants';

const theme = createTheme({
  colors: {
    base0: palette.base[0],
    base25: palette.base[25],
    base50: palette.base[50],
    base100: palette.base[100],
    base200: palette.base[200],
    base300: palette.base[300],
    base400: palette.base[400],
    base500: palette.base[500],
    base700: palette.base[700],
    base800: palette.base[800],
    base900: palette.base[900],
    success100: palette.success[100],
    success700: palette.success[700],
    bodyDrop: palette.legacy.blackAlpha500,
    navDrop: palette.legacy.blackAlpha250,
    black: palette.base[900],
    white: palette.base[0],
    primaryBlue: palette.legacy.primaryBlue,
    transparent: palette.base[0],
    primary100: palette.primary[100],
    primary900: palette.primary[900],
    bodyOverlay: palette.overlay.bodyOverlay,
    error500: palette.error[500],
    grayIcon: palette.legacy.grayIcon,
    textGray: palette.legacy.textGray,
    lightGray2: palette.legacy.lightGray2,
    lightGray: palette.legacy.lightGray,
  },
  spacing: {
    //@ts-ignore allow unset props
    unset: null as number,
    '1px': 1,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
    '5xl': 128,
    '6xl': 256,
  },
  borderRadii: {
    //@ts-ignore allow unset props
    unset: null as number,
    '1px': 1,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
    '5xl': 128,
    '6xl': 256,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  zIndices: {
    none: 0,
    dropdown: 10,
    modal: 20,
    toast: 30,
  },
  textVariants,
  cardVariants,
  dividerVariants,
  buttonVariants,
});

export type ThemeCore = typeof theme;

export default theme;
