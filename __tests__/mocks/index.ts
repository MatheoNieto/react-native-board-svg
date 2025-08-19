import {LINE_TYPE} from '@domain/entities/board';
import {FLASHINGS_DATA} from '@domain/entities/flashing';

export const MOCK_LINE: LINE_TYPE = {
  points: [
    [1, 2],
    [2, 3],
  ],
  pending: 2,
  distance: 10,
  isLine: true,
};

export const MOCK_FLASHING_DATA: FLASHINGS_DATA = {
  dataLines: [MOCK_LINE],
};

export const REPO_MOCK = {
  getDataDraftFlashing: jest.fn(),
  getLineSelected: jest.fn(),
  updateDraftFlashing: jest.fn(),
  changeStep: jest.fn(),
  changeIndexLineSelected: jest.fn(),
  getStep: jest.fn(),
} as any;
