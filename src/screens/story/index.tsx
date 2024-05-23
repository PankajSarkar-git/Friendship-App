import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {storyImageData} from '../../data';
import {styles} from './styles';
import TextCustom from '../../components/TextCustom';
import {COLORS} from '../../constants/colors';
import {textStyles} from '../../components/TextCustom/textStyles';
import {useNavigation} from '@react-navigation/native';
import SendSmgIcon from '../../assets/icons/sendSmg';

const Story = () => {
  const [storyCount, setStoryCount] = useState(0);
  const [bgImg, setBgImg] = useState(storyImageData.img[0]);
  const width = 100 / storyImageData.img.length - 2;
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (storyCount < storyImageData.img.length - 1) {
        setStoryCount(storyCount + 1);
        setBgImg(storyImageData.img[storyCount + 1]);
      } else {
        setStoryCount(0);
        setBgImg(storyImageData.img[0]);
        navigation.goBack();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [storyCount]);
  return (
    <KeyboardAvoidingView behavior='position'>
      <View>
        <ImageBackground source={{uri: bgImg}} style={styles.bgImage}>
          <View style={styles.indicatorsContainer}>
            {storyImageData.img.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.indicators,
                  {width: `${width}%`},
                  {
                    backgroundColor:
                      storyCount === index ? COLORS.White : COLORS.storyBar,
                  },
                ]}></View>
            ))}
          </View>
          <View style={styles.profile}>
            <Image
              source={{uri: storyImageData.profileImage}}
              style={styles.profileimg}
            />
            <View style={styles.profileInfo}>
              <View style={styles.topProfile}>
                <TextCustom
                  color={COLORS.White}
                  customStyle={textStyles.fs_600_16}>
                  {storyImageData.name}
                </TextCustom>
                <TextCustom
                  color={COLORS.White}
                  customStyle={textStyles.fs_600_16}>
                  &bull;
                </TextCustom>
                <TextCustom
                  color={COLORS.White}
                  customStyle={textStyles.fs_400_14}>
                  {storyImageData.uploadTime}
                </TextCustom>
              </View>
              <TextCustom
                color={COLORS.White}
                customStyle={textStyles.fs_600_12}>
                {storyImageData.filterName}
              </TextCustom>
            </View>
          </View>
          <View style={styles.massageContainer}>
            <View style={styles.massageBox}>
              <TextInput
              placeholder="Send massage"
                style={[
                  styles.input,
                  styles.boxShadow,
                  textStyles.fs_600_14,
                  {color: COLORS.White},
                ]}/>
              <View style={{position: 'absolute', top: 15, right: 28}}>
                <SendSmgIcon />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Story;
