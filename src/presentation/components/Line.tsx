import {BUILD_LINE} from '@presentation/models/drawLines';
import {buildPathLine} from '@presentation/utils';
import React from 'react';
import {G, Path as PathComponent} from 'react-native-svg';

type Props = BUILD_LINE;

const Line: React.FC<Props> = ({line, id}) => {
  return (
    <G key={`groupPath${id}`}>
      <PathComponent
        key={`normalLine${id}`}
        d={buildPathLine(line.points)}
        strokeWidth={1}
        stroke={'#000'}
      />
    </G>
  );
};
export default Line;
