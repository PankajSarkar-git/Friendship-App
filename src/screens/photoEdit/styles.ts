import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    paddingHorizontal: sizer.horizontalScale(16),
    paddingVertical: sizer.horizontalScale(13),
  },
  image: {
    height: sizer.horizontalScale(500),
    width: sizer.horizontalScale(398),
    marginTop: sizer.horizontalScale(11),
  },
  openContainer: {
    paddingVertical: sizer.horizontalScale(220),
    width: sizer.horizontalScale(320),
    alignSelf: 'center',
    gap: sizer.horizontalScale(5),
  },
  filterContainer: {
    marginTop: sizer.horizontalScale(12),
    paddingVertical: sizer.horizontalScale(12),
  },
  filter: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: sizer.horizontalScale(1),
    marginLeft: sizer.horizontalScale(24),
  },
  slider : {
    height : sizer.horizontalScale(40),
    width : '100%',
  }
});
