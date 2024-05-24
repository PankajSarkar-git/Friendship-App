import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import TextCustom from '../TextCustom';
import OptionIcon from '../../assets/icons/optionIcon';
import {COLORS} from '../../constants/colors';

import {textStyles} from '../TextCustom/textStyles';
import sizer from '../../helper/sizer';

interface captionProps {
  name?: string;
  username?: string;
  profilepic?: string;
}

const str =
  'Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.  ';
const CaptionCard: React.FC<captionProps> = ({name, username, profilepic}) => {
  const [expanded, setExpanded] = useState(false);
  const [displayText, setDisplayText] = useState(str);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    if (expanded) {
      setDisplayText(str.substring(0, 120).trim() + '...');
    } else {
      setDisplayText(str.trim());
    }
  };
  return (
    <View style={styles.postCard}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'space-between',
            // paddingHorizontal: sizer.horizontalScale(16),
          }}>
          <View
            style={{
              position: 'relative',
              width: '28%',
              height: 190,
              borderRadius: sizer.horizontalScale(8),
              overflow: 'hidden',
            }}>
            <Image
              style={{position: 'absolute', height: '100%', width: '100%'}}
              source={require('../../assets/img/pic1.png')}
            />
          </View>
          <View
            style={{
              position: 'relative',
              width: '70%',
              height: 190,
              borderRadius: sizer.horizontalScale(8),
              overflow: 'hidden',
            }}>
            <Image
              style={{position: 'absolute', height: '100%', width: '100%'}}
              source={require('../../assets/img/pic1.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.contentcontainer}>
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={require('../../assets/img/pic1.png')}
              />
            </View>
            <View style={styles.headerText}>
              <TextCustom
                color={COLORS.primary_text}
                customStyle={textStyles.fs_600_20}>
                satyam
              </TextCustom>
              <TextCustom color={COLORS.primary_text}>@satyam</TextCustom>
            </View>
          </View>
          <View>
            <OptionIcon />
          </View>
        </View>

        <View style={styles.desc}>
          <View style={styles.textContainer}>
            <TextCustom customStyle={textStyles.fs_400_14}>
              {expanded ? (
                <>
                  {displayText}
                  {str.length > 120 && (
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={toggleExpanded}>
                      <Text style={styles.more}> less</Text>
                    </TouchableOpacity>
                  )}
                </>
              ) : (
                <>
                  {displayText.slice(0, -3)}
                  <Text style={styles.ellipsis}>...</Text>
                  {str.length > 120 && (
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={toggleExpanded}>
                      <Text style={styles.more}>more</Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </TextCustom>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CaptionCard;
