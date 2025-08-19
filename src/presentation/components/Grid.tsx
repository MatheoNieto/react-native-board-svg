import {configBoard} from '@presentation/utils/config';
import {ScaleXBar, ScaleYBar} from '@presentation/utils/scaleBar';
import React from 'react';
import {G, Rect} from 'react-native-svg';
import {ScaleBand} from 'd3-scale';

const GridComponent = () => {
  const _renderLinesVerticals = ({
    domainData,
    heightLine,
    scaleXBar,
  }: {
    heightLine: number;
    domainData: string[];
    scaleXBar: ScaleBand<string>;
  }) => {
    return domainData.map(dataLine => (
      <Rect
        key={`vertical-line${dataLine}`}
        fill={configBoard.colorGrid}
        width={1}
        height={heightLine}
        y={0}
        x={scaleXBar(dataLine)}
      />
    ));
  };

  const _renderLinesHorizontals = ({
    domainData,
    widthLine,
    scaleYBar,
  }: {
    widthLine: number;
    domainData: string[];
    scaleYBar: ScaleBand<string>;
  }) => {
    return domainData.map(dataLine => (
      <Rect
        key={`horizontal-line${dataLine}`}
        fill={configBoard.colorGrid}
        width={widthLine}
        height={1}
        y={scaleYBar(dataLine)}
        x={0}
      />
    ));
  };

  const _renderLines = () => {
    const arrayGrid = Array.from({length: configBoard.sizeGrid}, (_, i) =>
      i.toString(),
    );

    const scaleXBar = ScaleXBar({
      domainData: arrayGrid,
      sizeScreen: configBoard.widthBoard,
    });

    const scaleYBar = ScaleYBar({
      domainData: arrayGrid,
      sizeScreen: configBoard.heightBoard,
    });

    return (
      <G>
        {_renderLinesVerticals({
          domainData: arrayGrid,
          scaleXBar,
          heightLine: configBoard.heightBoard,
        })}
        {_renderLinesHorizontals({
          domainData: arrayGrid,
          scaleYBar,
          widthLine: configBoard.widthBoard,
        })}
      </G>
    );
  };

  return _renderLines();
};
export default GridComponent;
