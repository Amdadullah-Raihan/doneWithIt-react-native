import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import StyledText from './app/components/StyledText';
import colors from './app/config/colors';

function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <ViewImageScreen /> */}
      {/* <WelcomeScreen />  */}
      <StyledText style={styles.customText}>This is a custom text</StyledText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    paddingHorizontal: 15,
  },
  customText:{
    fontSize: 30,
    color: colors.black,
  }
});

export default App;
