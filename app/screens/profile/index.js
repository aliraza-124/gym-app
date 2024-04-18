import { StyleSheet, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import { Text } from 'react-native-paper'
import BackgroundIcon from '../../components/backgroundIcon'
import ProfileForm from './profileForm'

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <BackgroundImage  >
        
        {/* <Text>Profile</Text> */}
        <ProfileForm navigation={navigation}/>
      </BackgroundImage>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'#EEF1F2',
        flex:1,
        padding:2,
        paddingBottom:0
        
        
    },
})