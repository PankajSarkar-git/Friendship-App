import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function DotIcon(props : any) {
  return (
    <Svg
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={4} height={4} rx={2} fill="#414141" />
    </Svg>
  );
}

export default DotIcon;
