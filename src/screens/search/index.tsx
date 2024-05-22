import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import sizer from '../../helper/sizer';
import {COLORS} from '../../constants/colors';
import {textStyles} from '../../components/TextCustom/textStyles';
import SearchIcon from '../../assets/icons/searchIcon';
import TextCustom from '../../components/TextCustom';

const Search = () => {
  const [activeSlide, setActiveSlide] = useState('top');
  const [slide, setSlide] = useState({
    top: true,
    user: false,
    hastag: false,
    post: false,
    events: false,
  });

  const handleSlide = (slide: any) => {
    setActiveSlide(slide);
  };

  const handleSearch = () => {
    console.log('searching....');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.searchBox}>
          <View style={{position: 'absolute', top: 26, left: 28}}>
            <SearchIcon />
          </View>
          <TextInput
            placeholder="Search here"
            style={[styles.input, styles.boxShadow, textStyles.fs_600_14]}
            onSubmitEditing={handleSearch} // Trigger search on submit
            returnKeyType="search"
          />
        </View>
        {/* ........ribbon...........  */}
        <View style={styles.navigation}>
          <TouchableWithoutFeedback
            onPress={() => {
              handleSlide('top');
            }}>
            <View style={styles.navitem}>
              <View style={styles.navText}>
                <TextCustom customStyle={textStyles.fs_600_14}>Top</TextCustom>
              </View>
              {activeSlide === 'top' && <View style={styles.line}></View>}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              handleSlide('user');
            }}>
            <View style={styles.navitem}>
              <View style={styles.navText}>
                <TextCustom customStyle={textStyles.fs_600_14}>
                  Users
                </TextCustom>
              </View>

              {activeSlide === 'user' && <View style={styles.line}></View>}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              handleSlide('hashtag');
            }}>
            <View style={styles.navitem}>
              <View style={styles.navText}>
                <TextCustom customStyle={textStyles.fs_600_14}>
                  Hashtag
                </TextCustom>
              </View>
              {activeSlide === 'hashtag' && <View style={styles.line}></View>}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              handleSlide('post');
            }}>
            <View style={styles.navitem}>
              <View style={styles.navText}>
                <TextCustom customStyle={textStyles.fs_600_14}>Post</TextCustom>
              </View>
              {activeSlide === 'post' && <View style={styles.line}></View>}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              handleSlide('events');
            }}>
            <View style={styles.navitem}>
              <View style={styles.navText}>
                <TextCustom customStyle={textStyles.fs_600_14}>
                  Events
                </TextCustom>
              </View>
              {activeSlide === 'events' && <View style={styles.line}></View>}
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* .............posts,,,,,,,,,,, */}
        <View
          style={{
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'space-between',
            paddingHorizontal: sizer.horizontalScale(16),
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'relative',
    paddingHorizontal: sizer.horizontalScale(16),
    paddingVertical: sizer.horizontalScale(12),
  },
  input: {
    paddingLeft: sizer.horizontalScale(46),
    paddingRight: sizer.horizontalScale(10),
    paddingVertical: sizer.horizontalScale(10),
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.mistgray,
  },
  boxShadow: {
    shadowColor: COLORS.lighterGray, // Color of the shadow
    shadowOffset: {width: 2, height: 2}, // Offset for the shadow
    shadowOpacity: 1, // Opacity of the shadow
    shadowRadius: 2, // Blur radius of the shadow
    // elevation: 0.2,
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  },

  // -----ribbon style -------
  navigation: {
    // paddingHorizontal: sizer.horizontalScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  navitem: {position: 'relative'},
  navText: {paddingHorizontal: 16},
  line: {
    width: '100%',
    height: 2,
    backgroundColor: 'blue',
  },
});

export default Search;
