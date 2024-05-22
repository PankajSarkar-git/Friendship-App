import {View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SearchIcon from '../../assets/icons/searchIcon';
import {styles} from './styles';
import {textStyles} from '../../components/TextCustom/textStyles';
import ChatItem from '../../components/chatItem';
import {chatData} from '../../data';

const Chats = () => {
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
        <ScrollView style={styles.scroll} scrollEnabled={true}  showsVerticalScrollIndicator={false}>
          <View>
            {chatData.map(item => (
              <ChatItem item={item} key={item.id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chats;
