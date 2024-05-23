import React from 'react';
import {Path, Svg} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
}

const SendSmgIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(20),
  height = sizer.horizontalScale(20),
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 20" fill="none">
      <Path
        d="M19.896 2.286c.49-1.357-.825-2.672-2.182-2.18l-16.59 6c-1.362.492-1.526 2.35-.273 3.076l5.295 3.066 4.729-4.729a1.136 1.136 0 011.606 1.607l-4.729 4.728 3.067 5.296c.725 1.253 2.583 1.087 3.076-.274l6.001-16.59z"
        fill="#fff"
      />
    </Svg>
  );
};

export default SendSmgIcon;
