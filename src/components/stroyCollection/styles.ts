import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';

export const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
  },
  storyCollection: {
    marginTop: sizer.horizontalScale(12),
    paddingHorizontal: sizer.horizontalScale(8),
    marginVertical: sizer.horizontalScale(6),
  },
  storyWrapper: {
    marginHorizontal: sizer.horizontalScale(4), // Adds horizontal spacing between items
  },
  addStory: {
    marginRight: 4,
  },
});
