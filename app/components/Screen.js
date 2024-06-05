import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const Screen = ({ children, style = {} }) => {
  return <SafeAreaView styles={[styles, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  padddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  padddingBottom: 20,
});

export default Screen;
