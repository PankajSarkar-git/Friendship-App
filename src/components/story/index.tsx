import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {COLORS} from '../../constants/colors';
import TextCustom from '../TextCustom';
import {textStyles} from '../TextCustom/textStyles';
import { useNavigation } from '@react-navigation/native';

interface storyProps {
  story?: boolean;
  seen?: boolean;
  img?: string;
  name?: string;
}

const Story: React.FC<storyProps> = ({
  story = true,
  seen = false,
  name = 'You',
  img,
}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Story')}>
      <View
        style={[
          styles.outerCircle,
          story ? (seen ? styles.seenStory : styles.unseenStory) : {},
          story ? styles.transparentBorder : {},
        ]}>
        <View
          style={[styles.innerCircle, story ? styles.transparentBorder : {}]}>
          {!story && <Text style={styles.plusIcon}>+</Text>}
          {story && (
            <Image
              style={styles.img}
              source={require('../../assets/img/pic1.png')}
            />
          )}
        </View>
      </View>
      <TextCustom color={COLORS.black_text} customStyle={textStyles.fs_600_14}>
        {name}
      </TextCustom>
    </TouchableOpacity>
  );
};

export default Story;
