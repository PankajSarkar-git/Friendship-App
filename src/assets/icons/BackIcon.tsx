import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const BackIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(20),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 11H7.83l4.88-4.88a1.008 1.008 0 00-.324-1.636.996.996 0 00-1.086.216l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.997.997 0 001.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
        fill={color}
      />
    </Svg>
  );
};

export default BackIcon;
