import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View,  } from "react-native";

import { StyledButton, StyledText } from '../components';
import colors from '../config/colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell What You Don't Need!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton 
          style={{backgroundColor:"dodgerblue"}}
          onPress={() => alert('Login Button Pressed')}
          >
          <StyledText style={styles.buttonText}>Login</StyledText>
        </StyledButton>
        <StyledButton
          style={{backgroundColor:colors.primary}}
          onPress={() => alert('Register Button Pressed')}
          >
            <StyledText style={styles.buttonText}>Register</StyledText>
        </StyledButton>
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
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    gap:10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default WelcomeScreen;
