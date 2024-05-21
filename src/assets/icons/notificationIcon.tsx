import React from 'react';
import {Path, Svg} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const NotificationIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(24),
  height = sizer.horizontalScale(24),
  color = '#808080',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.9 18.7533L21.6733 18.5533C21.0303 17.9804 20.4674 17.3234 20 16.6C19.4895 15.6017 19.1835 14.5115 19.1 13.3933V10.1C19.1044 8.34373 18.4674 6.6463 17.3085 5.32663C16.1496 4.00697 14.5488 3.15589 12.8067 2.93332V2.07332C12.8067 1.83728 12.7129 1.6109 12.546 1.44399C12.3791 1.27709 12.1527 1.18332 11.9167 1.18332C11.6806 1.18332 11.4543 1.27709 11.2873 1.44399C11.1204 1.6109 11.0267 1.83728 11.0267 2.07332V2.94665C9.30018 3.18527 7.71865 4.04149 6.57503 5.35672C5.4314 6.67196 4.80316 8.35708 4.80667 10.1V13.3933C4.72318 14.5115 4.41719 15.6017 3.90667 16.6C3.44726 17.3216 2.89347 17.9785 2.26001 18.5533L2.03334 18.7533V20.6333H21.9V18.7533Z"
        fill={color}
      />
      <Path
        d="M10.2133 21.3333C10.2718 21.7559 10.4812 22.1431 10.8029 22.4233C11.1245 22.7035 11.5367 22.8579 11.9633 22.8579C12.3899 22.8579 12.8021 22.7035 13.1238 22.4233C13.4455 22.1431 13.6549 21.7559 13.7133 21.3333H10.2133Z"
        fill={color}
      />
    </Svg>
  );
};

export default NotificationIcon;