import {LINE_TYPE} from '@domain/entities/board';
import * as shape from 'd3-shape';
import {parse, serialize} from 'react-native-redash';

export const buildPathLine = (
  points: LINE_TYPE['points'],
  curseLine: shape.CurveFactory = shape.curveLinear,
) => {
  const generatorLine = shape
    .line()
    .x(data => data[0])
    .y(data => data[1])
    .curve(curseLine);
  return serialize(parse(generatorLine(points) as string));
};
