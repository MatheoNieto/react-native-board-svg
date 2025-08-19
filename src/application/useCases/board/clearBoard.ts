import {BoardRepository} from '@domain/repositories/board';

export class ClearBoard {
  constructor(private repo: BoardRepository) {}

  execute() {
    this.repo.clearDataDraftFlashing();
  }
}
