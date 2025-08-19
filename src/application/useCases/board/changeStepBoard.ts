import {BoardRepository} from '@domain/repositories/board';

export class ChangeStepBoard {
  constructor(private repo: BoardRepository) {}

  execute(newStep: number) {
    const draftFlashing = this.repo.getDataDraftFlashing();

    if (!draftFlashing || draftFlashing.dataLines.length === 0) return;
    return this.repo.changeStep(newStep);
  }
}
