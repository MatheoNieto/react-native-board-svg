import {LINE_TYPE} from '@domain/entities/board';
import {FLASHINGS_DATA} from '@domain/entities/flashing';

export interface BoardRepository {
  getDataDraftFlashing(): FLASHINGS_DATA | undefined;
  addDraftFlashing(data: FLASHINGS_DATA): void;
  updateDraftFlashing(data: Partial<FLASHINGS_DATA>): void;
  clearDataDraftFlashing(): void;
  changeStep(stepIndex: number): void;
  changeIndexLineSelected(newIndexLine: number): void;
  getStep(): number;
  getLineSelected(): LINE_TYPE | undefined;
  getLineSelectedIndex(): number;
}
