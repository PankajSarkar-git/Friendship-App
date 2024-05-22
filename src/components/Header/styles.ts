import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizer.horizontalScale(16),
    paddingVertical: sizer.horizontalScale(14),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.mistgray,
  },
});
