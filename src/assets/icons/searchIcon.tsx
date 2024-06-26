import React from 'react';
import {Path, Svg} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const SearchIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(22),
  height = sizer.horizontalScale(22),
  color = '#808080',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M9.40824 18.8155C11.4957 18.8151 13.5229 18.1163 15.1673 16.8304L20.3371 22L22 20.3372L16.8302 15.1676C18.1167 13.5232 18.816 11.4956 18.8165 9.40774C18.8165 4.22055 14.5957 0 9.40824 0C4.22077 0 0 4.22055 0 9.40774C0 14.5949 4.22077 18.8155 9.40824 18.8155ZM9.40824 2.35193C13.2997 2.35193 16.4644 5.51646 16.4644 9.40774C16.4644 13.299 13.2997 16.4635 9.40824 16.4635C5.51676 16.4635 2.35206 13.299 2.35206 9.40774C2.35206 5.51646 5.51676 2.35193 9.40824 2.35193Z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchIcon;
