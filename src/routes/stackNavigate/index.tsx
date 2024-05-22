import {View, Text} from 'react-native';
import React from 'react';
import Home from '../../screens/home';
import Story from '../../screens/story';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from '../bottomNavigator';
import Notification from '../../screens/notification';

export type RootStackParamList = {
  BottomNavigator: undefined;
  Story: undefined;
  Notification: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNavigator">
        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Story"
          component={Story}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigate;
