
import {StyleSheet, View, } from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';

export default function CustomButton({title, textColor, mode, onPress, style})  {
  return (
    <View>
      <Button
        mode={mode}
        textColor={textColor}
        style={style}
        onPress={onPress}>
        <Text style={[style, styles.text]}>{title}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text : {
    fontWeight : 600,
    fontSize : 15
  }
})