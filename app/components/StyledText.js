import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../config/colors'

const StyledText = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        color: colors.primary,
    }
})

export default StyledText
