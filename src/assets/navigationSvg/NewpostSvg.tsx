import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NewpostSvg(props: any) {
  return (
    <Svg
    width={props.size}
    height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3z"
        stroke="gray"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M12 8v8M8 12h8"
        stroke="gray"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default NewpostSvg;
