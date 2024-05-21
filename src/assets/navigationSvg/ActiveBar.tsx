import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';
import sizer from '../../helper/sizer';

function ActiveBar(props: any) {
  return (
    <Svg
      width={sizer.horizontalScale(24)}
      height={sizer.horizontalScale(5)}
      viewBox="0 0 24 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={24} height={5} rx={2.5} fill="#5267D3" />
    </Svg>
  );
}

export default ActiveBar;
