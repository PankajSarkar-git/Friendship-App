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
import HeartIcon from '../../assets/icons/heartIcon';
import CommentIcon from '../../assets/icons/commentIcon';
import ShareIcon from '../../assets/icons/shareIcon';
import {textStyles} from '../TextCustom/textStyles';

interface postProps {
  name?: string;
  location?: string;
  profilepic?: string;
  postmedia?: string;
  likes?: number;
  comments?: number;
  share?: number;
}

const str =
  'Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.  ';
const PostCard: React.FC<postProps> = ({
  name,
  location,
  profilepic,
  postmedia,
  likes,
  comments,
  share,
}) => {
  const [commentText, setCommentText] = useState('');
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
              {name}
            </TextCustom>
            <TextCustom color={COLORS.primary_text}>{location}</TextCustom>
          </View>
        </View>
        <View>
          <OptionIcon />
        </View>
      </View>
      <View style={styles.postmedia}>
        <Image style={styles.img} source={{uri: postmedia}} />
      </View>
      <View style={styles.desc}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
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
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.iconText}>
          <HeartIcon liked={false} />
          <TextCustom customStyle={textStyles.fs_600_16}>500 Likes</TextCustom>
        </Pressable>
        <Pressable style={styles.iconText}>
          <CommentIcon />
          <TextCustom customStyle={textStyles.fs_600_16}>
            200 Comments
          </TextCustom>
        </Pressable>
        <Pressable style={styles.iconText}>
          <ShareIcon />
          <TextCustom customStyle={textStyles.fs_600_16}>200 Share</TextCustom>
        </Pressable>
      </View>
      <TextInput
        style={[styles.input, textStyles.fs_600_14]}
        placeholder="Comment..."
        value={commentText}
        onChangeText={text => setCommentText(text)}
      />
    </View>
  );
};

export default PostCard;
