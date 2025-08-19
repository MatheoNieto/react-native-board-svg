import React from 'react';
import {Rect, Text} from 'react-native-svg';

type Props = {
  positionTextX: number;
  positionTextY: number;
  id: number;
  textValue: string;
  fontSize?: number;
  colorLabel?: string;
  rectFill?: string;
  padding?: number;
  pending?: number;

  positionTextXRect?: number;
  positionTextYRect?: number;
};

const TextSvg: React.FC<Props> = ({
  fontSize = 14,
  colorLabel = '#000',
  rectFill = '#fff',
  positionTextX,
  positionTextY,
  textValue,
  id,
  padding = 4,
  pending = 0,
}) => {
  const [textWidth, setTextWidth] = React.useState(0);
  const textHeight = fontSize + padding * 2; // approximate height since SVG Text has no layout API

  return (
    <>
      {textWidth > 0 && (
        <Rect
          key={`backgroundRect${id}`}
          x={positionTextX - textWidth / 2}
          y={positionTextY - textHeight / 2}
          width={textWidth}
          height={textHeight}
          fill={rectFill}
          rx={4}
          ry={4}
          transform={`rotate(${Math.abs(
            pending,
          )}, ${positionTextX}, ${positionTextY})`}
        />
      )}

      <Text
        onLayout={event => {
          setTextWidth(event.nativeEvent.layout.width + padding * 2);
        }}
        key={`backgroundSizeText${id}`}
        textAnchor="middle"
        fontWeight="bold"
        fill={colorLabel}
        y={positionTextY}
        x={positionTextX}
        transform={`rotate(${Math.abs(
          pending,
        )}, ${positionTextX}, ${positionTextY})`}
        fontSize={fontSize}>
        {textValue}
      </Text>
    </>
  );
};

export default TextSvg;
