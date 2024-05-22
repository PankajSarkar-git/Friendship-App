import {View, Text, StyleSheet, TextComponent} from 'react-native';
import React from 'react';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

const ButtonComponent = ({
  text = 'hello',
  paddingVertical = 6,
  bgColor = 'blue',
  color = '#FFF',
  radius = 4,
  borderColor = "#fff",
}: any) => {
  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: sizer.horizontalScale(paddingVertical),
          backgroundColor: bgColor,
          borderRadius: sizer.horizontalScale(radius),
          borderWidth : sizer.horizontalScale(1),
          borderColor: borderColor,
        },
      ]}>
      <Text style={[styles.text, {color: color}]}>{text}</Text>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: sizer.fontScale(12),
    lineHeight: sizer.lineHeight(16),
    fontWeight: '600',
  },
});
