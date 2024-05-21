import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  // -------posts------
  postCard: {
    marginBottom: sizer.horizontalScale(8),
    padding: sizer.horizontalScale(12),
    borderWidth: 1,
    borderColor: COLORS.mistgray,
    borderRadius: sizer.horizontalScale(8),
    position: 'relative',
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
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  postmedia: {
    height: sizer.horizontalScale(292),
    width: '100%',
    marginVertical: sizer.horizontalScale(10),
  },
  desc: {flex: 1, justifyContent: 'center'},
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
  buttonContainer: {
    marginTop: -4, // Adjust the value as needed
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizer.horizontalScale(12),
  },
  iconText: {
    flexDirection: 'row',
    gap: sizer.horizontalScale(6),
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.mistgray,
    borderRadius: sizer.horizontalScale(8),
    padding: sizer.horizontalScale(12),
    marginTop: sizer.horizontalScale(12),
  },
});
