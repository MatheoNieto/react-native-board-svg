import {FLASHINGS_DATA} from '@domain/entities/flashing';
import {Board, GuideStepperBoard, MenuEditor} from '@presentation/components';
import React from 'react';

type Props = {
  onSave: (data: FLASHINGS_DATA) => void;
};

const BoardContainer: React.FC<Props> = ({onSave}) => {
  return (
    <>
      <GuideStepperBoard onFinish={() => null} />
      <Board onSave={onSave} />
      <MenuEditor onSave={onSave} />
    </>
  );
};

export default BoardContainer;
