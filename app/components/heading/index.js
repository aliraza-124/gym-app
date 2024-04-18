import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

export default function Heading({title}) {
  return (
    <Text style={styles.heading}>{title}</Text>

  )
}

const styles = StyleSheet.create({
    heading: {
        color: '#FA2D5E',
        fontWeight: 700,
        fontSize: 14,
        fontFamily: 'Roboto',
        // alignItems: 'flex-start',
        // textAlign:'flex-start',
        // justifyContent: 'flex-start',
      },
})