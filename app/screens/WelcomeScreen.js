import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View,  } from "react-native";

import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton 
          style={{backgroundColor:colors.primary}}
          onPress={() => alert('Login Button Pressed')}
          >
          <AppText style={styles.buttonText}>Login</AppText>
        </AppButton>
        <AppButton
          style={{backgroundColor:colors.secondary}}
          onPress={() => alert('Register Button Pressed')}
          >
            <AppText style={styles.buttonText}>Register</AppText>
        </AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    gap:15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default WelcomeScreen;
