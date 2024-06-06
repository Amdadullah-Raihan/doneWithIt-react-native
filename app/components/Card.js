import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import AuthorDetails from './UserProfileCard';
import UserProfileCard from './UserProfileCard';

const Card = ({
  title = 'Title',
  subTitle = 'Sub Title',
  image = '',
  style = {},
}) => {
  return (
    <View style={styles.cardContainer}>
      {!image ? (
        <View style={styles.imageNotFound}>
          <MaterialIcons name="not-interested" size={24} color={colors.gray} />
          <Text style={{ color: colors.gray }}>Image not found</Text>
        </View>
      ) : (
        <Image source={image} style={[styles.image, style]} />
      )}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      <UserProfileCard
        name="Amdadul Islam"
        details="5 Listing Items"
        imageSource={require('../assets/author.jpg')}
        onPress={() => alert('User profile clicked')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
  imageNotFound: {
    height: 250,
    width: '100%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  detailsContainer: {
    marginTop: 15,
    padding: 15,
    gap: 15,
  },
  title: {
    color: colors.black,
  },
  subTitle: {
    color: colors.secondary,
  },
});

export default Card;
