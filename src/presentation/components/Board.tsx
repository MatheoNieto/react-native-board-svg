import {useScrollView} from '@presentation/hooks/useScrollView';
import ScrollBox from '@presentation/ui/components/ScrollBox';
import React from 'react';
import BoardManager from './BoardManager';
import UpdateMeasurements from '@presentation/containers/UpdateMeasurements';
import ActionsButtons from './ActionsButtons';
import {FLASHINGS_DATA} from '@domain/entities/flashing';
type Props = {
  onSave: (data: FLASHINGS_DATA) => void;
};
const Board: React.FC<Props> = ({onSave}) => {
  const {scrollRef, scrollToY} = useScrollView();
  const [scrollEnabled, setScrollEnabled] = React.useState(false);

  return (
    <>
      <ScrollBox
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}>
        <BoardManager />
      </ScrollBox>

      <UpdateMeasurements
        scrollToY={scrollToY}
        setScrollEnabled={setScrollEnabled}
      />
      <ActionsButtons onSave={onSave} />
    </>
  );
};

export default Board;
