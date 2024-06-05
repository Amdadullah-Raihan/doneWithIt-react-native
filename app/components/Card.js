import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'
import AuthorDetails from './UserProfileCard'
import UserProfileCard from './UserProfileCard'

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      <UserProfileCard name="Amdadul Islam" details="5 Listing Items" imageSource={require("../assets/author.jpg")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      borderRadius: 15,
      backgroundColor: colors.white,
      overflow: "hidden"
    },
    image:{
     width: '100%',
     height: 250,
     
    },
    detailsContainer:{
        marginTop: 15,
        padding: 15,
        gap:15,
    },
    title: {
        color: colors.black
    },
    subTitle:{
        color: colors.secondary
    }
})

export default Card
