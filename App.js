import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from './app/config/colors';
import { StyledText } from './app/components';

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
    justifyContent: 'center',
    alignContent: 'center',
  },
  customText:{
    color: colors.black,
  }
});

export default App;
