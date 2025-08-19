import {ThemeProvider} from '@shopify/restyle';
import lightTheme from './light';
import darkTheme from './dark';
import React from 'react';
import {isDark} from '@shared/utils/colorScheme';

type Props = {
  children: React.ReactElement;
};
const ProviderTheme: React.FC<Props> = ({children}) => {
  const theme = isDark() ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ProviderTheme;
