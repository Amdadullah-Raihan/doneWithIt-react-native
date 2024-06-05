import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

const Screen = ({ children, style = {} }) => {
  return <SafeAreaView styles={styles}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  padddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
});

export default Screen;
