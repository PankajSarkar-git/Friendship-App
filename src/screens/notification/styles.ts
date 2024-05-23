import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
  },
  scroll: {
    height: sizer.horizontalScale(734),
  },
  notificationContainer: {
    borderBottomWidth: sizer.horizontalScale(1),
    borderColor: COLORS.borderColor,
    marginTop : sizer.horizontalScale(12),
  },
  headdingText: {
    fontFamily: 'Open Sans',
    fontSize: sizer.fontScale(16),
    fontWeight: '600',
    lineHeight: sizer.lineHeight(20),
    textAlign: 'center',
    color: COLORS.black_text,
    marginBottom: sizer.horizontalScale(12),
  },
  subHeading: {
    fontFamily: 'Open Sans',
    fontSize: sizer.fontScale(16),
    fontWeight: '600',
    lineHeight: sizer.lineHeight(20),
    textAlign: 'left',
    color: COLORS.black_text,
    marginBottom: sizer.horizontalScale(12),
    paddingHorizontal: sizer.horizontalScale(16),
  },
});
