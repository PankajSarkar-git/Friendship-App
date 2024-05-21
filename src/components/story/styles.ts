import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: sizer.horizontalScale(6),
  },
  outerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizer.horizontalScale(80),
    height: sizer.horizontalScale(80),
    borderWidth: 2,
    borderColor: COLORS.lighterGray,
    borderRadius: sizer.horizontalScale(40),
    backgroundColor: 'white',
  },

  transparentBorder: {
    borderColor: 'white',
  },
  seenStory: {
    backgroundColor: COLORS.lighterGray,
  },
  unseenStory: {
    backgroundColor: 'blue',
  },
  innerCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizer.horizontalScale(72),
    height: sizer.horizontalScale(72),
    borderWidth: 2,
    borderColor: COLORS.lighterGray,
    borderRadius: sizer.horizontalScale(36),
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'relative',
  },
  plusIcon: {
    fontSize: sizer.fontScale(36),
    color: 'black',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
