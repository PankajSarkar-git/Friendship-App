import React from 'react';
import {Path, Svg} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const CommentIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(20),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M4 12H16V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6ZM2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V20L16 16H2Z"
        fill={color}
      />
    </Svg>
  );
};

export default CommentIcon;
