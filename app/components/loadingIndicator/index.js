import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, useTheme } from 'react-native-paper'

export default function LoadingIndicator({size, color}) {
    const theme = useTheme();
  return (
    <View>
      <ActivityIndicator 
        color={color? color : theme.colors.primary}
        size={size? size : 24}/>
    </View>
  )
}

const styles = StyleSheet.create({})