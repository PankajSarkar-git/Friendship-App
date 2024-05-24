import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/addNewRoute';
import {styles} from './styles';
import {edtFilter} from '../../data';
import SVGIcon from '../../components/svgIcon';
import ButtonComponent from '../../components/button';
import {textStyles} from '../../components/TextCustom/textStyles';
import Slider from '@react-native-community/slider';
import {COLORS} from '../../constants/colors';
import TextCustom from '../../components/TextCustom';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'PhotoEdit'>;

const PhotoEdit = ({route}: DetailsProps) => {
  const [filter, setFilter] = useState('Exposure');
  // console.log(route);

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/img/pic1.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.filterContainer}>
          <FlatList
            // showsHorizontalScrollIndicator={false}
            data={edtFilter}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => setFilter(item.name)}
                style={styles.filter}>
                <SVGIcon svgString={item.icon} width={24} height={24} />
                {/* Render SVG icon using SVGIcon component */}
                <TextCustom
                  color={COLORS.black_text}
                  customStyle={ filter === item.name ? textStyles.fs_700_16 :textStyles.fs_600_14}>
                  {item.name}
                </TextCustom>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={COLORS.blue}
            thumbTintColor={COLORS.blue}
            maximumTrackTintColor={COLORS.black_text}
          />
        </View>
        <TouchableOpacity>
          <ButtonComponent
            text={'Continue'}
            paddingVertical={13}
            font={textStyles.fs_700_16}
            radius={8}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoEdit;
