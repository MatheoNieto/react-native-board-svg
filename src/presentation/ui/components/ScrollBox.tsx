import React from 'react';
import {ScrollView, ScrollViewProps, StyleProp, ViewStyle} from 'react-native';
import {
  BoxProps as ShopifyRestyleBoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from '@shopify/restyle';
import {Theme, useAppRestyle} from '../theme';
import {forwardRef} from '@presentation/utils';
import useAsProp from '../hooks/useAsProp';

type RestyleBoxProps = ShopifyRestyleBoxProps<Theme> & {
  style?: StyleProp<ViewStyle>;
};

type EdgeType = 'top' | 'bottom' | 'left' | 'right';

type Props = ScrollViewProps &
  RestyleBoxProps & {
    _light?: RestyleBoxProps;
    enableOnAndroid?: boolean;
    edges?: EdgeType[];
  };
const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

const ScrollBox = forwardRef<Props, typeof ScrollView>(
  ({as, _light, ...rest}, ref) => {
    const ScrollBoxComponent = useAsProp(ScrollView, as);
    const props = useAppRestyle(restyleFunctions, {...rest, ..._light});

    return <ScrollBoxComponent ref={ref} {...props} />;
  },
);

export type ScrollBoxProps = React.ComponentProps<typeof ScrollBox>;
export default ScrollBox;
