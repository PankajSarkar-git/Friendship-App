import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import ButtonComponent from '../../components/button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles} from './styles';
import {textStyles} from '../../components/TextCustom/textStyles';
import {useNavigation} from '@react-navigation/native';

const AddNew = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  function openGellary() {
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        navigation.navigate('PhotoEdit');
      }
    });
  }
  function openCamera() {
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        navigation.navigate('PhotoEdit');
        // console.log(imageUri);
      }
    });
  }
  return (
    <View>
      <Header />
      <View style={styles.openContainer}>
        <TouchableOpacity onPress={() => openCamera()}>
          <ButtonComponent
            text={'Open Camera'}
            paddingVertical={20}
            font={textStyles.fs_600_16}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openGellary()}>
          <ButtonComponent
            text={'Open gellary'}
            paddingVertical={20}
            font={textStyles.fs_600_16}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNew;
