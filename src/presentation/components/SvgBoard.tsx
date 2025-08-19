import React from 'react';
import Grid from './Grid';
import Svg from 'react-native-svg';
import {configBoard} from '@presentation/utils/config';
import {useBoard} from '@presentation/hooks/useBoard';
import Line from './Line';
import Pointer from './Pointer';
import TextSvgLineMM from './TextLineMM';

type Props = {
  height?: number;
  width?: number;
};

const SvgBoard: React.FC<Props> = ({
  width = configBoard.widthBoard,
  height = configBoard.heightBoard,
}) => {
  const {flashingDataDraft} = useBoard();

  const _linesComponent = React.useMemo(() => {
    const lines = flashingDataDraft?.dataLines;
    if (!lines || lines.length < 1) return [];

    return lines.map((line, index, arrayLines) => {
      return {
        ...line,
        path:
          line.points.length === 2 ? (
            <Line
              {...{
                id: index,
                line,
                nextLine: arrayLines[index + 1],
              }}
            />
          ) : undefined,
      };
    });
  }, [flashingDataDraft?.dataLines]);

  return (
    <>
      <Svg width={width} height={height}>
        <Grid />
        {_linesComponent.map(({points, path: LineComponent, isLine}, index) => {
          return (
            <React.Fragment key={`lines-component-group-${index}`}>
              {LineComponent}

              <Pointer
                cx={points[0][0]}
                cy={points[0][1]}
                r={configBoard.sizePointer}
                fill={configBoard.pointerColor}
                strokeWidth={1}
                stroke={configBoard.borderPointer}
              />

              {isLine && <TextSvgLineMM coordinates={points} index={index} />}
            </React.Fragment>
          );
        })}
      </Svg>
    </>
  );
};

export default SvgBoard;
