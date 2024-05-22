import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
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
import Chats from '../../screens/chats';
import ActiveChatSvg from '../../assets/navigationSvg/ActiveChatSvg';
import ChatSvg from '../../assets/navigationSvg/ChatSvg';
import Profile from '../../screens/profile';
import ActiveProfileSvg from '../../assets/navigationSvg/ActiveProfileSvg';
import ProfileSvg from '../../assets/navigationSvg/ProfileSvg';
import ActiveBar from '../../assets/navigationSvg/ActiveBar';
import AddNew from '../../screens/addNew';

const Bottom = createBottomTabNavigator();

const tabConfig = [
  {
    name: 'Home',
    component: Home,
    icon: <HomeSvg size={sizer.horizontalScale(24)} />,
    activeIcon: <ActiveHomeSvg size={sizer.horizontalScale(24)} />,
  },
  {
    name: 'Search',
    component: Search,
    icon: <SearchSvg size={sizer.horizontalScale(24)} />,
    activeIcon: <ActiveSearchSvg size={sizer.horizontalScale(24)} />,
  },
  {
    name: 'AddPost',
    component: AddNew,
    icon: <NewpostSvg size={sizer.horizontalScale(24)} />,
    activeIcon: <ActiveNewpostsvg size={sizer.horizontalScale(24)} />,
  },
  {
    name: 'Chats',
    component: Chats,
    icon: <ChatSvg size={sizer.horizontalScale(24)} />,
    activeIcon: <ActiveChatSvg size={sizer.horizontalScale(24)} />,
  },
  {
    name: 'Profile',
    component: Profile,
    icon: <ProfileSvg size={sizer.horizontalScale(24)} />,
    activeIcon: <ActiveProfileSvg size={sizer.horizontalScale(24)} />,
  },
];

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: [styles.mainContainer, null],
      }}>
      {tabConfig.map(({name, component, icon, activeIcon}, index) => (
        <Bottom.Screen
          name={name}
          component={component}
          key={index}
          options={{
            headerShown: false,
            tabBarLabel: ({focused}) => {
              return (
                <View style={styles.container}>
                  {focused && <ActiveBar />}
                  <View style={styles.logo}>{focused ? activeIcon : icon}</View>
                  <TextCustom
                    style={[{color: focused ? '#5267D3' : '#808080'}]}
                    customStyle={textStyles.fs_600_10}>
                    {name}
                  </TextCustom>
                </View>
              );
            },
          }}
        />
      ))}
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
