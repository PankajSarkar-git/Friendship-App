import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Notification from '../../screens/notification';
import HomeSvg from '../../assets/navigationSvg/HomeSvg';
import ActiveHomeSvg from '../../assets/navigationSvg/ActiveHomeSvg';
import sizer from '../../helper/sizer';
import {styles} from './style';
import {textStyles} from '../../components/TextCustom/textStyles';
import TextCustom from '../../components/TextCustom';
import ActiveSearchSvg from '../../assets/navigationSvg/ActiveSearchSvg';
import SearchSvg from '../../assets/navigationSvg/SearchSvg';
import ActiveNewpostsvg from '../../assets/navigationSvg/ActiveNewpostSvg';
import NewpostSvg from '../../assets/navigationSvg/NewpostSvg';
import Search from '../../screens/search';
import NewPost from '../../screens/newPost';
import Chats from '../../screens/chats';
import ActiveChatSvg from '../../assets/navigationSvg/ActiveChatSvg';
import ChatSvg from '../../assets/navigationSvg/ChatSvg';
import Profile from '../../screens/profile';
import ActiveProfileSvg from '../../assets/navigationSvg/ActiveProfileSvg';
import ProfileSvg from '../../assets/navigationSvg/ProfileSvg';
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.container}>
                <View>
                  {focused ? (
                    <ActiveHomeSvg size={sizer.horizontalScale(24)} />
                  ) : (
                    <HomeSvg size={sizer.horizontalScale(24)} />
                  )}
                </View>
                <TextCustom
                  style={[{color: focused ? '#5267D3' : '#808080'}]}
                  customStyle={textStyles.fs_600_10}>
                  Home
                </TextCustom>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.container}>
                <View>
                  {focused ? (
                    <ActiveSearchSvg size={sizer.horizontalScale(24)} />
                  ) : (
                    <SearchSvg size={sizer.horizontalScale(24)} />
                  )}
                </View>
                <TextCustom
                  style={[{color: focused ? '#5267D3' : '#808080'}]}
                  customStyle={textStyles.fs_600_10}>
                  Search
                </TextCustom>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="NewPost"
        component={NewPost}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.container}>
                <View>
                  {focused ? (
                    <ActiveNewpostsvg size={sizer.horizontalScale(24)} />
                  ) : (
                    <NewpostSvg size={sizer.horizontalScale(24)} />
                  )}
                </View>
                <TextCustom
                  style={[{color: focused ? '#5267D3' : '#808080'}]}
                  customStyle={textStyles.fs_600_10}>
                  New Post
                </TextCustom>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.container}>
                <View>
                  {focused ? (
                    <ActiveChatSvg size={sizer.horizontalScale(24)} />
                  ) : (
                    <ChatSvg size={sizer.horizontalScale(24)} />
                  )}
                </View>
                <TextCustom
                  style={[{color: focused ? '#5267D3' : '#808080'}]}
                  customStyle={textStyles.fs_600_10}>
                  Chats
                </TextCustom>
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: ({focused}) => {
            return (
              <View style={styles.container}>
                <View>
                  {focused ? (
                    <ActiveProfileSvg size={sizer.horizontalScale(24)} />
                  ) : (
                    <ProfileSvg size={sizer.horizontalScale(24)} />
                  )}
                </View>
                <TextCustom
                  style={[{color: focused ? '#5267D3' : '#808080'}]}
                  customStyle={textStyles.fs_600_10}>
                  Profile
                </TextCustom>
              </View>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
