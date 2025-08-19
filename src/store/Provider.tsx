import React from 'react';

import {boardReducer, INITIAL_STATE} from './reducer';
import {BoardContext} from './context';

const BoardProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = React.useReducer(boardReducer, INITIAL_STATE);

  return (
    <BoardContext.Provider value={{state, dispatch}}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
