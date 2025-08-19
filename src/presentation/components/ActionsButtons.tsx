import {FLASHINGS_DATA} from '@domain/entities/flashing';
import {useBoard} from '@presentation/hooks/useBoard';
import {BaseTouchable, Box, Text} from '@presentation/ui/components';
import {getIndexOfStepForName} from '@shared/utils/board';
import React from 'react';
import {StyleSheet} from 'react-native';

const widthStandard = 160;
type Props = {
  onSave: (data: FLASHINGS_DATA) => void;
};
const ActionsButtons: React.FC<Props> = ({onSave}) => {
  const {stepBoard, changeStep, flashingDataDraft} = useBoard();

  const _visible = React.useMemo(() => {
    return stepBoard === getIndexOfStepForName('finish');
  }, [stepBoard]);

  const _onEdit = () => {
    const editMeasurementIndex = getIndexOfStepForName('measurements');
    changeStep(editMeasurementIndex);
  };

  const _onSave = () => {
    if (!flashingDataDraft) return;
    onSave(flashingDataDraft);
  };

  if (!_visible) return null;

  return (
    <Box
      p="m"
      my="s"
      position="absolute"
      bottom="16%"
      width="100%"
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent={'space-between'}>
      <BaseTouchable
        onPress={_onEdit}
        m="s"
        width={widthStandard}
        flexDirection="row-reverse"
        p="m"
        borderRadius="s"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        style={styles.shadow}>
        <Text variant="subheadMedium" mx="s">
          Edit Sizes
        </Text>
      </BaseTouchable>

      <BaseTouchable
        onPress={_onSave}
        width={widthStandard}
        m="s"
        flexDirection="row-reverse"
        p="m"
        borderRadius="s"
        alignItems="center"
        justifyContent="center"
        backgroundColor="primaryBlue"
        style={styles.shadow}>
        <Text color="white" variant="subheadMedium" mx="s">
          Save
        </Text>
      </BaseTouchable>
    </Box>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowColor: 'lightGray',
  },
});

export default ActionsButtons;
