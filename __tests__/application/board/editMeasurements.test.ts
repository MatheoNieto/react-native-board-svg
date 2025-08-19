import {EditMeasurements} from '@application/useCases/board/editMeasurements';
import {BoardEntity} from '@domain/entities/board';
import {BoardRepository} from '@domain/repositories/board';
import {MOCK_FLASHING_DATA} from '../../mocks';

jest.mock('react-native-redash', () => ({
  round: (value: number, precision: number) => {
    const factor = 10 ** precision;
    return Math.round(value * factor) / factor;
  },
}));

describe('EditMeasurements', () => {
  let repoMock: jest.Mocked<BoardRepository>;
  let editMeasurements: EditMeasurements;

  beforeEach(() => {
    repoMock = {
      getDataDraftFlashing: jest.fn(),
      getLineSelectedIndex: jest.fn(),
      updateDraftFlashing: jest.fn(),
      getStep: jest.fn(),
      changeStep: jest.fn(),
      changeIndexLineSelected: jest.fn(),
    } as unknown as jest.Mocked<BoardRepository>;

    editMeasurements = new EditMeasurements(repoMock);

    jest
      .spyOn(BoardEntity, 'updateMeasurements')
      .mockImplementation((draft: any, index: number, newSize: number) => ({
        ...draft,
        dataLines: draft.dataLines.map((line: any, i: number) =>
          i === index ? {...line, size: newSize} : line,
        ),
      }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not execute if draft has no dataLines', () => {
    repoMock.getDataDraftFlashing.mockReturnValue(undefined);

    editMeasurements.execute(100);

    expect(repoMock.updateDraftFlashing).not.toHaveBeenCalled();
    expect(BoardEntity.updateMeasurements).not.toHaveBeenCalled();
  });

  it('should not execute if newSizeInput is NaN', () => {
    repoMock.getDataDraftFlashing.mockReturnValue(MOCK_FLASHING_DATA);
    repoMock.getLineSelectedIndex.mockReturnValue(0);

    editMeasurements.execute(NaN);

    expect(repoMock.updateDraftFlashing).not.toHaveBeenCalled();
    expect(BoardEntity.updateMeasurements).not.toHaveBeenCalled();
  });

  it('should update draft with new size and navigate to next line', () => {
    const draft = {dataLines: [{size: 50}, {size: 60}]};
    repoMock.getDataDraftFlashing.mockReturnValue(MOCK_FLASHING_DATA);
    repoMock.getLineSelectedIndex.mockReturnValue(0);
    repoMock.getStep.mockReturnValue(1);

    editMeasurements.execute(120, true);

    expect(BoardEntity.updateMeasurements).toHaveBeenCalledWith(draft, 0, 120);
    expect(repoMock.updateDraftFlashing).toHaveBeenCalled();
    expect(repoMock.changeIndexLineSelected).toHaveBeenCalledWith(1);
  });

  it('should go to previous line if goNext is false', () => {
    const draft = {dataLines: [{distance: 50}, {distance: 60}]};
    repoMock.getDataDraftFlashing.mockReturnValue(MOCK_FLASHING_DATA);
    repoMock.getLineSelectedIndex.mockReturnValue(1);
    repoMock.getStep.mockReturnValue(1);

    editMeasurements.execute(80, false);

    expect(repoMock.changeIndexLineSelected).toHaveBeenCalledWith(0);
  });

  it('should change step if at last line and goNext is true', () => {
    const draft = {dataLines: [{size: 50}, {size: 60}]};
    repoMock.getDataDraftFlashing.mockReturnValue(MOCK_FLASHING_DATA);
    repoMock.getLineSelectedIndex.mockReturnValue(1);
    repoMock.getStep.mockReturnValue(2);

    editMeasurements.execute(90, true);

    expect(repoMock.changeStep).toHaveBeenCalledWith(3);
    expect(repoMock.changeIndexLineSelected).not.toHaveBeenCalled();
  });
});
