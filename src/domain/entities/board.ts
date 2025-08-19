import {round} from 'react-native-redash';
import {FLASHINGS_DATA} from './flashing';

export type POINT_TYPE = [number, number];

export type LINE_TYPE = {
  points: POINT_TYPE[];
  pending: number;
  distance: number;
  isLine: boolean;
};

export type MODES_BOARD = 'draw' | 'measurements' | 'finish';

export const STEPS_BOARD: MODES_BOARD[] = ['draw', 'measurements', 'finish'];

export class BoardEntity {
  private static _calculateExponential(
    value: number,
    toExponential: number = 2,
  ) {
    return Math.pow(value, toExponential);
  }

  private static _calculatePending(point1: POINT_TYPE, point2: POINT_TYPE) {
    return (point2[1] - point1[1]) / (point2[0] - point1[0]);
  }

  private static _calculateSizeLine(
    point1: [number, number],
    point2: [number, number] | undefined,
  ) {
    const pointSecond = !point2 ? point1 : point2;

    const deltaX = pointSecond[0] - point1[0];
    const deltaY = pointSecond[1] - point1[1];

    const sumDeltas =
      this._calculateExponential(deltaX) + this._calculateExponential(deltaY);

    const result = Math.sqrt(sumDeltas);
    return round(result, 0);
  }

  static validateLineComplete(lines: LINE_TYPE[]): boolean {
    if (lines.length === 0) return false;
    return lines[lines.length - 1].points.length === 2;
  }

  static createPoint(point: POINT_TYPE): FLASHINGS_DATA {
    return {
      dataLines: [
        {
          points: [point],
          pending: 0,
          distance: 0,
          isLine: false,
        },
      ],
    };
  }

  static createLineFromPoint(
    lastPoint: POINT_TYPE,
    newPoint: POINT_TYPE,
  ): LINE_TYPE {
    return {
      points: [lastPoint, newPoint],
      pending: this._calculatePending(lastPoint, newPoint),
      distance: this._calculateSizeLine(lastPoint, newPoint),
      isLine: true,
    };
  }

  static createDataLines(
    flashingDataDraft: FLASHINGS_DATA,
    dataLine: LINE_TYPE,
  ): FLASHINGS_DATA {
    return {
      ...flashingDataDraft,
      dataLines: [...flashingDataDraft.dataLines, dataLine],
    };
  }

  static updateMeasurements(
    flashingDataDraft: FLASHINGS_DATA,
    indexLineSelected: number,
    newValue: number,
  ): FLASHINGS_DATA {
    const newValuesDataLines = flashingDataDraft.dataLines.map(
      (dataLine, index) => {
        if (index === indexLineSelected) {
          return {
            ...dataLine,
            distance: newValue,
          };
        }
        return dataLine;
      },
    );

    return {
      ...flashingDataDraft,
      dataLines: newValuesDataLines,
    };
  }

  static getLastPoint(lines: LINE_TYPE[]) {
    const lastLine = lines[lines.length - 1];
    return lastLine.points[lastLine.points.length - 1];
  }

  static undoPoint(flashingDataDraft: FLASHINGS_DATA) {
    const points = flashingDataDraft.dataLines.slice(0, -1);

    return {
      ...flashingDataDraft,
      dataLines: points,
    };
  }

  static validAddNewPoint(
    flashingDataDraft: FLASHINGS_DATA,
    newPoint: POINT_TYPE,
  ) {
    return flashingDataDraft.dataLines.find(line => {
      return JSON.stringify(line.points[0]) === JSON.stringify(newPoint);
    });
  }
}
