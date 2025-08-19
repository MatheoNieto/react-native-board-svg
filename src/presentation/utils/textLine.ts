import {LINE_TYPE, POINT_TYPE} from '@domain/entities/board';
import {round} from 'react-native-redash';

export const setUpPendingForTheLabel = (
  pendingPoint: number | undefined | null = 0,
) => {
  const isNull = pendingPoint === null;

  if (pendingPoint === Infinity || pendingPoint === -Infinity || isNull) {
    return 270;
  }

  return pendingPoint === 0 ? 0 : pendingPoint - 60;
};

export const calculatePointHalf = (points: LINE_TYPE['points']): POINT_TYPE => {
  const x1 = points[0][0];
  const x2 = points[1][0];

  const y1 = points[0][1];
  const y2 = points[1][1];

  const xPoint = (x1 + x2) / 2;
  const yPoint = (y1 + y2) / 2;
  return [round(xPoint, 0), round(yPoint, 0)];
};

export const gettingCoordinatesForLabel = (
  coordinates: POINT_TYPE,
  pending: number,
  valueLabel: number,
  isRightBlueLine = true,
) => {
  const defaultValueForSidesXLeft = 15;
  const defaultValueForSidesYDown = 12;
  const addValueWhenIsNegativeY = 12;

  let positionTextX = coordinates[0] + defaultValueForSidesXLeft;
  let positionTextY = coordinates[1];

  if (pending === 0) {
    positionTextY = positionTextY - defaultValueForSidesYDown;
    positionTextX = coordinates[0];
  }

  if (pending === 270 && valueLabel < 100) {
    positionTextY = coordinates[1] + 12;
  }

  if (pending < 0) {
    positionTextY = !isRightBlueLine
      ? positionTextY + addValueWhenIsNegativeY
      : positionTextY;
  }

  return {
    positionText: [positionTextX, positionTextY],
    positionRect: [coordinates[0], coordinates[1]],
  };
};
