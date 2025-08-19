import theme from './theme';
import {AllProps, RNStyle, useRestyle} from '@shopify/restyle';

export type Theme = typeof theme;

export const useAppRestyle = <TProps, ExtraStyle extends Record<string, any>>(
  restyleFunctions: Parameters<typeof useRestyle>[0],
  props: TProps & any,
) =>
  useRestyle(restyleFunctions as any, props) as Omit<
    TProps,
    keyof AllProps<Theme> | 'style' | 'variant'
  > & {
    style: Array<RNStyle & ExtraStyle>;
  };
