import palette from './palette';
import Color from 'color';
import themeCore from './theme';

const darkTheme = {
  ...themeCore,
  dark: true,
  colors: {
    ...themeCore.colors,
    // TODO: cleanup theme colors
    backgroundPattern: palette.primary[700],
    backgrounds: palette.base[900],
    border: palette.base[50],
    buttonBorder: palette.base[100],
    buttonBorderDisabled: Color(palette.base[100]).alpha(0.7).rgb().string(),
    cards: palette.base[0],
    grey100: palette.base[100],
    grey200: palette.base[200],
    grey25: palette.base[25],
    grey300: palette.base[300],
    grey400: palette.base[400],
    grey50: palette.base[50],
    grey900: palette.base[900],
    iconPrimary: palette.base[50],
    modalBackground: palette.legacy.blackAlpha500,
    primary: palette.primary[500],
    secondary: palette.primary[900],
    shadow: palette.legacy.martinique,
    skeletonBackground: palette.base[100],
    skeletonHighlight: palette.legacy.polar,
    successMessage: palette.success[600],
    textPrimary: palette.base[0],
    textSecondary: palette.base[400],
    transparent: palette.legacy.transparent,
    // future figma colors
    bodyDrop: palette.overlay.bodyDropLight,
    divider: palette.base[50],
    errorAlert: palette.error[500],
    errorBackground: palette.error[200],
    iconBackground: palette.base[50],
    iconFill: palette.base[0],
    input: palette.base[0],
    inputBorder: palette.base[100],
    inputBorderFocused: palette.base[400],
    inputDisabled: palette.base[50],
    navDrop: palette.overlay.navDropLight,
    textPlaceholder: palette.base[400],
    //	included for compatibility
    disabled: Color(palette.primary[500]).alpha(0.4).rgb().string(),
  },
};

export type DarkTheme = typeof darkTheme;
export default darkTheme;
