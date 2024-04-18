import { StyleSheet, View } from 'react-native'
import React from 'react'
import BackgroundImage from '../../components/backgroundImage'
import { Text } from 'react-native-paper'
import AppButton from '../../components/customButton'

export default function Welcome({navigation}) {
  return (
    <BackgroundImage>
        <View style={{justifyContent:'center'}} flex={1}>
            <Text  >Desclaimer</Text>
            <AppButton title={'Go Back'} onPress={navigation.goBack}/>
            

        </View>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({})