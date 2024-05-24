import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  // -------posts------
  postCard: {
    // backgroundColor: 'red',
    marginBottom: sizer.horizontalScale(16),
    paddingHorizontal: sizer.horizontalScale(16),

    gap: sizer.horizontalScale(12),
  },
  contentcontainer: {
    padding: sizer.horizontalScale(12),
    borderWidth: 1,
    borderColor: COLORS.mistgray,
    borderRadius: sizer.horizontalScale(8),
    position: 'relative',
    gap: sizer.horizontalScale(8),
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postHeaderLeft: {
    flexDirection: 'row',
    gap: sizer.horizontalScale(12),
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  headerText: {
    gap: sizer.horizontalScale(6),
  },
  imgContainer: {
    position: 'relative',
    height: sizer.horizontalScale(48),
    width: sizer.horizontalScale(48),
    borderRadius: 50,
    overflow: 'hidden',
  },

  desc: {justifyContent: 'center'},
  textContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  ellipsis: {
    fontWeight: 'bold',
  },
  more: {
    padding: 0,
    color: 'blue',
  },
});
