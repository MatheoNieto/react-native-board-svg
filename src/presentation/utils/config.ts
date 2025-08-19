import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const configBoard = {
  sizeGrid: 50,
  lineOffset: 0,
  alignBars: 0,
  paddingBars: 0,
  colorGrid: '#E1E1E1',
  widthBoard: height,
  heightBoard: height,
  sizePointer: 4,
  pointerColor: '#8F94AE',
  borderPointer: '#000000',
  unitMeasurement: 'mm',
};
