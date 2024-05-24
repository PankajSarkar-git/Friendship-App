import React from 'react';
import {SvgXml} from 'react-native-svg';

const SVGIcon = ({svgString, width, height}) => {
  return <SvgXml xml={svgString} width={width} height={height} />;
};

export default SVGIcon;
