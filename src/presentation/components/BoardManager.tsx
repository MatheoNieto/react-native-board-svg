import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SvgBoard from './SvgBoard';
import {findCoordsNearest} from '@presentation/utils';
import {useBoard} from '@presentation/hooks/useBoard';
import {getIndexOfStepForName} from '@shared/utils/board';

const BoardManager = () => {
  const {stepBoard, addPoint} = useBoard();

  const isDrawing = React.useMemo(() => {
    return stepBoard === getIndexOfStepForName('draw');
  }, [stepBoard]);

  const handlePointer = (event: GestureResponderEvent) => {
    if (!isDrawing) return;
    const newPosition = findCoordsNearest([
      event.nativeEvent.locationX,
      event.nativeEvent.locationY,
    ]);

    addPoint([newPosition.x, newPosition.y]);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePointer}>
      <GestureHandlerRootView>
        <SvgBoard />
      </GestureHandlerRootView>
    </TouchableOpacity>
  );
};

export default BoardManager;
