import {LINE_TYPE} from '@domain/entities/board';
import {ReactElement} from 'react';

export type MAKE_LINE = {
  lines: LINE_TYPE[];
};

export type DREW_LINE_TYPE = LINE_TYPE & {
  path: ReactElement | undefined;
};

export type BUILD_LINE = {
  id: number;
  line: LINE_TYPE;
  nextLine?: LINE_TYPE;
};
