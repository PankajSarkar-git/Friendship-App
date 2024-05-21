import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: sizer.horizontalScale(35),
    paddingTop: sizer.horizontalScale(12),
    paddingBottom: sizer.horizontalScale(7),
    height: sizer.horizontalScale(56),
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    paddingTop: sizer.horizontalScale(5),
  },
});
