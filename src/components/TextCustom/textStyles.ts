import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';

export const textStyles = StyleSheet.create({
  fs_600_10: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: sizer.fontScale(10),
    fontWeight: '600',
    lineHeight: sizer.horizontalScale(14),
  },
  fs_600_14: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: sizer.fontScale(14),
    fontWeight: '600',
    lineHeight: sizer.horizontalScale(16),
  },
  fs_600_16: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: sizer.fontScale(16),
    fontWeight: '600',
    lineHeight: sizer.horizontalScale(18),
  },
  fs_600_20: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: sizer.fontScale(20),
    fontWeight: '600',
    lineHeight: sizer.horizontalScale(22),
  },
  os_700_24: {
    fontFamily: 'Outfit-Bold',
    fontSize: sizer.fontScale(24),
    fontWeight: '700',
    lineHeight: sizer.horizontalScale(24),
  },
});
