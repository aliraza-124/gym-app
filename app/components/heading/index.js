import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'

// const theme = useTheme();
export default function Heading({title}) {

  return (
    <Text style={styles.heading}>{title}</Text>

  )
}

const styles = StyleSheet.create({
    heading: {
        // color: theme.colors.primary,
        color: 'red',
        fontWeight: 700,
        fontSize: 14,
        fontFamily: 'Roboto',
        paddingVertical:8
        // alignItems: 'flex-start',
        // textAlign:'flex-start',
        // justifyContent: 'flex-start',
      },
})