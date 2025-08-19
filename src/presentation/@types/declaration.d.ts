declare module '*.svg' {
  import * as React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

// declare module '*.svg' {
//   import * as React from 'react';
//   const SVGComponent: React.FunctionComponent<
//     React.SVGProps<SVGSVGElement> & {title?: string}
//   >;
//   export default SVGComponent;
// }
