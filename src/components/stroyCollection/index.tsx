import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Story from '../story';
import {storyData} from '../../data';

const StoryCollection = () => {
  const seenStories = storyData.filter((item, idx) => {
    return item.seen === true;
  });

  // console.log(seenStories);

  const unseenStories = storyData.filter((item, idx) => {
    return item.seen !== true;
  });

  return (
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
  );
};

export default StoryCollection;
