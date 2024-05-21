import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import sizer from '../../helper/sizer';
import Story from '../../components/story';

import {storyData, postData} from '../../data';

import PostCard from '../../components/postcard';
import Header from '../../components/Header';

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
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          horizontal={true}
          style={styles.storyCollection}>
          <View style={styles.addStory}>
            <Story story={false} />
          </View>
          {unseenStories.map((item, idx) => (
            <View style={styles.storyWrapper} key={`unseenstory ${idx}`}>
              <Story
                story={true}
                seen={item.seen}
                img={item.img}
                name={item.name}
              />
            </View>
          ))}
          {seenStories.map((item, idx) => (
            <View style={styles.storyWrapper} key={`seenstory ${idx}`}>
              <Story
                story={true}
                seen={item.seen}
                img={item.img}
                name={item.name}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.postContainer}>
        {postData.map((item, idx) => (
          <PostCard
            name={item.name}
            location={item.location}
            postmedia={item.image_url}
          />
        ))}
      </View>

      {/* __________________posts____________________ */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '',
  },

  storyCollection: {
    paddingHorizontal: sizer.horizontalScale(8),
    marginVertical: sizer.horizontalScale(6),
  },
  storyWrapper: {
    marginHorizontal: sizer.horizontalScale(4), // Adds horizontal spacing between items
  },
  addStory: {
    marginRight: 4,
  },
  contentContainer: {
    alignItems: 'center',
  },
  postContainer: {
    paddingHorizontal: sizer.horizontalScale(16),
  },
});

export default Home;
