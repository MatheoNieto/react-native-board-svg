import {createBoardUC} from '@application/useCases/board';
import {POINT_TYPE} from '@domain/entities/board';
import {useBoardRepository} from '@infrastructure/repositories/boardContextRepository';

export const useBoard = () => {
  const repo = useBoardRepository();
  const boardUC = createBoardUC(repo);

  const flashingDataDraft = boardUC.getFlashingDataDraft.execute();
  const stepBoard = boardUC.getStep.execute();
  const lineSelected = boardUC.getLineSelected.execute();

  const handleAddPoint = (point: POINT_TYPE) => boardUC.addPoint.execute(point);
  const handleUndoPoint = () => boardUC.undoPoints.execute();
  const handleClearPoint = () => boardUC.clearBoard.execute();

  const handleEditMeasurement = (newSizeLine: number, goNext: boolean = true) =>
    boardUC.editMeasurement.execute(newSizeLine, goNext);

  const handleChangeStepBoard = (newStep: number) =>
    boardUC.changeStep.execute(newStep);

  return {
    flashingDataDraft,
    stepBoard,
    lineSelected,
    addPoint: handleAddPoint,
    changeStep: handleChangeStepBoard,
    undoPoint: handleUndoPoint,
    clearBoard: handleClearPoint,
    editMeasurement: handleEditMeasurement,
  };
};
