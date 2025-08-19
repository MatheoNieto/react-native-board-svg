import {Box} from '@presentation/ui/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import IconMenuEditor from './IconMenuEditor';
import {
  BackIcon,
  ClearIcon,
  CompleteIcon,
  NextIcon,
  UndoIcon,
} from '@presentation/ui/icons';
import {useBoard} from '@presentation/hooks/useBoard';
import {getIndexOfStepForName} from '@shared/utils/board';
import {FLASHINGS_DATA} from '@domain/entities/flashing';

type Props = {
  onSave?: (data: FLASHINGS_DATA) => void;
};

const MenuEditor: React.FC<Props> = ({onSave}) => {
  const {stepBoard, changeStep, undoPoint, clearBoard, flashingDataDraft} =
    useBoard();

  const _isEmptyBoard = React.useMemo(() => {
    return !flashingDataDraft || flashingDataDraft.dataLines.length === 0;
  }, [flashingDataDraft]);

  const _disabledUndo = React.useMemo(() => {
    return stepBoard !== getIndexOfStepForName('draw');
  }, [stepBoard]);

  const _isFinishStep = React.useMemo(() => {
    return stepBoard === getIndexOfStepForName('finish');
  }, [stepBoard]);

  const _onBack = () => {
    const newStep = stepBoard - 1;
    if (newStep < 0) return;
    changeStep(newStep);
  };

  const _onNext = () => {
    if (_isFinishStep && flashingDataDraft) {
      onSave?.(flashingDataDraft);
      return;
    }

    const newStep = stepBoard + 1;
    if (newStep < 0) return;
    changeStep(newStep);
  };

  return (
    <Box
      py={{
        phone: 's',
        tablet: 'm',
      }}
      mb="xl"
      px={{tablet: 's', phone: 'unset'}}
      backgroundColor="white"
      position="absolute"
      width="100%"
      bottom="-3%"
      style={styles.shadow}>
      <Box px="m" style={styles.content}>
        <IconMenuEditor
          disabled={false}
          nameIcon={BackIcon}
          onPress={_onBack}
          title="Back"
        />
        <IconMenuEditor
          nameIcon={UndoIcon}
          disabled={_disabledUndo || _isEmptyBoard}
          onPress={undoPoint}
          title="Undo"
        />
        <IconMenuEditor
          nameIcon={ClearIcon}
          disabled={_disabledUndo || _isEmptyBoard}
          onPress={clearBoard}
          title="Clear"
        />
        <IconMenuEditor
          nameIcon={_isFinishStep ? CompleteIcon : NextIcon}
          disabled={_isEmptyBoard}
          onPress={_onNext}
          title="Next"
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: -4,
    },
    elevation: 16,
    shadowRadius: 10,
    shadowColor: 'rgba(47, 51, 80, 0.12)',
    shadowOpacity: 1,
  },
});

export default MenuEditor;
