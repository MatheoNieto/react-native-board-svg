import {BoardRepository} from '@domain/repositories/board';
import {AddPointToBoard} from './addPoint';
import {GetStepBoard} from './getStepBoard';
import {ChangeStepBoard} from './changeStepBoard';
import {GetDataDraftFlashing} from './getDataDraftFlashing';
import {UndoPointBoard} from './undoPoints';
import {ClearBoard} from './clearBoard';
import {EditMeasurements} from './editMeasurements';
import {GetLineSelected} from './getLineSelected';

export const createBoardUC = (repo: BoardRepository) => ({
  addPoint: new AddPointToBoard(repo),
  getStep: new GetStepBoard(repo),
  changeStep: new ChangeStepBoard(repo),
  getFlashingDataDraft: new GetDataDraftFlashing(repo),
  undoPoints: new UndoPointBoard(repo),
  clearBoard: new ClearBoard(repo),
  editMeasurement: new EditMeasurements(repo),
  getLineSelected: new GetLineSelected(repo),
});
