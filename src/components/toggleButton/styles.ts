import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: sizer.horizontalScale(13),
    flexDirection: 'row',
    backgroundColor: COLORS.blue,
    borderRadius: sizer.horizontalScale(180),
    position: 'relative',
    zIndex: -5,
    height: sizer.horizontalScale(46),
  },
  buttonItem: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBtn: {
    position: 'absolute',
    backgroundColor: COLORS.White,
    zIndex: -5,
    borderRadius : sizer.horizontalScale(180),
    height: sizer.horizontalScale(43),
    width: '50%',
  },
  left : {
    top: sizer.horizontalScale(1),
    left: sizer.horizontalScale(1),
  },
  right : {
    top: sizer.horizontalScale(1),
    right: sizer.horizontalScale(1),
  },
});
