import {BoardContext} from '@store/context';
import {useContext} from 'react';

export const useBoardContext = () => {
  const context = useContext(BoardContext);
  if (!context)
    throw new Error('useBoardContext must be used within BoardProvider');
  return context;
};
