import React from 'react';
import {Path, Svg} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const ShareIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(20),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M19.8962 2.28628C20.3869 0.928881 19.0715 -0.386489 17.7141 0.105355L1.12432 6.10517C-0.237626 6.59815 -0.402331 8.45648 0.850565 9.18232L6.14612 12.2481L10.8749 7.51936C11.0891 7.31245 11.376 7.19796 11.6739 7.20054C11.9717 7.20313 12.2566 7.32259 12.4672 7.5332C12.6778 7.7438 12.7973 8.0287 12.7998 8.32653C12.8024 8.62436 12.6879 8.91129 12.481 9.12552L7.75228 13.8543L10.8192 19.1498C11.5439 20.4027 13.4022 20.2369 13.8952 18.8761L19.8962 2.28628Z"
        fill={color}
      />
    </Svg>
  );
};

export default ShareIcon;
