import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
}

const MissCall: React.FC<IconProps> = ({
  width = sizer.horizontalScale(20),
  height = sizer.horizontalScale(20),
}) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 24 24" fill="none">
      <Path
        d="M117.17 41.79a4.904 4.904 0 014.96 4.94c-.01 2.75-2.23 4.99-4.98 5.01L94.67 52.8c-5.81-.76-10.03-5.06-10.35-11.32l.29-26.11-4.48 4.04a4.677 4.677 0 01-6.6-.33 4.677 4.677 0 01.33-6.6L86.31 1.21A4.674 4.674 0 0192.3.98l14.11 10.94a4.681 4.681 0 01.84 6.57 4.681 4.681 0 01-6.57.84l-6.12-4.75.62 27.82 21.99-.61z"
        fill="#d8453e"
      />
      <Path
        d="M71.89 82.56c-3.34-6.01-7.18-11.78-12.18-17.06-5-5.3-11.22-10.12-19.29-14.23-.59-.3-1.16-.3-1.66-.09-.77.3-1.54.92-2.32 1.69-.59.59-1.34 1.55-2.11 2.59-3.1 4.08-6.93 9.14-12.36 6.61-.12-.06-.21-.12-.33-.18L3.58 51.5c-.06-.03-.12-.09-.18-.12C1.01 49.75.03 47.22 0 44.36c0-2.92 1.07-6.19 2.65-8.96 2.08-3.66 5.15-6.07 8.69-7.68 3.37-1.54 7.11-2.39 10.71-2.92 5.65-.83 10.95-.3 16.37 1.37 5.3 1.63 10.63 4.35 16.46 7.95l.42.27c2.68 1.66 5.57 3.46 8.4 5.57 10.39 7.83 20.95 19.14 27.84 31.59 5.77 10.45 8.93 21.74 7.21 32.48-.95 5.89-3.49 11.25-7.89 14.79-3.84 3.1-9.02 4.79-15.72 4.2-.77-.06-1.46-.51-1.81-1.16l-11.58-19.59c-1.69-2.2-1.9-4.38-.98-6.55.77-1.78 2.32-3.43 4.44-4.97.62-.53 1.37-1.07 2.14-1.63 2.59-1.87 5.54-4.05 4.53-6.61l.01.05z"
        fill="#393939"
      />
    </Svg>
  );
};

export default MissCall;
