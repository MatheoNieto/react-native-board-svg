import EditMeasurement from '@presentation/components/EditMeasurements';
import {useBoard} from '@presentation/hooks/useBoard';
import {useKeyboardVisibility} from '@presentation/hooks/useKeyboardVisibility';
import {Box} from '@presentation/ui/components';
import {getIndexOfStepForName} from '@shared/utils/board';
import React from 'react';

type Props = {
  setScrollEnabled: (value: boolean) => void;
  scrollToY: (newValue: number) => void;
};

const UpdateMeasurements: React.FC<Props> = ({setScrollEnabled, scrollToY}) => {
  const {stepBoard} = useBoard();
  const [heightMeasurement, setHeightMeasurement] = React.useState(200);

  useKeyboardVisibility({
    onKeyboardDidShow: (heightKeyboard: number = 357) => {
      setHeightMeasurement(heightKeyboard);
      setScrollEnabled(true);
    },
    onKeyboardDidHide: () => {
      setScrollEnabled(false);
      setHeightMeasurement(200);
      scrollToY(0);
    },
  });

  const _visible = React.useMemo(() => {
    return stepBoard === getIndexOfStepForName('measurements');
  }, [stepBoard]);

  if (!_visible) return null;

  return (
    <Box
      height={heightMeasurement}
      position="absolute"
      backgroundColor="white"
      width="100%"
      bottom={0}>
      <EditMeasurement />
    </Box>
  );
};

export default UpdateMeasurements;
