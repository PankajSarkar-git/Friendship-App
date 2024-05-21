import React from 'react';
import {Path, Svg} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  liked?: boolean;
  height?: number;
  width?: number;
  color?: string;
}

const HeartIcon: React.FC<IconProps> = ({
  liked = false,
  width = sizer.horizontalScale(24),
  height = sizer.horizontalScale(20),
  color = '#F44336',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 20" fill="none">
      <Path
        d="M17.4545 0C15.1636 0 13.1455 1.16667 12 3C10.8545 1.16667 8.83636 0 6.54545 0C2.94545 0 0 3 0 6.66667C0 13.2778 12 20 12 20C12 20 24 13.3333 24 6.66667C24 3 21.0545 0 17.4545 0Z"
        fill={liked ? color : 'none'}
        stroke={liked ? '' : 'black'}
      />
    </Svg>
  );
};

export default HeartIcon;
