import {ScaleColumnType} from '@presentation/models/scaleBar';
import {configBoard} from './config';
import {scaleBand} from 'd3-scale';

const scaleColumns = ({
  domainData,
  sizeScreen,
  paddingInner = configBoard.paddingBars,
  paddingOuter = configBoard.paddingBars,
  align = configBoard.alignBars,
}: ScaleColumnType) =>
  scaleBand()
    .domain(domainData)
    .range([configBoard.lineOffset, sizeScreen - configBoard.lineOffset])
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter)
    .align(align)
    .round(true);

export const ScaleXBar = (dataScale: ScaleColumnType) =>
  scaleColumns(dataScale);

export const ScaleYBar = (dataScale: ScaleColumnType) =>
  scaleColumns(dataScale);
