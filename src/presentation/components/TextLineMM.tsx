import {POINT_TYPE} from '@domain/entities/board';
import React from 'react';
import TextSvg from './TextSvg';
import {useBoard} from '@presentation/hooks/useBoard';
import {
  calculatePointHalf,
  gettingCoordinatesForLabel,
  setUpPendingForTheLabel,
} from '@presentation/utils/textLine';

type Props = {
  coordinates: POINT_TYPE[];
  index: number;
};

const TextLineMM: React.FC<Props> = ({coordinates, index}) => {
  const {flashingDataDraft} = useBoard();

  const _getPending = React.useMemo(() => {
    const pend = flashingDataDraft?.dataLines[index]?.pending;
    return setUpPendingForTheLabel(pend);
  }, [flashingDataDraft, index]);

  const label = React.useMemo(() => {
    if (!flashingDataDraft) return '';

    return flashingDataDraft?.dataLines[index].distance?.toString();
  }, [flashingDataDraft, index]);

  const {positionRect, positionText} = React.useMemo(() => {
    const newPoints = calculatePointHalf(coordinates);

    return gettingCoordinatesForLabel(
      newPoints,
      _getPending,
      parseInt(label ? label : '10'),
    );
  }, [coordinates, _getPending, label]);

  return (
    <TextSvg
      id={Math.random()}
      positionTextX={positionText[0]}
      positionTextY={positionText[1]}
      positionTextXRect={positionRect[0]}
      positionTextYRect={positionRect[1]}
      textValue={label}
      pending={_getPending}
    />
  );
};

export default TextLineMM;
