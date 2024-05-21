import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchSvg(props: any) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.02 17.61a9 9 0 111.59-1.59l4.56 4.56a1.123 1.123 0 01-1.084 1.902 1.123 1.123 0 01-.506-.312l-4.56-4.56zm1.23-7.11a6.748 6.748 0 10-13.494-.202 6.748 6.748 0 0013.494.202z"
        fill="gray"
      />
    </Svg>
  );
}

export default SearchSvg;
