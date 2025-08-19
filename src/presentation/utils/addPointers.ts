import {configBoard} from './config';
import {ScaleXBar, ScaleYBar} from './scaleBar';

export const findCoordsNearest = (pointCoord: [number, number]) => {
  const arrayGrid = Array.from({length: configBoard.sizeGrid}, (_, i) =>
    i.toString(),
  );
  const scaleXBar = ScaleXBar({
    domainData: arrayGrid,
    sizeScreen: configBoard.widthBoard,
  });

  const scaleYBar = ScaleYBar({
    domainData: arrayGrid,
    sizeScreen: configBoard.heightBoard,
  });

  const filterXCoords = arrayGrid.map(point =>
    parseInt(scaleXBar(point) as unknown as string),
  );
  const filterYCoords = arrayGrid.map(point =>
    parseInt(scaleYBar(point) as unknown as string),
  );
  return {
    x: findClosestNumber(filterXCoords, pointCoord[0]),
    y: findClosestNumber(filterYCoords, pointCoord[1]),
  };
};

const findClosestNumber = (dataNumber: number[], valueNumber: number) => {
  let closest = dataNumber[0];
  let minDifference = Math.abs(valueNumber - dataNumber[0]);

  for (let i = 1; i < dataNumber.length; i++) {
    const difference = Math.abs(valueNumber - dataNumber[i]);
    if (difference < minDifference) {
      minDifference = difference;
      closest = dataNumber[i];
    }
  }

  return closest;
};
