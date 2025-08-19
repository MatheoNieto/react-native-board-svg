import * as React from 'react';
import {View} from 'react-native';
import {
  BoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {Theme, useAppRestyle} from '../theme';
import useAsProp from '../hooks/useAsProp';
import {forwardRef} from '@presentation/utils';

type RestyleCardProps = VariantProps<Theme, 'cardVariants'> & BoxProps<Theme>;

export type CardProps = React.PropsWithChildren<
  RestyleCardProps & {
    duration?: number;
    useNativeDriver?: boolean;
    onPress?: (() => Promise<any> | void) | Function | null;
  }
>;

const variant = createVariant({
  themeKey: 'cardVariants',
});

const restyleFunctions = composeRestyleFunctions([
  //@ts-ignore temporaly fix ignore bad type issue
  ...boxRestyleFunctions,
  //@ts-ignore temporaly fix ignore bad type issue
  variant,
]);

const Card = forwardRef<CardProps, typeof View>(({as, ...rest}, ref) => {
  const CardComponent = useAsProp(View, as);
  const passedProps = useAppRestyle(restyleFunctions, {
    variant: '',
    ...rest,
  });
  // @ts-ignore
  return <CardComponent ref={ref} {...passedProps} />;
});

export default Card;
