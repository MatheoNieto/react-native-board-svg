import {MODES_BOARD, STEPS_BOARD} from '@domain/entities/board';

export const getIndexOfStepForName = (nameStep: MODES_BOARD) => {
  return STEPS_BOARD.findIndex(stepName => stepName === nameStep);
};
