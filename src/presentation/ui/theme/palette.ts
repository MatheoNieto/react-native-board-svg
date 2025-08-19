// colorTokens.ts
const palette = {
  base: {
    0: '#FFFFFF',
    25: '#F8F8FF',
    50: '#E6E6F5',
    100: '#CACBDE',
    200: '#9596B3',
    300: '#7B7C97',
    400: '#5F6076',
    500: '#46475A',
    700: '#252631',
    800: '#1B1C24',
    900: '#111217',
  },

  primary: {
    100: '#BFCCFF',
    300: '#7B8DDE',
    400: '#5B73D7',
    500: '#3356D7',
    700: '#2A46B9',
    900: '#1C2A9A',
  },

  success: {
    100: '#D2E7CE',
    600: '#57A551',
    700: '#147911',
  },

  error: {
    200: '#F0B0A1',
    400: '#EE3F22',
    500: '#CC1E00',
  },

  state: {
    processing: '#F4CC92',
    scheduled: '#A9DFE8',
  },

  overlay: {
    bodyDropLight: 'rgba(0, 0, 0, 0.5)',
    bodyDropDark: 'rgba(0, 0, 0, 0.5)',
    bodyOverlay: 'rgba(17, 18, 23, 0.7)',
    navDropLight: 'rgba(17, 18, 23, 0.15)',
    navDropDark: 'rgba(0, 0, 0, 0.25)',
  },

  legacy: {
    black: '#000',
    blackAlpha500: 'rgba(0,0,0,0.5)',
    blackAlpha250: 'rgba(0,0,0,0.25)',
    charlotte: '#A9DFE8',
    lavender: '#F0B0A1',
    martinique: '#2F3350',
    orange: '#EB6E26',
    peach: '#FC725B',
    peachOrange: '#F4CC92',
    polar: '#F2F8FC',
    transparent: 'rgba(255,255,255,0)',
    white: '#fff',
    textGray: '#8F94AE',
    primaryBlue: '#0E3A90',
    lightGray: '#8F94AE',
    lightGray2: '#D9D9D9',
    lightBlue: '#0E3A901A',
    grayIcon: '#828489',
    pointer: '#8F94AE',
    borderPointer: '#000000',
  },
} as const;

export default palette;
