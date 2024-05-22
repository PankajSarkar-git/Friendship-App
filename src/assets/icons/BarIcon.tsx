import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const BarIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(20),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4a1 1 0 00-2 0v1H4a1 1 0 000 2h12v1a1 1 0 002 0V7h2a1 1 0 100-2h-2V4zM4 11a1 1 0 000 2h2v1a1 1 0 102 0v-1h12a1 1 0 000-2H8v-1a1 1 0 00-2 0v1H4zm-1 7a1 1 0 011-1h12v-1a1 1 0 012 0v1h2a1 1 0 010 2h-2v1a1 1 0 01-2 0v-1H4a1 1 0 01-1-1z"
        fill={color}
      />
    </Svg>
  );
};

export default BarIcon;
