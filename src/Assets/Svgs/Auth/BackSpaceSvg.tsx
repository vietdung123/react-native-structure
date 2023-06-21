import { Colors } from '@/Theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { scale } from 'react-native-size-scaling';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = ({ size = 24, color = Colors.black }) => (
  <Svg width={scale(size)} height={scale(size)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M18.75 4a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20h-8.501a3.25 3.25 0 0 1-2.085-.756l-.155-.139-4.995-4.75a3.25 3.25 0 0 1-.116-4.594l.116-.116 4.995-4.75a3.25 3.25 0 0 1 2.032-.888L10.25 4h8.501Zm-7.304 4.397a.75.75 0 0 0-1.049 1.05l.073.083L12.94 12l-2.47 2.47-.073.084a.75.75 0 0 0 1.05 1.049l.083-.073L14 13.061l2.47 2.47.084.072a.75.75 0 0 0 1.049-1.05l-.073-.083L15.061 12l2.47-2.47.072-.084a.75.75 0 0 0-1.05-1.049l-.083.073L14 10.939l-2.47-2.47-.084-.072Z"
      fill={color}
      fillRule="nonzero"
    />
  </Svg>
);

export default SvgComponent;
