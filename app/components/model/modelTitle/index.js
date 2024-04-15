import { StyleSheet, View } from 'react-native'
import { Text  } from 'react-native-paper';

import React from 'react'

export default function ModelTitle({title}) {
  return (
    <View>
      <Text  style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title : {
        color:'#333333',
        fontFamily:'Roboto',
        fontSize:16,
        fontWeight:600,
        textAlign:'left',
        lineHeight: 20,
        paddingBottom:10,
    }
})