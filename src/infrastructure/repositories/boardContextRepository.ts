import {useBoardContext} from '@store/hook/useContext';
import {
  getDraftFlashing,
  getStepOfBoard,
  getIndexLineSelected,
  getSelectedLine,
} from '@store/selectors';
import {ACTIONS} from '@store/actions';
import {BoardRepository} from '@domain/repositories/board';

export const useBoardRepository = (): BoardRepository => {
  const {dispatch, state} = useBoardContext();

  return {
    addDraftFlashing(data) {
      dispatch({type: ACTIONS.ADD_DRAFT_FLASHING, payload: data});
    },
    getDataDraftFlashing() {
      return getDraftFlashing(state);
    },
    updateDraftFlashing(data) {
      dispatch({type: ACTIONS.UPDATE_DRAFT_FLASHING, payload: data});
    },
    clearDataDraftFlashing() {
      dispatch({type: ACTIONS.CLEAR});
    },
    changeStep(stepIndex) {
      dispatch({type: ACTIONS.CHANGE_STEP, payload: stepIndex});
    },
    changeIndexLineSelected(newIndexLine) {
      dispatch({
        type: ACTIONS.CHANGE_INDEX_LINE_SELECTED,
        payload: newIndexLine,
      });
    },
    getStep() {
      return getStepOfBoard(state);
    },
    getLineSelectedIndex() {
      return getIndexLineSelected(state);
    },
    getLineSelected() {
      return getSelectedLine(state);
    },
  };
};
