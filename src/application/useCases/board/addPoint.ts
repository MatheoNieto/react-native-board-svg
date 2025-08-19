import {BoardEntity, POINT_TYPE} from '@domain/entities/board';
import {BoardRepository} from '@domain/repositories/board';

export class AddPointToBoard {
  constructor(private repo: BoardRepository) {}

  execute(newPoint: POINT_TYPE) {
    const draftFlashing = this.repo.getDataDraftFlashing();

    if (!draftFlashing) {
      const dataFlashing = BoardEntity.createPoint(newPoint);
      this.repo.addDraftFlashing(dataFlashing);
      return;
    }

    const lineComplete = BoardEntity.validateLineComplete(
      draftFlashing.dataLines,
    );
    const lastPoint = BoardEntity.getLastPoint(draftFlashing.dataLines);
    const validAddNewPoint = BoardEntity.validAddNewPoint(
      draftFlashing,
      newPoint,
    );

    if (validAddNewPoint) return;

    const dataLine = BoardEntity.createLineFromPoint(lastPoint, newPoint);

    if (!lineComplete) {
      this.repo.updateDraftFlashing({dataLines: [dataLine]});
      return;
    }

    const dataLines = BoardEntity.createDataLines(draftFlashing, dataLine);

    this.repo.updateDraftFlashing(dataLines);
  }
}
