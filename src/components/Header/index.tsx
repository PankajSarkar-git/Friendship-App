import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TextCustom from '../TextCustom';
import {textStyles} from '../TextCustom/textStyles';
import {COLORS} from '../../constants/colors';
import NotificationIcon from '../../assets/icons/notificationIcon';

const Header = () => {
  return (
    <View style={styles.header}>
      <TextCustom color={COLORS.lavender} customStyle={textStyles.os_700_24}>
        FRIENDSHIP
      </TextCustom>
      <Pressable>
        <View style={{}}>
          <NotificationIcon />
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
