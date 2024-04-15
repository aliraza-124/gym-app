import { StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

export default function AppButton({title, varient, onPress}) {
  return (
    
    <Button
        mode={varient}
        style={styles.button}
        onPress={onPress}
    >
        {title}
    </Button>
    
  )
}

const styles = StyleSheet.create({
    button : {
        borderRadius:4,
        // height: 40,
        borderColor:'#FA2D5E',

    }
})