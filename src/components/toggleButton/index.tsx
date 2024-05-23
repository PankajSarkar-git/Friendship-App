import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import TextCustom from '../TextCustom';
import {COLORS} from '../../constants/colors';
import {textStyles} from '../TextCustom/textStyles';

const ToggleButton = ({showCall, setShowCall}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonItem} onPress={()=> setShowCall(false)}>
        <TextCustom
          color={showCall ? COLORS.White : COLORS.black_text}
          customStyle={textStyles.fs_700_16}>
          Messages
        </TextCustom>
      </TouchableOpacity>
      <View
        style={[
          styles.activeBtn,
          showCall ? styles.right : styles.left,
        ]}></View>
      <TouchableOpacity style={styles.buttonItem} onPress={()=> setShowCall(true)}>
        <TextCustom
          color={showCall ? COLORS.black_text : COLORS.White}
          customStyle={textStyles.fs_700_16}>
          Calls
        </TextCustom>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleButton;
