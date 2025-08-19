import {Appearance} from 'react-native';

export const isDark = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark';
};
