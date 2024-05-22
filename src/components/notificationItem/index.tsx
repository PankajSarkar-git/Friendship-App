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

const NotificationItem = ({item}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View>
          <Image source={item.ProfileImage} style={styles.profileImage} />
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
              customStyle={textStyles.fs_400_14}>
              {item.activity}
            </TextCustom>
            <View style={styles.icons}>
              {item.like && (
                <HeartIcon
                  height={14}
                  width={16}
                  color={'#F44336'}
                  liked={true}
                />
              )}
              {item.share && <ShareIcon height={14} width={16} />}
              {item.comment && <CommentIcon height={14} width={16} />}
            </View>
          </View>
          <TextCustom
            color={COLORS.black_text}
            customStyle={textStyles.fs_400_12}>
            {item.time}
          </TextCustom>
        </View>
      </View>
      <View>
        {item.isacitivityImage && (
          <Image
            source={{uri: item.acitivityImage}}
            style={styles.ActivitiImage}
          />
        )}
        {item.follow && (
          <TouchableOpacity style={styles.acceptButton}>
            <ButtonComponent
              bgColor={COLORS.blue}
              color={COLORS.pageBackGround}
              borderColor={COLORS.blue}
              Text={'Follow'}
            />
          </TouchableOpacity>
        )}
        {item.followRequst && (
          <TouchableOpacity style={styles.acceptButton}>
            <ButtonComponent
              bgColor={COLORS.pageBackGround}
              color={COLORS.blue}
              borderColor={COLORS.blue}
              text={'Accept'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NotificationItem;
