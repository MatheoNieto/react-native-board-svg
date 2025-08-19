import type {FontWeight} from '../types';

export enum CustomFonts {
  Primary = 'LibreFranklin',
}

export const FONT_WEIGHT_MAPPING: Record<FontWeight, string> = {
  '100': '-Thin',
  '200': '-ExtraLight',
  '300': '-Light',
  '400': '-Regular',
  '500': '-Medium',
  '600': '-SemiBold',
  '700': '-Bold',
  '800': '-ExtraBold',
  '900': '-Black',
  normal: '-Regular',
  bold: '-Bold',
  ultralight: '',
  thin: '',
  light: '',
  medium: '',
  regular: '',
  semibold: '',
  condensedBold: '',
  condensed: '',
  heavy: '',
  black: '',
};
