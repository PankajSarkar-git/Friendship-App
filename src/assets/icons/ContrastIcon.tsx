import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const ContrastIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(22),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 24 24" fill="none">
     <path
      fill="#414141"
      d="M12.003 21a8.779 8.779 0 0 1-3.51-.708 9.103 9.103 0 0 1-2.859-1.924 9.072 9.072 0 0 1-1.925-2.856A8.756 8.756 0 0 1 3 12.003c0-1.244.236-2.414.708-3.51a9.103 9.103 0 0 1 1.924-2.859 9.073 9.073 0 0 1 2.856-1.925A8.756 8.756 0 0 1 11.997 3c1.244 0 2.414.236 3.51.708a9.104 9.104 0 0 1 2.859 1.924 9.073 9.073 0 0 1 1.925 2.856A8.756 8.756 0 0 1 21 11.997a8.779 8.779 0 0 1-.708 3.51 9.104 9.104 0 0 1-1.924 2.859 9.072 9.072 0 0 1-2.856 1.925 8.756 8.756 0 0 1-3.509.709Zm.497-1.017c2.06-.135 3.825-.954 5.295-2.459C19.265 16.019 20 14.178 20 12s-.729-4.013-2.186-5.505c-1.456-1.491-3.227-2.317-5.314-2.478v15.966Z"
    />
    </Svg>
  );
};

export default ContrastIcon;
