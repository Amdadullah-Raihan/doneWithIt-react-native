import React, { useState } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import AppText from '../components/AppText';
import UserProfileCard from '../components/UserProfileCard'; // Assuming this path is correct

const mockUserProfiles = [
  {
    id: 1,
    name: 'John Doe',
    details: 'Software Engineer',
    imageSource: require('../assets/author.jpg'), // Using the same image for all profiles
  },
  {
    id: 2,
    name: 'Jane Smith',
    details: 'UX Designer',
    imageSource: require('../assets/author.jpg'),
  },
  {
    id: 3,
    name: 'Alice Johnson',
    details: 'Product Manager',
    imageSource: require('../assets/author.jpg'),
  },
  {
    id: 4,
    name: 'Bob Brown',
    details: 'DevOps Engineer',
    imageSource: require('../assets/author.jpg'),
  },
  {
    id: 5,
    name: 'Charlie White',
    details: 'QA Specialist',
    imageSource: require('../assets/author.jpg'),
  },
];

const MessagesViewScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [profiles, setProfiles] = useState(mockUserProfiles);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate fetching new data and updating the state
    setTimeout(() => {
      setProfiles([
        ...mockUserProfiles,
        {
          id: 6,
          name: 'New User',
          details: 'New Role',
          imageSource: require('../assets/author.jpg'),
        },
      ]);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <FlatList
      data={profiles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <UserProfileCard
          imageSource={item.imageSource}
          name={item.name}
          details={item.details}
          onPress={() => console.log(`Pressed ${item.name}`)}
        />
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.messagesContainer}
    />
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    padding: 10,
  },
});

export default MessagesViewScreen;
