import {BoardEntity} from '@domain/entities/board';
import {BoardRepository} from '@domain/repositories/board';

export class UndoPointBoard {
  constructor(private repo: BoardRepository) {}

  execute() {
    const draftFlashing = this.repo.getDataDraftFlashing();

    if (!draftFlashing) {
      return;
    }

    const updateDataUndo = BoardEntity.undoPoint(draftFlashing);
    if (updateDataUndo.dataLines.length <= 1) {
      return this.repo.clearDataDraftFlashing();
    }
    this.repo.updateDraftFlashing(updateDataUndo);
  }
}
