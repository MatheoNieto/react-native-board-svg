import * as React from 'react';
import {
  Animated,
  ColorValue,
  Easing,
  GestureResponderEvent,
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {
  BoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from '@shopify/restyle';
import {forwardRef} from '@presentation/utils';
import {Theme, useAppRestyle} from '../theme';
import AnimatedPressable from './AnimatedPressable';
import useAsProp from '../hooks/useAsProp';

type Props = BoxProps<Theme> & {
  children?: React.ReactElement | React.ReactNode | PressableProps['children'];
  _dark?: BoxProps<Theme>;
  _light?: BoxProps<Theme>;
  activeOpacity?: number;
  isDisabled?: boolean;
  style?: PressableProps['style'] | StyleProp<ViewStyle>;
  // only for Android
  rippleColor?: ColorValue;
  radius?: number;
  borderless?: boolean;
  foreground?: boolean;
};

const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

const BaseTouchable = forwardRef<Props, typeof Pressable>(
  (
    {
      children,
      radius,
      isDisabled,
      rippleColor,
      borderless,
      activeOpacity,
      foreground,
      as,
      _dark,
      _light,
      ...rest
    },
    ref,
  ) => {
    const TouchableComponent = useAsProp(AnimatedPressable, as);
    const props = useAppRestyle(restyleFunctions, {
      ...rest,
      ..._light,
    });
    const childOpacity = props.style?.[0]?.opacity || 1;
    const anim = React.useRef(new Animated.Value(childOpacity)).current;
    const isMounted = React.useRef(false);
    /**
     * Animate the touchable to a new opacity.
     */
    const _setOpacityTo = (toValue: number, duration: number) => {
      if (Platform.OS === 'android') {
        return;
      }
      Animated.timing(anim, {
        toValue,
        duration,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }).start();
    };

    const _opacityActive = (duration: number) => {
      _setOpacityTo(activeOpacity ?? 0.4, duration);
    };

    const _opacityInactive = (duration: number) => {
      _setOpacityTo(childOpacity, duration);
    };

    const onPressIn = (event: GestureResponderEvent) => {
      _opacityActive(
        //@ts-ignore ignore bad type
        event.dispatchConfig.registrationName === 'onResponderGrant' ? 0 : 150,
      );
      //@ts-ignore
      if (props.onPressIn != null) {
        //@ts-ignore
        props.onPressIn(event);
      }
    };

    const onPressOut = (event: GestureResponderEvent) => {
      _opacityInactive(170);
      // @ts-ignore
      if (props.onPressOut != null) {
        // @ts-ignore
        props.onPressOut(event);
      }
    };

    React.useEffect(() => {
      if (isMounted.current) {
        _opacityInactive(170);
      }
      isMounted.current = true;
    }, [isDisabled, childOpacity]);

    return (
      <TouchableComponent
        ref={ref}
        android_ripple={{
          color: rippleColor || 'rgba(0,0,0,0.1)',
          borderless,
          radius,
          foreground,
        }}
        {...props}
        style={StyleSheet.flatten([
          props.style,
          Platform.OS !== 'android' && {opacity: anim},
        ])}
        disabled={isDisabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        {children}
      </TouchableComponent>
    );
  },
);

export type BaseTouchableProps = React.ComponentProps<typeof BaseTouchable>;

export default BaseTouchable;
