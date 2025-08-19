import {ACTIONS, BoardAction} from './actions';
import {BoardState} from './types';

export const INITIAL_STATE: BoardState = {
  stepIndex: 0,
  flashingDraft: undefined,
  indexLineSelected: 0,
};

export const boardReducer = (
  state: BoardState,
  action: BoardAction,
): BoardState => {
  switch (action.type) {
    case ACTIONS.ADD_DRAFT_FLASHING:
      return {
        ...state,
        flashingDraft: action.payload,
      };

    case ACTIONS.UPDATE_DRAFT_FLASHING:
      if (!state.flashingDraft) return state;

      return {
        ...state,
        flashingDraft: {
          ...state.flashingDraft,
          ...action.payload,
        },
      };

    case ACTIONS.CHANGE_STEP:
      return {
        ...state,
        stepIndex: action.payload,
      };

    case ACTIONS.CHANGE_INDEX_LINE_SELECTED:
      return {
        ...state,
        indexLineSelected: action.payload,
      };

    case ACTIONS.CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
};
