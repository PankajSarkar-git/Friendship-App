import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizer.horizontalScale(16),
    paddingVertical: sizer.horizontalScale(14),
  },
});
