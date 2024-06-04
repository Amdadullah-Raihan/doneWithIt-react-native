import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";

function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ViewImageScreen />
      {/* <WelcomeScreen /> Uncomment this line and comment the above line to display the WelcomeScreen */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
  },
});

export default App;
