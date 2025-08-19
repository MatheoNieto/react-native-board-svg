import {As, PropsOf, RightJoinProps} from '@presentation/ui/types';
import React from 'react';

export const forwardRef = <Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >,
  //@ts-ignore
) => React.forwardRef(component);

export * from './addPointers';
export * from './drawLines';
