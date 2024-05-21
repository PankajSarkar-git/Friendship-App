import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TextCustom from '../../components/TextCustom';
import {COLORS} from '../../constants/colors';
import {textStyles} from '../../components/TextCustom/textStyles';
import NotificationIcon from '../../assets/icons/notificationIcon';
import sizer from '../../helper/sizer';
import Story from '../../components/story';

const Home = () => {
  return (
    <View style={styles.container}>
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
      <ScrollView horizontal={true}>
        <Story />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizer.horizontalScale(16),
    paddingVertical: sizer.horizontalScale(14),
  },
});

export default Home;
