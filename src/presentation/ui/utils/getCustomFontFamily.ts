import {CustomFonts, FONT_WEIGHT_MAPPING} from '../constants';
import {FontWeight} from '../types';

export const getCustomFontFamily = (
  fontWeight: FontWeight = 'normal',
  fontFamily: string = CustomFonts.Primary,
) =>
  //@ts-ignore TODO: fix typing
  fontFamily && CustomFonts[fontFamily as CustomFonts]
    ? `${fontFamily}${FONT_WEIGHT_MAPPING[fontWeight] ?? ''}`
    : undefined;
