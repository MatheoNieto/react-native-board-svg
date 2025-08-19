import {TextStyle} from 'react-native';
import {getCustomFontFamily} from '../utils/getCustomFontFamily';

function useFontStyle({
  fontFamily,
  fontWeight,
}: Pick<TextStyle, 'fontFamily' | 'fontWeight'>) {
  if (!fontFamily) {
    return null;
  }
  const customFontFamily = getCustomFontFamily(fontWeight, fontFamily);
  return {
    fontFamily: customFontFamily ?? fontFamily,
    fontWeight: customFontFamily ? null : fontWeight,
  };
}

export default useFontStyle;
