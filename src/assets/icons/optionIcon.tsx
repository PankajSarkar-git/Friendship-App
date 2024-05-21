import React from 'react';
import {Path, Svg} from 'react-native-svg';
import sizer from '../../helper/sizer';

interface IconProps {
  height?: number;
  width?: number;
  color?: string;
}

const OptionIcon: React.FC<IconProps> = ({
  width = sizer.horizontalScale(32),
  height = sizer.horizontalScale(32),
  color = '#414141',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <Path
        d="M18.4896 7.452C18.4897 7.77905 18.4254 8.10291 18.3003 8.4051C18.1753 8.70729 17.9919 8.98189 17.7607 9.21322C17.5296 9.44454 17.2551 9.62807 16.953 9.75333C16.6509 9.87858 16.327 9.9431 16 9.9432C15.673 9.94331 15.3491 9.879 15.0469 9.75394C14.7447 9.62888 14.4701 9.44553 14.2388 9.21435C14.0075 8.98317 13.8239 8.70869 13.6987 8.40658C13.5734 8.10447 13.5089 7.78065 13.5088 7.4536C13.5086 6.79311 13.7708 6.15958 14.2377 5.69239C14.7046 5.2252 15.3379 4.96261 15.9984 4.9624C16.6589 4.96219 17.2924 5.22437 17.7596 5.69126C18.2268 6.15815 18.4894 6.79151 18.4896 7.452Z"
        fill={color}
      />
      <Path
        d="M16 18.4888C17.375 18.4888 18.4896 17.3742 18.4896 15.9992C18.4896 14.6242 17.375 13.5096 16 13.5096C14.625 13.5096 13.5104 14.6242 13.5104 15.9992C13.5104 17.3742 14.625 18.4888 16 18.4888Z"
        fill={color}
      />
      <Path
        d="M16 27.0376C17.375 27.0376 18.4896 25.923 18.4896 24.548C18.4896 23.173 17.375 22.0584 16 22.0584C14.625 22.0584 13.5104 23.173 13.5104 24.548C13.5104 25.923 14.625 27.0376 16 27.0376Z"
        fill={color}
      />
    </Svg>
  );
};

export default OptionIcon;
