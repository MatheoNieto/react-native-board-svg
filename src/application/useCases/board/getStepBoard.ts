import {BoardRepository} from '@domain/repositories/board';

export class GetStepBoard {
  constructor(private repo: BoardRepository) {}
  execute() {
    return this.repo.getStep();
  }
}
