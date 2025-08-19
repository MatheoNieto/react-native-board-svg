import React from 'react';
import {Circle} from 'react-native-svg';
import type {CircleProps} from 'react-native-svg';

type Props = CircleProps;

const Pointer: React.FC<Props> = props => {
  return <Circle {...props} />;
};

export default Pointer;
