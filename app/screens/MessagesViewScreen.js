import React from 'react';
import { StyleSheet, View } from 'react-native';
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
  return (
    <View style={styles.messagesContainer}>
      {mockUserProfiles.map((profile) => (
        <UserProfileCard
          key={profile.id}
          imageSource={profile.imageSource}
          name={profile.name}
          details={profile.details}
          onPress={() => console.log(`Pressed ${profile.name}`)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
});

export default MessagesViewScreen;
