import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';

export const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: sizer.fontScale(14),
    lineHeight: sizer.horizontalScale(14),
    color: 'red',
  },
});
