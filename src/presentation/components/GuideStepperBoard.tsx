import React from 'react';
import {Box, Card, Text} from '@presentation/ui/components';
import {GUIDE_STEP} from '@presentation/models';
import {guideSteps} from '@presentation/constants/guideSteps';
import {StyleSheet} from 'react-native';
import {useBoard} from '@presentation/hooks/useBoard';

type Props = {
  onFinish: () => void;
};

const GuideStepperBoard: React.FC<Props> = () => {
  const [dataStep, setDataStep] = React.useState<GUIDE_STEP>();
  const {stepBoard} = useBoard();

  React.useEffect(() => {
    const newDataStep = guideSteps.find(
      itemStep => itemStep.step === stepBoard,
    );
    if (!newDataStep) return setDataStep(undefined);

    setDataStep(newDataStep);
  }, [stepBoard, guideSteps]);

  if (!dataStep) return null;

  return (
    <Box style={styles.container} width="100%" p="m">
      <Card variant="guide" p="s" width="70%">
        <Text variant="bodyBold" textAlign="center">
          {dataStep.title}
        </Text>
        {dataStep.description && (
          <Text variant="bodyRegular" textAlign="center">
            {dataStep.description}
          </Text>
        )}
      </Card>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: -5,
    left: 0,
    zIndex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GuideStepperBoard;
