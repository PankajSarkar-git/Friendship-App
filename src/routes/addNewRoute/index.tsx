import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PhotoEdit from '../../screens/photoEdit';
import AddNew from '../../screens/addNew';

export type RootStackParamList = {
  AddNew: undefined;
  PhotoEdit: {imageUri: String};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const AddNewRoution = () => {
  return (
    <Stack.Navigator initialRouteName="AddNew">
      <Stack.Screen
        name="AddNew"
        component={AddNew}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhotoEdit"
        component={PhotoEdit}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AddNewRoution;
