import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const Screen = ({ children, style = {} }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Screen;
