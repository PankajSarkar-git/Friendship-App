import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
  },
  bgImage: {
    height: sizer.horizontalScale(820),
    paddingTop: sizer.horizontalScale(45),
    paddingHorizontal: sizer.horizontalScale(16),
    position : 'relative',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    gap: sizer.horizontalScale(6),
  },
  indicators: {
    height: sizer.horizontalScale(4),
    backgroundColor: COLORS.White,
  },
  profile: {
    marginTop: sizer.horizontalScale(12),
    flexDirection: 'row',
    gap: sizer.horizontalScale(12),
  },
  profileimg: {
    height: sizer.fontScale(48),
    width: sizer.fontScale(48),
    borderRadius: sizer.horizontalScale(180),
  },
  profileInfo: {},
  topProfile: {
    flexDirection: 'row',
    gap: sizer.horizontalScale(8),
  },
  massageContainer : {
    paddingHorizontal : sizer.horizontalScale(16),
    width : '100%',
    position: 'absolute',
    bottom : sizer.horizontalScale(24),
  },
  massageBox: {
    position: 'relative',
    width :sizer.horizontalScale(398),
  },
  input: {
    paddingLeft: sizer.horizontalScale(46),
    paddingRight: sizer.horizontalScale(10),
    paddingVertical: sizer.horizontalScale(10),
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    color: COLORS.White,
    borderColor: COLORS.White,
  },
  boxShadow: {
    shadowColor: COLORS.lighterGray, // Color of the shadow
    shadowOffset: {width: 2, height: 2}, // Offset for the shadow
    shadowOpacity: 1, // Opacity of the shadow
    shadowRadius: 2, // Blur radius of the shadow
    // elevation: 0.2,
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  },
});
