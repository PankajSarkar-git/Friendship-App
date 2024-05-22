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
    height : sizer.horizontalScale(56),
  },
  infoContainer: {
    flexDirection: 'row',
    gap: sizer.horizontalScale(12),
    alignItems : 'center',
  },
  profileImage: {
    height: sizer.horizontalScale(38),
    width: sizer.horizontalScale(38),
    borderRadius: sizer.horizontalScale(180),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignSelf: 'center',
    gap: sizer.horizontalScale(6),
  },
  icons :{
    paddingTop: sizer.horizontalScale(3),
  },
  ActivitiImage: {
    height: sizer.horizontalScale(38),
    width: sizer.horizontalScale(38),
    borderRadius: sizer.horizontalScale(12),
  },
  acceptButton : {
    width : sizer.horizontalScale(63),
    
  }
});
