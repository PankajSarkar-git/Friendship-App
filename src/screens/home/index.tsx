import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import sizer from '../../helper/sizer';
import Story from '../../components/story';

import {storyData, postData} from '../../data';

import PostCard from '../../components/postcard';
import Header from '../../components/Header';
import StoryCollection from '../../components/stroyCollection';
import {styles} from './styles';

const seenStories = storyData.filter((item, idx) => {
  return item.seen === true;
});

// console.log(seenStories);

const unseenStories = storyData.filter((item, idx) => {
  return item.seen !== true;
});

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header />
      {/* ______________________story collections__________________  */}
      <StoryCollection />
      {/* __________________posts____________________ */}
      <View style={styles.postContainer}>
        {postData.map((item, idx) => (
          <PostCard
            key={`post ${idx}`}
            name={item.name}
            location={item.location}
            postmedia={item.image_url}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
