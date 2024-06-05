import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from './app/config/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProductsViewScreen from './app/screens/ProductsViewScreen';

function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <ViewImageScreen /> */}
      {/* <WelcomeScreen />  */}
      {/* <StyledText style={styles.customText}>This is a custom text</StyledText> */}
      <ProductsViewScreen/>
          
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: '#f8f4f4'
  
  },
  customText:{
    color: colors.black,
  }
});

export default App;
