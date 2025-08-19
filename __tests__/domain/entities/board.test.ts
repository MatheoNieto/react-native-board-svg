import {BoardEntity, LINE_TYPE, POINT_TYPE} from '@domain/entities/board';

jest.mock('react-native-redash', () => ({
  round: jest.fn((value, precision) => {
    const factor = Math.pow(10, precision);
    return Math.round(value * factor) / factor;
  }),
}));

describe('BoardEntity', () => {
  const pointA: POINT_TYPE = [0, 0];
  const pointB: POINT_TYPE = [3, 4];

  describe('createPoint', () => {
    it('should create a FLASHINGS_DATA object with the given point', () => {
      const result = BoardEntity.createPoint(pointA);

      expect(result.dataLines).toHaveLength(1);
      expect(result.dataLines[0].points[0]).toEqual(pointA);
      expect(result.dataLines[0].isLine).toBe(false);
    });
  });

  describe('createLineFromPoint', () => {
    it('should create a LINE_TYPE object with distance and pending', () => {
      const result = BoardEntity.createLineFromPoint(pointA, pointB);

      expect(result.isLine).toBe(true);
      expect(result.points).toEqual([pointA, pointB]);
      expect(result.distance).toBe(5);
      expect(result.pending).toBe((4 - 0) / (3 - 0));
    });
  });

  describe('validateLineComplete', () => {
    it('should return false if no lines', () => {
      expect(BoardEntity.validateLineComplete([])).toBe(false);
    });

    it('should return true if last line has 2 points', () => {
      const lines: LINE_TYPE[] = [
        {points: [pointA, pointB], pending: 0, distance: 0, isLine: true},
      ];
      expect(BoardEntity.validateLineComplete(lines)).toBe(true);
    });

    it('should return false if last line has 1 point', () => {
      const lines: LINE_TYPE[] = [
        {points: [pointA], pending: 0, distance: 0, isLine: false},
      ];
      expect(BoardEntity.validateLineComplete(lines)).toBe(false);
    });
  });

  describe('createDataLines', () => {
    it('should append a new line to flashingDataDraft', () => {
      const draft = BoardEntity.createPoint(pointA);
      const line = BoardEntity.createLineFromPoint(pointA, pointB);

      const result = BoardEntity.createDataLines(draft, line);

      expect(result.dataLines).toHaveLength(2);
      expect(result.dataLines[1]).toEqual(line);
    });
  });

  describe('updateMeasurements', () => {
    it('should update distance of a selected line', () => {
      const draft = BoardEntity.createPoint(pointA);
      const line = BoardEntity.createLineFromPoint(pointA, pointB);
      const draftWithLine = BoardEntity.createDataLines(draft, line);

      const result = BoardEntity.updateMeasurements(draftWithLine, 1, 10);

      expect(result.dataLines[1].distance).toBe(10);
    });
  });

  describe('getLastPoint', () => {
    it('should return last point from last line', () => {
      const line = BoardEntity.createLineFromPoint(pointA, pointB);
      expect(BoardEntity.getLastPoint([line])).toEqual(pointB);
    });
  });

  describe('undoPoint', () => {
    it('should remove the last point if more than 1 line exists', () => {
      const draft = BoardEntity.createPoint(pointA);
      const line = BoardEntity.createLineFromPoint(pointA, pointB);
      const draftWithLine = BoardEntity.createDataLines(draft, line);

      const result = BoardEntity.undoPoint(draftWithLine);

      expect(result.dataLines).toHaveLength(1);
    });

    it('should return same draft if only one line exists', () => {
      const draft = BoardEntity.createPoint(pointA);
      const result = BoardEntity.undoPoint(draft);

      expect(result).toEqual({dataLines: []});
    });
  });

  describe('validAddNewPoint', () => {
    it('should return line if point already exists as first point', () => {
      const draft = BoardEntity.createPoint(pointA);
      const found = BoardEntity.validAddNewPoint(draft, pointA);

      expect(found).toBeDefined();
      expect(found?.points[0]).toEqual(pointA);
    });

    it('should return undefined if point does not exist', () => {
      const draft = BoardEntity.createPoint(pointA);
      const found = BoardEntity.validAddNewPoint(draft, pointB);

      expect(found).toBeUndefined();
    });
  });
});
