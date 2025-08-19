import {FLASHINGS_DATA} from '@domain/entities/flashing';

export interface FlashingRepository {
  addDraftFlashing(data: FLASHINGS_DATA): void;
  updateDraftFlashing(data: Partial<FLASHINGS_DATA>): void;
}
