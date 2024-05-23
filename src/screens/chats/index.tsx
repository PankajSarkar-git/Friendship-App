import {View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import SearchIcon from '../../assets/icons/searchIcon';
import {styles} from './styles';
import {textStyles} from '../../components/TextCustom/textStyles';
import ChatItem from '../../components/chatItem';
import {callData, chatData} from '../../data';
import StoryCollection from '../../components/stroyCollection';
import ToggleButton from '../../components/toggleButton';


const Chats = () => {
  const [showCall, setShowCall] = useState<Boolean>(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View style={styles.searchBox}>
          <View style={{position: 'absolute', top: 26, left: 28}}>
            <SearchIcon />
          </View>
          <TextInput
            placeholder="Search here"
            style={[styles.input, styles.boxShadow, textStyles.fs_600_14]}
            returnKeyType="search"
          />
        </View>
        <View>
          <StoryCollection />
        </View>
        <View style={styles.toggleButton}>
          <ToggleButton showCall={showCall} setShowCall={setShowCall} />
        </View>
        <ScrollView
          style={styles.scroll}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          {showCall ? (
            <View>
              {callData.map(item => (
                <ChatItem showCall={showCall} item={item} key={item.id} />
              ))}
            </View>
          ) : (
            <View>
              {chatData.map(item => (
                <ChatItem showCall={showCall} item={item} key={item.id} />
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chats;
