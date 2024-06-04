import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from './app/config/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProductScreen from './app/screens/ProductScreen';

function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <ViewImageScreen /> */}
      {/* <WelcomeScreen />  */}
      {/* <StyledText style={styles.customText}>This is a custom text</StyledText> */}
      <ProductScreen/>
          
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: '#f8f4f4'
  
  },
  customText:{
    color: colors.black,
  }
});

export default App;
