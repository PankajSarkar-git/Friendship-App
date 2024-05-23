import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {notificationData} from '../../data';
import {styles} from './styles';
import HeartIcon from '../../assets/icons/heartIcon';
import ShareIcon from '../../assets/icons/shareIcon';
import CommentIcon from '../../assets/icons/commentIcon';
import ButtonComponent from '../button';
import {COLORS} from '../../constants/colors';
import TextCustom from '../TextCustom';
import {textStyles} from '../TextCustom/textStyles';

const ChatItem = ({item}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.ProfileImage} style={styles.profileImage} />
          <View
            style={[
              styles.onLineStatus,
              {backgroundColor: item.isOnline ? COLORS.green : COLORS.yellow},
            ]}></View>
        </View>
        <View>
          <View style={styles.textContainer}>
            <TextCustom
              color={COLORS.black_text}
              customStyle={textStyles.fs_700_16}>
              {item.name}
            </TextCustom>
            <TextCustom
              color={COLORS.black_text}
              customStyle={textStyles.fs_700_16}>
              &bull;
            </TextCustom>
            <TextCustom
              color={COLORS.black_text}
              customStyle={textStyles.fs_400_12}>
              {item.time}
            </TextCustom>
          </View>
          <TextCustom
            color={item.isSeen ? COLORS.lightText : COLORS.black_text}
            customStyle={textStyles.fs_600_14}>
            {item.chat.slice(0, 40)} {item.chat.length > 40 && '...'}
          </TextCustom>
        </View>
      </View>
      <View>
        {item.isSeen === false && (
          <View
            style={[
              styles.unseenStatus,
              {backgroundColor: COLORS.blue},
            ]}></View>
        )}
      </View>
    </View>
  );
};

export default ChatItem;
