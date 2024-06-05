import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

const UserProfileCard = ({ imageSource, name, details, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.textContainer}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.details}>{details}</AppText>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {},
  name: {
    color: colors.black,
    fontWeight: '500',
  },
  details: {
    fontSize: 16,
    color: colors.gray,
    fontWeight: '400',
  },
});

export default UserProfileCard;
