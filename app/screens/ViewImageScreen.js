import React from "react";
import { Image, StyleSheet, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.imageContainer}>
      <MaterialCommunityIcons name="email" size={60} color={colors.primary}/>
   
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
