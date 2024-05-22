import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TextCustom from '../TextCustom';
import {textStyles} from '../TextCustom/textStyles';
import {COLORS} from '../../constants/colors';
import NotificationIcon from '../../assets/icons/notificationIcon';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TextCustom color={COLORS.lavender} customStyle={textStyles.os_700_24}>
        FRIENDSHIP
      </TextCustom>
      <Pressable>
        <View style={{}}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <NotificationIcon />
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};

export default Header;
