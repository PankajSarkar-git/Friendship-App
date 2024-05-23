import {StyleSheet} from 'react-native';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: sizer.horizontalScale(9),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: sizer.horizontalScale(1),
    borderColor: COLORS.borderColor,
    paddingHorizontal: sizer.horizontalScale(16),
    height: sizer.horizontalScale(56),
  },
  infoContainer: {
    flexDirection: 'row',
    gap: sizer.horizontalScale(12),
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  onLineStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: sizer.horizontalScale(12),
    width: sizer.horizontalScale(12),
    borderRadius: sizer.horizontalScale(180),
  },
  unseenStatus: {
    height: sizer.horizontalScale(12),
    width: sizer.horizontalScale(12),
    borderRadius: sizer.horizontalScale(180),
  },
  profileImage: {
    height: sizer.horizontalScale(38),
    width: sizer.horizontalScale(38),
    borderRadius: sizer.horizontalScale(180),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: sizer.horizontalScale(6),
  },
  icons: {
    paddingTop: sizer.horizontalScale(3),
  },
  ActivitiImage: {
    height: sizer.horizontalScale(38),
    width: sizer.horizontalScale(38),
    borderRadius: sizer.horizontalScale(12),
  },
  acceptButton: {
    width: sizer.horizontalScale(63),
  },
});
