import {FLASHINGS_DATA} from '@domain/entities/flashing';
import {BoardAction} from './actions';

export type BoardState = {
  stepIndex: number;
  indexLineSelected: number;
  flashingDraft: FLASHINGS_DATA | undefined;
};

export type BoardContextType = {
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
};
