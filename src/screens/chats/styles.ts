import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  searchBox: {
    position: 'relative',
    paddingHorizontal: sizer.horizontalScale(16),
    paddingVertical: sizer.horizontalScale(12),
  },
  input: {
    paddingLeft: sizer.horizontalScale(46),
    paddingRight: sizer.horizontalScale(10),
    paddingVertical: sizer.horizontalScale(10),
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.mistgray,
  },
  boxShadow: {
    shadowColor: COLORS.lighterGray, // Color of the shadow
    shadowOffset: {width: 2, height: 2}, // Offset for the shadow
    shadowOpacity: 1, // Opacity of the shadow
    shadowRadius: 2, // Blur radius of the shadow
    // elevation: 0.2,
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  },
  toggleButton: {
    paddingHorizontal: sizer.horizontalScale(16),
    paddingVertical: sizer.horizontalScale(12),
  },
  scroll: {
    height: sizer.horizontalScale(410),
  },
});
