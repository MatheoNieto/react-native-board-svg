import {BoardState} from './types';

export const getDraftFlashing = (state: BoardState) => state.flashingDraft;
export const getStepOfBoard = (state: BoardState) => state.stepIndex;
export const getIndexLineSelected = (state: BoardState) =>
  state.indexLineSelected;

export const getSelectedLine = (state: BoardState) => {
  if (!state.flashingDraft?.dataLines) return undefined;
  return state.flashingDraft.dataLines[state.indexLineSelected];
};
