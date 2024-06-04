import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import colors from '../../config/colors'

export const StyledButton = ({children, style, ...props}) => {
  return (
    <TouchableHighlight style={[styles.button, style]} {...props}>
      {children}
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    button: {
    width: "100%",
    height: 70,
    border:  1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
    
})


