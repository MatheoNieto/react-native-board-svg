import {useBoard} from '@presentation/hooks/useBoard';
import {
  BaseTouchable,
  Box,
  Divider,
  Icon,
  Text,
} from '@presentation/ui/components';
import {BackIcon, CompleteIcon, NextIcon} from '@presentation/ui/icons';
import {configBoard} from '@presentation/utils/config';
import React from 'react';
import {TextInput} from 'react-native';

const SIZE_ICON = 20;

const EditMeasurement = () => {
  const {editMeasurement, lineSelected} = useBoard();
  const [measurement, setMeasurement] = React.useState(0);

  React.useEffect(() => {
    if (!lineSelected) return;

    setMeasurement(lineSelected.distance);
  }, [lineSelected]);

  const inputRef = React.useRef<TextInput>(null);

  const _handlePrevious = () => {
    editMeasurement(measurement, false);
  };
  const _handleNext = () => {
    editMeasurement(measurement);
  };
  const _onChangeValue = (newText: string) => {
    setMeasurement(parseInt(newText, 10));
  };

  return (
    <>
      <Box
        as={BaseTouchable}
        onPress={() => null}
        position="absolute"
        bottom="105%"
        right="0%"
        backgroundColor="white"
        p={'xs'}
        style={{
          zIndex: 1,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowColor: 'lightGray',
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}>
        <Icon as={CompleteIcon} color="black" size={SIZE_ICON} />
      </Box>

      <Box p="s" backgroundColor="white">
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around">
          <Box as={BaseTouchable} onPress={_handlePrevious}>
            <Icon color="black" as={BackIcon} size={SIZE_ICON} />
          </Box>

          <Text variant="subheadSecondary">Length</Text>
          <Box flexDirection="row" alignItems="center">
            <TextInput
              ref={inputRef}
              inputMode="numeric"
              keyboardType="number-pad"
              style={[
                {
                  textAlign: 'center',
                  height: 30,
                  width: 80,
                  backgroundColor: 'white',
                  color: '#000',
                },
              ]}
              value={`${isNaN(measurement) ? '0' : measurement}`}
              onChangeText={_onChangeValue}
            />
            <Text variant="bodyBold">{configBoard.unitMeasurement}</Text>
          </Box>

          <Box as={BaseTouchable} onPress={_handleNext}>
            <Icon as={NextIcon} color="black" size={SIZE_ICON} />
          </Box>
        </Box>
        <Divider my="s" />
      </Box>
    </>
  );
};

export default EditMeasurement;
