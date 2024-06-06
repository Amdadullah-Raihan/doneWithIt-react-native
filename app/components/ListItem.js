import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';
import ListItemDeleteAction from './ListItemDeleteAction';

const ListItem = ({
  imageSource,
  name,
  details,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={imageSource} />
          <View style={styles.textContainer}>
            <AppText style={styles.name}>{name}</AppText>
            <AppText style={styles.details}>{details}</AppText>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
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

export default ListItem;
