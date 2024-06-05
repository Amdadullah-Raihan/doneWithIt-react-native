import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import colors from './app/config/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProductsViewScreen from './app/screens/ProductsViewScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      {/* <ViewImageScreen /> */}
      {/* <WelcomeScreen />  */}
      {/* <StyledText style={styles.customText}>This is a custom text</StyledText> */}
      <ProductsViewScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f8f4f4',
  },
  customText: {
    color: colors.black,
  },
});

export default App;
