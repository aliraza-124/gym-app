import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import ProfileDropdown from '../../components/dropDown/profileDropdown'

export default function Workout() {
    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
          <Text style={styles.text} >Workout-Screen</Text>
          <ProfileDropdown/>
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