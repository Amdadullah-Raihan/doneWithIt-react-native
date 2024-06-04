import React from 'react'
import { StyleSheet, Text } from 'react-native'
import styles from './style'

export const StyledText = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}



