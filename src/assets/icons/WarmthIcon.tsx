import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const WarmthIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(22),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 24 24" fill="none">
      <path
        fill="#414141"
        d="M6.208 1.875 2.85 7.292l3.358 5.633-3.575 6.283-1.95-.975 2.925-5.308L.25 7.292 4.258.9l1.95.975Zm6.717-.108L9.567 7.292l3.358 5.416-3.575 6.284-1.95-.975 2.925-5.309-3.358-5.416 4.008-6.5 1.95.975Zm6.825 0-3.358 5.525 3.358 5.416-3.575 6.284-1.95-.975 2.925-5.309-3.358-5.416L17.8.792l1.95.975Z"
      />
    </Svg>
  );
};

export default WarmthIcon;
