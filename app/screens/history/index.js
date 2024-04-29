import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

export default function History() {
    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
          <Text style={styles.text} >History-Screen</Text>
        </View>
      )
    }
    
const styles = StyleSheet.create({
    text : {
    fontWeight : 700,
    fontSize : 20,
    color:'#FA2D5E',
    }
})
