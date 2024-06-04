import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../config/colors'

 const AppText = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default AppText;


