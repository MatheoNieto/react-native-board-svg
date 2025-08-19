import {BoardRepository} from '@domain/repositories/board';

export class GetLineSelected {
  constructor(private repo: BoardRepository) {}
  execute() {
    return this.repo.getLineSelected();
  }
}
