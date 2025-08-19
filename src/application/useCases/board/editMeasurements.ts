import {BoardEntity} from '@domain/entities/board';
import {BoardRepository} from '@domain/repositories/board';

export class EditMeasurements {
  constructor(private readonly repo: BoardRepository) {}

  execute(newSizeInput: number, goNext: boolean = true): void {
    const draft = this.repo.getDataDraftFlashing();
    if (!draft?.dataLines) return;

    const currentIndex = this.repo.getLineSelectedIndex();
    if (isNaN(newSizeInput)) return;

    const updatedDraft = BoardEntity.updateMeasurements(
      draft,
      currentIndex,
      newSizeInput,
    );

    this.repo.updateDraftFlashing(updatedDraft);
    this.navigateLine(goNext);
  }

  private navigateLine(goNext: boolean = true): void {
    const draft = this.repo.getDataDraftFlashing();
    if (!draft?.dataLines) return;

    const maxIndex = draft.dataLines.length - 1;
    const currentIndex = this.repo.getLineSelectedIndex();
    const currentStep = this.repo.getStep();

    if (currentIndex === maxIndex && goNext) {
      this.repo.changeStep(currentStep + 1);
      return;
    }

    const nextIndex = goNext
      ? Math.min(currentIndex + 1, maxIndex)
      : Math.max(currentIndex - 1, 0);

    this.repo.changeIndexLineSelected(nextIndex);
  }
}
