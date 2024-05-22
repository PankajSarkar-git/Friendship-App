import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: sizer.horizontalScale(14),
    paddingHorizontal: sizer.horizontalScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  filterContainer: {
    backgroundColor: '#FFF',
    padding: sizer.horizontalScale(10),
    gap: sizer.horizontalScale(7),
    elevation: 2,
    position: 'absolute',
    width: sizer.horizontalScale(200),
    bottom: sizer.horizontalScale(-85),
    right : sizer.horizontalScale(-20),
    zIndex: 255,
  },
  FilterText: {
    fontSize: sizer.fontScale(14),
    lineHeight: sizer.lineHeight(18),
    fontWeight: '600',
    elevation: 3,
  },
});
