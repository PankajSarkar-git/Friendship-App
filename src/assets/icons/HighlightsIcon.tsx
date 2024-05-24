import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const HighlightsIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(22),
  height = sizer.horizontalScale(20),
  color = '#414141',
}) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 24 24" fill="none">
      <path
      fill="#414141"
      d="M18.958 13a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25Zm-3.25-4.333a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25Zm-5.416 0a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25ZM7.042 13a1.625 1.625 0 1 1 0-3.25 1.625 1.625 0 0 1 0 3.25ZM13 3.25a9.75 9.75 0 1 0 0 19.5 1.625 1.625 0 0 0 1.625-1.625 1.59 1.59 0 0 0-.422-1.083 1.678 1.678 0 0 1-.412-1.084 1.625 1.625 0 0 1 1.625-1.625h1.917a5.416 5.416 0 0 0 5.417-5.416c0-4.789-4.366-8.667-9.75-8.667Z"
    />
    </Svg>
  );
};

export default HighlightsIcon;
