import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const ExposureIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(22),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 24 24" fill="none">
     <path
      fill="#414141"
      d="m8.25 20-.4-3.2a3.772 3.772 0 0 1-.612-.3 8.534 8.534 0 0 1-.563-.375L3.7 17.375l-2.75-4.75 2.575-1.95a2.385 2.385 0 0 1-.025-.337v-.675c0-.109.008-.221.025-.338L.95 7.375l2.75-4.75 2.975 1.25c.183-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.4-3.2h5.5l.4 3.2c.217.083.421.183.613.3.192.117.38.242.562.375l2.975-1.25 2.75 4.75-2.575 1.95c.017.117.025.23.025.338v.674c0 .109-.017.221-.05.338l2.575 1.95-2.75 4.75-2.95-1.25a6.826 6.826 0 0 1-.575.375c-.2.117-.4.217-.6.3l-.4 3.2h-5.5Zm2.8-6.5c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 14.55 10c0-.967-.342-1.792-1.025-2.475A3.372 3.372 0 0 0 11.05 6.5c-.983 0-1.813.342-2.488 1.025A3.39 3.39 0 0 0 7.55 10c0 .967.338 1.792 1.013 2.475.675.683 1.504 1.025 2.487 1.025Z"
    />
    </Svg>
  );
};

export default ExposureIcon;
