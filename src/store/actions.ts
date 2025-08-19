import {FLASHINGS_DATA} from '@domain/entities/flashing';

export enum ACTIONS {
  CHANGE_SIDE_TAPERED = 'CHANGE_SIDE_TAPERED',
  CHANGE_STEP = 'CHANGE_STEP',
  CHANGE_INDEX_LINE_SELECTED = 'CHANGE_INDEX_LINE_SELECTED',
  ADD_DRAFT_FLASHING = 'ADD_DRAFT_FLASHING',
  UPDATE_DRAFT_FLASHING = 'UPDATE_DRAFT_FLASHING',
  CHANGE_START_LINE_TYPE = 'CHANGE_START_LINE_TYPE',
  CHANGE_END_LINE_TYPE = 'CHANGE_END_LINE_TYPE',
  CLEAR = 'CLEAR',
}

export type BoardAction =
  | {type: ACTIONS.CHANGE_SIDE_TAPERED; payload: boolean}
  | {type: ACTIONS.CHANGE_STEP; payload: number}
  | {type: ACTIONS.CHANGE_INDEX_LINE_SELECTED; payload: number}
  | {type: ACTIONS.ADD_DRAFT_FLASHING; payload: FLASHINGS_DATA}
  | {type: ACTIONS.UPDATE_DRAFT_FLASHING; payload: Partial<FLASHINGS_DATA>}
  | {type: ACTIONS.CLEAR};

export const changeSideTapered = (sideTaperedFront: boolean) => ({
  type: ACTIONS.CHANGE_SIDE_TAPERED,
  payload: sideTaperedFront,
});

export const changeStep = (step: number) => ({
  type: ACTIONS.CHANGE_STEP,
  payload: step,
});

export const changeLineSelected = (indexLine: number) => ({
  type: ACTIONS.CHANGE_INDEX_LINE_SELECTED,
  payload: indexLine,
});

export const addDraftFlashing = (dataFlashing: FLASHINGS_DATA) => ({
  type: ACTIONS.ADD_DRAFT_FLASHING,
  payload: dataFlashing,
});

export const updateDraftFlashing = (dataFlashing: Partial<FLASHINGS_DATA>) => ({
  type: ACTIONS.UPDATE_DRAFT_FLASHING,
  payload: dataFlashing,
});

export const clear = () => ({
  type: ACTIONS.CLEAR,
});
