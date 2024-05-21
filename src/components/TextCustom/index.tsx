import {View, Text, StyleProp, TextStyle, TextProps} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './styles';
import {COLORS} from '../../constants/colors';

interface Props {
  children: ReactNode;
  customStyle?: StyleProp<TextStyle>;
  color?: string;
}
type TextStyleProps = Props & TextProps;

const TextCustom = ({
  customStyle,
  children,
  color = COLORS.primary_text,
  ...otherProps
}: TextStyleProps) => {
  return (
    <Text style={[styles?.defaultText, {color}, customStyle]} {...otherProps}>
      {children}
    </Text>
  );
};

export default TextCustom;
