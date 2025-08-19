import React from 'react';
import {
  BoxProps,
  boxRestyleFunctions,
  color,
  composeRestyleFunctions,
  createRestyleFunction,
} from '@shopify/restyle';
import {Svg, SvgProps} from 'react-native-svg';
import {forwardRef} from '@presentation/utils';
import useAsProp from '../hooks/useAsProp';
import {Theme, useAppRestyle} from '../theme';

export type ColorThemeValue = keyof Theme['colors'];

type RestyleSvgBoxProps = Omit<SvgProps, 'color' | 'fill' | 'stroke'> &
  BoxProps<Theme> & {
    size?: number;
    color?: ColorThemeValue;
    fill?: ColorThemeValue;
    stroke?: ColorThemeValue;
    rx?: number;
    d?: string;
    cd?: number;
    cx?: number;
    cy?: number;
    r?: string;
    points?: string;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
  };

export type SvgBoxProps = RestyleSvgBoxProps;

const restyleFunctions = composeRestyleFunctions([
  ...boxRestyleFunctions,
  color,
  createRestyleFunction({
    property: 'fill',
    themeKey: 'colors',
  }),
  createRestyleFunction({
    property: 'stroke',
    themeKey: 'colors',
  }),
]);
const SvgBox = forwardRef<SvgBoxProps, Svg>(
  ({style, width, height, as, size, ...rest}, ref) => {
    const SvgComponent = useAsProp(Svg, as);
    const {
      style: [{fill, stroke, color: currentColor, ...svgStyle}],
      ...props
    } = useAppRestyle(restyleFunctions, {
      ...rest,
    });

    return (
      <SvgComponent
        ref={ref as any}
        style={[svgStyle, style]}
        {...Object.assign(
          {},
          fill && {fill},
          stroke && {stroke},
          currentColor && {color: currentColor},
        )}
        {...props}
        {...{width: size, height: size}}
        {...((width || height) && {width, height})}
      />
    );
  },
);

export default React.memo(SvgBox) as typeof SvgBox;
