import React from 'react';
import BoardContainer from './containers/Board.container';
import BoardProvider from '@store/Provider';
import ProviderTheme from '@presentation/ui/theme/Provider';
import {FLASHINGS_DATA} from '@domain/entities/flashing';

type Props = {
  onSave: (data: FLASHINGS_DATA) => void;
};

const BoardMain: React.FC<Props> = ({onSave}) => {
  return (
    <ProviderTheme>
      <BoardProvider>
        <BoardContainer onSave={onSave} />
      </BoardProvider>
    </ProviderTheme>
  );
};

export default BoardMain;
