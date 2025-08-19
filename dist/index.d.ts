import React from 'react';

type POINT_TYPE = [number, number];
type LINE_TYPE = {
    points: POINT_TYPE[];
    pending: number;
    distance: number;
    isLine: boolean;
};

type FLASHINGS_DATA = {
    dataLines: LINE_TYPE[];
};

type Props = {
    onSave: (data: FLASHINGS_DATA) => void;
};
declare const BoardMain: React.FC<Props>;

export { BoardMain as Board, type FLASHINGS_DATA };
