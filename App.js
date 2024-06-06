import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import colors from './app/config/colors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ProductsViewScreen from './app/screens/ProductsViewScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesViewScreen from './app/screens/MessagesViewScreen';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.appContainer}>
        {/* <ViewImageScreen /> */}
        {/* <WelcomeScreen />  */}
        {/* <ProductsViewScreen /> */}
        <MessagesViewScreen />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f8f4f4',
  },
  customText: {
    color: colors.black,
  },
});

export default App;
