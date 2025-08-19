import {BoardRepository} from '@domain/repositories/board';

export class GetDataDraftFlashing {
  constructor(private repo: BoardRepository) {}
  execute() {
    return this.repo.getDataDraftFlashing();
  }
}
