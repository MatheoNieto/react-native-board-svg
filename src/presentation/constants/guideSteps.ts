import {GUIDE_STEP} from '@presentation/models';
import {getIndexOfStepForName} from '@shared/utils/board';

export const guideSteps: GUIDE_STEP[] = [
  {
    step: getIndexOfStepForName('draw'),
    title: 'Draw Points',
    description: '',
  },
  {
    step: getIndexOfStepForName('measurements'),
    title: 'Change Measurements',
    description: '',
  },
];
