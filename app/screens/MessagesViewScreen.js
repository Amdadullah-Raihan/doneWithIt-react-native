import React, { useState } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import ListItem from '../components/ListItem'; // Assuming this path is correct
import ListItemDeleteAction from '../components/ListItemDeleteAction';

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

  const handleDelete = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id),
    );
  };

  return (
    <FlatList
      data={profiles}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          imageSource={item.imageSource}
          name={item.name}
          details={item.details}
          onPress={() => console.log(`Pressed ${item.name}`)}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
          )}
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
    flex: 1,
  },
});

export default MessagesViewScreen;
